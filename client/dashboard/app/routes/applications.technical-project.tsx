import {
  projectTilesLinks,
  ProjectTiles,
  Project,
  projectLinks,
} from "~/components";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { useState } from "react";
import { projects } from "~/utils/projects";
import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import {createApplication, getUserDetails, submitApplication, updateApplication} from "~/utils/api.server";
import { destroyFormSession } from "~/utils/session.server";
import * as Yup from "yup";
import type { ValidationError } from "yup";

export const links = () => [...projectTilesLinks(), ...projectLinks()];

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const slug = url.searchParams.get("slug");

  return { slug };
};

export type ActionData = {
  errors?: {
    [key: string]: string;
  };
};

export const action: ActionFunction = async ({ request }) => {
  await getUserDetails(request);
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

        await updateApplication(request, "technicalp", answers);
        await submitApplication(request, "technicalp");
        return redirect("/");
      } catch (errors) {
        return { errors };
      }

    case "delete": {
      return destroyFormSession(request);
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
    link: Yup.string().required("Link is required"),
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
