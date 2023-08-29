import {
  projectTilesLinks,
  ProjectTiles,
  Project,
  projectLinks,
} from "~/components";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { projects } from "~/utils/projects";
import type {
  ActionFunction,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { redirect } from "@remix-run/node";
import {
  createApplication,
  deleteDraftApplication,
  getUserDetails,
  submitApplication,
  updateApplication,
} from "~/utils/api.server";
import { destroyFormSession, getFormSession } from "~/utils/session.server";
import * as Yup from "yup";
import type { ValidationError } from "yup";
import States from "~/utils/constants";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Technical Projects | SRMKZILLA #Recruitment'23" },
    {
      name: "description",
      content: "Technical Projects SRMKZILLA Recruitment'23",
    },
  ];
};

export const links = () => [...projectTilesLinks(), ...projectLinks()];

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");
  const userDetails = await getUserDetails(request);
  const { application: [{ status = "" } = {}] = [] } = userDetails;
  if (!(status === States.DRAFT)) {
    return redirect("/applications/domain-select");
  }

  return { slug };
};

export type ActionData = {
  errors?: {
    [key: string]: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  await getUserDetails(request);
  const formSession = await getFormSession(request);
  const formData = await request.formData();
  const action = formData.get("_action");

  switch (action) {
    case "show":
      const projectSlug = formData.get("slug");
      return redirect(`/applications/technical-project?slug=${projectSlug}`);

    case "submit":
      const url = new URL(request.url);
      const slug = url.searchParams.get("slug");

      if (!slug) {
        return redirect("/applications/technical-project");
      }

      try {
        const { title, link, subdomain } = await validateTechnicalProjectForm(
          formData
        );
        const answers = [
          { questionNumber: "1", answer: slug },
          { questionNumber: "2", answer: title },
          { questionNumber: "3", answer: link },
          { questionNumber: "4", answer: subdomain },
        ];

        await createApplication(request, "technicalp");
        await updateApplication(request, "technicalp", answers);
        await submitApplication(request, "technicalp");
        return destroyFormSession(request, "form_submitted");
      } catch (errors) {
        return { errors };
      }

    case "delete": {
      await deleteDraftApplication(request, formSession.domain);
      return destroyFormSession(request, "draft_deleted");
    }
  }

  return redirect("/");
};

const validateTechnicalProjectForm = async (formData: FormData) => {
  const getValidationErrors = (err: ValidationError) => {
    const validationErrors = {} as any;

    err.inner.forEach((error: any) => {
      if (error.path) {
        validationErrors[error.path] = error.message;
      }
    });

    return validationErrors;
  };

  const userDetails: { [key: string]: any } = {};
  for (const [key, value] of formData) {
    userDetails[key] = value || "";
  }

  const technicalProjectSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    link: Yup.string().url().required("Link is required"),
    subdomain: Yup.string().required("Subdomain is required"),
  });

  try {
    return await technicalProjectSchema.validate(userDetails, {
      abortEarly: false,
    });
  } catch (error) {
    throw getValidationErrors(error as ValidationError);
  }
};

const Application = () => {
  const { slug } = useLoaderData();
  const actionData = useActionData<ActionData>();
  const [activeProject, setActiveProject] = useState<Project>();

  return (
    <Form method="POST">
      {slug ? (
        <Project projects={projects} slug={slug} actionData={actionData} />
      ) : (
        <ProjectTiles
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      )}
    </Form>
  );
};

export default Application;
