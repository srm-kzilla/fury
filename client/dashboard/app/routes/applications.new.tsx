import { loadingLinks, Loading } from "~/components";
import * as Yup from "yup";
import formFieldStyles from "~/styles/components/FormFields.css";
import formStepsStyles from "~/styles/components/FormSteps.css";
import wizardStyles from "~/styles/components/Wizard.css";
import {
  createFormSession,
  destroyFormSession,
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
import { getDomainName, questionsArray } from "~/utils/applications";
import { BiLoader } from "react-icons/bi";
import { useEffect, useRef } from "react";
import { postFinalApplication } from "~/utils/api.server";
import type { ValidationError } from "yup";

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
  ...loadingLinks(),
];

type ActionData = {
  error?: string;
};

const checkIfAllPreviousQuestionsAnswered = (
  currentQuestionNumber: string,
  answers: Answer[]
) => {
  for (let i = 1; i < parseInt(currentQuestionNumber); i++) {
    if (!answers.find((answer) => answer.questionNumber === i.toString())) {
      return redirect(`/applications/new?question=${i}`);
    }
  }

  return true;
};

export const loader: LoaderFunction = async ({ request }) => {
  const formSession = await getFormSession(request);

  if (!formSession) {
    return createFormSession(request);
  } else if (formSession && !formSession.domain) {
    return redirect("/applications/domain-select");
  }

  console.log("[formSession] ", formSession);

  const url = new URL(request.url);
  const questionNumber = url.searchParams.get("question") || "1";

  if (parseInt(questionNumber) > questionsArray.length) {
    return redirect("/applications/new");
  }

  const { domain, answers } = formSession;

  let typedAnswer = "";
  if (answers) {
    const { answer } = answers.find(
      (answer) => answer.questionNumber === questionNumber
    ) || { answer: "" };

    typedAnswer = answer;
  }

  if (checkIfAllPreviousQuestionsAnswered(questionNumber, answers)) {
    return { domain, questionNumber, typedAnswer };
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const formSession = await getFormSession(request);

  const url = new URL(request.url);
  const questionNumber = url.searchParams.get("question") || "1";

  const action = formData.get("_action");
  switch (action) {
    case "next": {
      try {
        const answer = await validateAnswer(formData);

        if (parseInt(questionNumber) === questionsArray.length) {
          await postFinalApplication(
            request,
            formSession.domain,
            formSession.answers
          );
          return destroyFormSession(request);
        }

        return await updateFormSession(
          request,
          {
            ...formSession,
            answers: formSession.answers
              ? [
                ...formSession.answers.filter(
                  (answer) => questionNumber !== answer.questionNumber
                ),
                { questionNumber, answer },
              ]
              : [{ questionNumber, answer }],
          },
          `/applications/new?question=${parseInt(questionNumber) + 1}`
        );
      } catch (error) {
        return { error };
      }
    }
    case "previous": {
      if (parseInt(questionNumber) === 1) {
        return redirect("/applications/domain-select");
      }
      return redirect(`/applications/new?question=${parseInt(questionNumber) - 1}`);
    }
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
  const { domain, questionNumber, typedAnswer } = useLoaderData();
  const navigation = useNavigation();
  const actionData = useActionData<ActionData>();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    formRef.current?.reset();
  }, [questionNumber]);

  const currentQuestion = questionsArray[parseInt(questionNumber) - 1].find(
    (q) => q.domain === domain
  );

  return (
    <div className="kz-wizard">
      {currentQuestion ? (
        <Form method="POST" className="kz-form-container" ref={formRef}>
          <div className="kz-form">
            <div className="kz-message-screen">
              <h1>{getDomainName(currentQuestion.domain)} Application</h1>
              <h4
                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
              ></h4>
              <div className="kz-form-field">
                <textarea
                  name="answer"
                  placeholder="Type your answer here"
                  defaultValue={typedAnswer}
                />
              </div>
              <sub>{actionData?.error}</sub>
            </div>
          </div>
          <div className="kz-button-container">
            <button type="submit" name="_action" value="previous" >Previous</button>
            <button type="submit" name="_action" value="next">
              {navigation.state === "submitting" ? (
                <BiLoader className="spin" />
              ) : questionNumber == questionsArray.length ? (
                "Submit"
              ) : (
                "Next"
              )}
            </button>
          </div>
        </Form>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Application;
