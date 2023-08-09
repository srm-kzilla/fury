import { Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { BiHomeAlt, BiLoader } from "react-icons/bi";
import { Link } from "@remix-run/react";
import * as Yup from "yup";
import toast from "../../utils/toast.client";
import ProjectQuestionComponent from "./ProjectComponent";
import { StoreContext } from "./Store";
import wizardStyles from "~/styles/components/Wizard.css";
import formFieldStyles from "~/styles/components/FormFields.css";
import formStepsStyles from "~/styles/components/FormSteps.css";
import type { LinksFunction } from "@remix-run/node";
import { Toaster } from "react-hot-toast";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: formFieldStyles,
  },
  {
    rel: "stylesheet",
    href: formStepsStyles,
  },
  {
    rel: "stylesheet",
    href: wizardStyles,
  },
];

const Wizard = (props: any) => {
  const { validationSchemas, formComponents, handleSubmit, initialValues } =
    props;

  const {
    projectSchema,
    projectComponents,
    initialProjectValue,
    handleProjectSubmit,
  } = ProjectQuestionComponent;

  const { isSubmitted, userProjects, domain, year } = useContext(StoreContext);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { selectedProjectSlug, setSelectedProjectSlug, setSubmitted } =
    useContext(StoreContext);
  //todo add year field
  const isProjectForm = () => domain === "technical" && year !== "22";

  const [projectForm, setProjectForm] = useState(false);
  const [step, setStep] = useState(0);

  const schema = projectForm
    ? projectSchema[step - 2]
    : validationSchemas[step];
  const getInitialValues = projectForm
    ? initialProjectValue.reduce((item: any, total: any) => {
        return { ...total, ...item };
      })
    : initialValues.reduce((item: any, total: any) => {
        return { ...total, ...item };
      });

  const getFormComponent = projectForm
    ? projectComponents[step - 2]
    : formComponents[step];
  const [lastStep, setLastStep] = useState(
    projectForm ? 3 : formComponents.length - 1
  );

  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    step < 3 && setProjectForm(false);
    step < 3 && setLastStep(formComponents.length - 1);
    setStep(step - 1);
  };

  return (
    <div className="kz-wizard">
      {userProjects.length < 2 ? (
        <Formik
          initialValues={getInitialValues}
          validationSchema={Yup.object().shape(schema)}
          onSubmit={async (values, { setSubmitting, setFieldTouched }) => {
            setSubmitting(false);
            if (step === lastStep) {
              if (projectForm) {
                setSubmitted(true);
                const statusCode = await handleProjectSubmit(
                  values,
                  selectedProjectSlug
                );
                if (statusCode === 200) {
                  toast.success("Project added successfully");
                  return setInterval(() => {
                    window.location.href = "/dashboard";
                  }, 3000);
                } else {
                  toast.error("Oops! Something went wrong");
                }
                setSubmitted(false);
              } else handleSubmit(values);
            } else {
              next();

              step >= 1 && setProjectForm(isProjectForm());
              if (isProjectForm()) setLastStep(3);

              Object.keys(initialValues[step + 1]).map((key) =>
                setFieldTouched(key, false, false)
              );
            }
          }}
        >
          {() => {
            return (
              <>
                <Form className="kz-form-container">
                  <Link to="/dashboard">
                    <BiHomeAlt size={36} className="home-icon" title="Home" />
                  </Link>
                  {React.createElement(getFormComponent, {})}
                  <FormFooter
                    step={step}
                    totalStep={lastStep}
                    projectForm={projectForm}
                  >
                    <WizardButtons
                      stepNum={step}
                      lastStep={lastStep}
                      handleBack={prev}
                      isSubmitted={isSubmitted}
                    />
                  </FormFooter>
                </Form>
              </>
            );
          }}
        </Formik>
      ) : (
        //   TODO: Apply flexbox here
        <div>
          <Link to="/dashboard">
            <BiHomeAlt size={36} className="home-icon" title="Home" />
          </Link>
          <div className="kz-message-screen">
            <h1>You have already applied for two domains.</h1>
            <h4>If you think this is a mistake, please contact support.</h4>
          </div>
        </div>
      )}
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

const WizardButtons = ({ stepNum, lastStep, handleBack, isSubmitted }: any) => {
  return (
    <div className="kz-button-container">
      {stepNum > 0 ? (
        <>
          <button type="button" onClick={handleBack}>
            Previous
          </button>
        </>
      ) : null}
      {stepNum < lastStep ? (
        <>
          <button type="submit">Next</button>
        </>
      ) : (
        <button type="submit" disabled={isSubmitted}>
          {isSubmitted ? <BiLoader className="spin" /> : "Submit Application"}
        </button>
      )}
    </div>
  );
};

type FormFooterProp = {
  step: number;
  children: React.ReactNode;
  totalStep: number;
  projectForm: boolean;
};

export const FormFooter = ({
  step,
  children,
  totalStep,
  projectForm,
}: FormFooterProp) => {
  const progressBarStyles = {
    container: {
      width: "100%",
      height: 10,
      borderRadius: "5rem",
      backgroundColor: "#d5d5d5",
    },
    completed: {
      height: "100%",
      borderRadius: "5rem",
      width: `${(step / totalStep) * 100}%`,
      backgroundColor: "#ff644e",
    },
  };
  return (
    <div className="kz-form-footer">
      <div className="center footer-item-1">
        {step + 1} of {totalStep + 1}
      </div>
      <div className=" footer-item-2">
        <div style={progressBarStyles.container}>
          <div style={progressBarStyles.completed}></div>
        </div>
      </div>
      <div className="center footer-item-1">{children}</div>
    </div>
  );
};

Wizard.propTypes = {
  validationSchemas: PropTypes.arrayOf(PropTypes.object).isRequired,
  initialValues: PropTypes.arrayOf(PropTypes.object).isRequired,
  formComponents: PropTypes.arrayOf(PropTypes.func).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Wizard;
