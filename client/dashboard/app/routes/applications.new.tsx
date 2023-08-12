import {
  loadingLinks,
  projectTilesLinks,
  footerCompactLinks,
  taskListLinks,
  projectLinks,
  Loading,
} from "~/components";
import * as Yup from "yup";
import formFieldStyles from "~/styles/components/FormFields.css";
import formStepsStyles from "~/styles/components/FormSteps.css";
import wizardStyles from "~/styles/components/Wizard.css";
import questionComponentCSS from "~/styles/components/FormSteps.css";
import {
  createFormSession, destroyFormSession,
  getFormSession,
  updateFormSession,
} from "~/utils/session.server";
import { redirect } from "@remix-run/node";
import type {
  ActionFunction,
  LinksFunction,
  LoaderFunction,
} from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
} from "@remix-run/react";
import { getDomainName, questionsArray } from "~/utils/applications.client";
import { BiLoader } from "react-icons/bi";
import type { ValidationError } from "yup";
import { useEffect, useRef } from "react";
import {postDraftApplication, postFinalApplication} from "~/utils/api.server";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: questionComponentCSS,
  },
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
  ...loadingLinks(),
  ...projectTilesLinks(),
  ...footerCompactLinks(),
  ...taskListLinks(),
  ...projectLinks(),
];

type ActionData = {
  error?: string;
};

export const loader: LoaderFunction = async ({ request }) => {
  const formSession = await getFormSession(request);

  if (!formSession) {
    return createFormSession(request);
  } else if (formSession && !formSession.domain) {
    return redirect("/applications/domain-select");
  }

  const domain = formSession.domain;
  const url = new URL(request.url);
  const questionNumber = url.searchParams.get("question") || "1";

  return { domain, questionNumber };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formSession = await getFormSession(request);

  const url = new URL(request.url);
  const questionNumber = url.searchParams.get("question") || "1";

  try {
    const answer = await validateAnswer(formData);

    if (parseInt(questionNumber) === 2) {
      await postFinalApplication(request, formSession.domain, formSession.answers);
      return destroyFormSession(request);
    }

    return await updateFormSession(
      request,
      {
        ...formSession,
        answers: formSession.answers ? [...formSession.answers, { questionNumber, answer }] : [{ questionNumber, answer }]
      },
      `/applications/new?question=${parseInt(questionNumber) + 1}`
    );
  } catch (error) {
    return { error };
  }
};

const validateAnswer = async (formData: FormData) => {
  const answer = formData.get("answer");
  const answerSchema = Yup.string().required("Answer is required");

  try {
    return await answerSchema.validate(answer, { abortEarly: false });
  } catch (error) {
    throw (error as ValidationError).errors[0];
  }
};

const Application = () => {
  const { domain, questionNumber } = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.reset();
  }, [questionNumber]);

  const currentQuestion = questionsArray[parseInt(questionNumber) - 1].find(
    (q) => q.domain === domain
  );

  return currentQuestion ? (
    <Form method="POST" className="kz-form-container" ref={formRef}>
      <div className="kz-form">
        <div className="kz-message-screen">
          <h1>{getDomainName(currentQuestion.domain)} Application</h1>
          <h4
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          ></h4>
          <div className="kz-form-field">
            <textarea name="answer" placeholder="Type your answer here" />
          </div>
          <sub>{actionData?.error}</sub>
        </div>
      </div>
      <div className="kz-button-container">
        <button type="submit">
          {navigation.state === "submitting" ? (
            <BiLoader className="spin" />
          ) : (
            "Next"
          )}
        </button>
      </div>
    </Form>
  ) : (
    <Loading />
  );
};

export default Application;
