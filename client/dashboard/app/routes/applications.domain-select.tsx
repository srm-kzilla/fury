import { useEffect, useState } from "react";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { loadingLinks, taskListLinks } from "~/components";
import { getFormSession, updateFormSession } from "~/utils/session.server";
import { BiLoader } from "react-icons/bi";
import toast from "~/utils/toast.client";
import { domains } from "~/utils/applications";
import formFieldStyles from "~/styles/components/FormFields.css";
import formStepsStyles from "~/styles/components/FormSteps.css";
import wizardStyles from "~/styles/components/Wizard.css";
import type {
  ActionFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";

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
  ...taskListLinks(),
];

export const loader: LoaderFunction = async ({ request }) => {
  const formSession = await getFormSession(request);

  if (!formSession || (formSession && formSession.domain)) {
    return redirect("/applications/new");
  }

  return null;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const domain = formData.get("domain");

  if (!domain) {
    return json({
      error: "Domain is required",
      toastMessage: "Domain is required",
    });
  }

  return updateFormSession(request, { domain }, "/applications/new");
};

const DomainSelect = () => {
  const [active, setActive] = useState<number | null>(null);
  const [domain, setDomain] = useState("");
  const navigation = useNavigation();

  const actionData = useActionData();

  useEffect(() => {
    if (actionData?.toastMessage) {
      toast.error(actionData.toastMessage);
    }
  }, [actionData]);

  return (
    <div className="kz-wizard">
      <Form method="POST" className="kz-form-container">
        <div className="kz-form">
          <h1>Select a domain</h1>
          <div className="kz-form-field">
            <input name="domain" value={domain} readOnly hidden />
            {domains.map((option, index) => {
              return (
                <div
                  className={
                    active === index
                      ? `selectable-div active`
                      : `selectable-div`
                  }
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setDomain(option.value);
                  }}
                >
                  <div key={option.key}>
                    <h3>{option.text}</h3>
                    <h4>{option.description}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          <sub>{actionData?.error}</sub>
          <div className="kz-button-container">
            <button type="submit">
              {navigation.state === "submitting" ? (
                <BiLoader className="spin" />
              ) : (
                "Next"
              )}
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DomainSelect;
