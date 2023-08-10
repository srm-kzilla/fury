import { useState, useContext } from "react";
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
import getEnv from "~/utils/env";
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

  // TODO: API Integration

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
          handleSubmit={() => {}}
        />
      </div>
    );
  else {
    return <h1>Applications have now been closed</h1>;
  }
};

export default Application;
