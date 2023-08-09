import { useState, useEffect, useContext } from "react";
import { useNavigate } from "@remix-run/react";
import {
  DomainSelectForm,
  GeneralInstructions,
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  DomainInstructions,
} from "~/components/Wizard/FormSteps";
import { Loading } from "~/components";
import Wizard, { links as wizardLinks } from "~/components/Wizard/Wizard";
import {
  loadingLinks,
  projectTilesLinks,
  footerCompactLinks,
  taskListLinks,
  projectLinks,
} from "~/components";
import toast from "../utils/toast.client";
import { APIService } from "~/shared/services/api-service";
import getEnv from "~/shared/utils/env";
import { StoreContext } from "~/components/Wizard/Store";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...wizardLinks(),
  ...loadingLinks(),
  ...projectTilesLinks(),
  ...footerCompactLinks(),
  ...taskListLinks(),
  ...projectLinks(),
];

const Application = () => {
  const [loading, setLoading] = useState(false);
  const { setUserProjects, selectedDomainSlug, setSubmitted, domain, setYear } =
    useContext(StoreContext);
  let history = useNavigate();
  let { blob } = useContext(StoreContext);

  const env = getEnv();
  const endTime = parseInt(env.APPLICATION_DEADLINE!);

  useEffect(() => {
    let res;
    let retrievedProjects = [];
    let year = "";
    (async () => {
      setLoading(true);
      try {
        res = await APIService.getInstance().fetchApplications();
        const userInfo = await APIService.getInstance().fetchUserInfo();
        year = userInfo.data.user.registration_number.substring(2, 4);
        retrievedProjects = res.data.applications;
      } catch (err) {
        console.log(err);
        toast.error("Something broke");
      } finally {
        setUserProjects(retrievedProjects);
        setYear(year);
        setLoading(false);
      }
    })();
  }, []);

  const onSubmit = async (values: any) => {
    setSubmitted(true);
    const userInfo = await APIService.getInstance().fetchUserInfo();
    const year = userInfo.data.user.registration_number.substring(2, 4);
    if (domain === "gfx" || domain === "vfx" || domain === "content_writing") {
      if (year === "21" && (domain === "gfx" || domain === "vfx")) {
        if (blob.length <= 0) {
        toast.error("You must upload a file to continue.");
          return setSubmitted(false);
        }
      }
      values.question_8 = blob;
    }
    if (selectedDomainSlug === "") {
      toast.error("You need to select a domain to continue.");
    } else {
      setSubmitted(true);
      try {
        await APIService.getInstance().addApplication(values);
        history("/dashboard");
      toast.success("You've successfully submitted your application.");
      } catch (err) {
      toast.error("We were flying to mars and ran into some asteroids. Please check back soon.");
      } finally {
        setSubmitted(false);
      }
    }
  };
  if (endTime - Date.now() > 0)
    return loading ? (
      <Loading />
    ) : (
      <div>

      <Wizard
        validationSchemas={[
          GeneralInstructions.validationSchema,
          DomainSelectForm.validationSchema,
          DomainInstructions.validationSchema,
          Question1.validationSchema,
          Question2.validationSchema,
          Question3.validationSchema,
          Question4.validationSchema,
          Question5.validationSchema,
          Question6.validationSchema,
          Question7.validationSchema,
          Question8.validationSchema,
        ]}
        initialValues={[
          GeneralInstructions.initialValues,
          DomainSelectForm.initialValues,
          DomainInstructions.initialValues,
          Question1.initialValues,
          Question2.initialValues,
          Question3.initialValues,
          Question4.initialValues,
          Question5.initialValues,
          Question6.initialValues,
          Question7.initialValues,
          Question8.initialValues,
        ]}
        formComponents={[
          DomainSelectForm.component,
          DomainInstructions.component,
          Question1.component,
          Question2.component,
          Question3.component,
          Question4.component,
          Question5.component,
          Question6.component,
          Question7.component,
          Question8.component,
        ]}
        handleSubmit={onSubmit}
      />
      </div>

    );
  else {
    return <h1>Applications have now been closed</h1>;
  }
};

export default Application;
