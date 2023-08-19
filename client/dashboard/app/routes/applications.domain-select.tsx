import { useEffect, useState } from "react";
import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useNavigation } from "@remix-run/react";
import { loadingLinks } from "~/components";
import { getFormSession, updateFormSession } from "~/utils/session.server";
import { BiHomeAlt, BiLoader } from "react-icons/bi";
import toast from "~/utils/toast.client";
import { domains, getDomainName } from "~/utils/applications";
import formFieldStyles from "~/styles/components/FormFields.css";
import formStepsStyles from "~/styles/components/FormSteps.css";
import wizardStyles from "~/styles/components/Wizard.css";
import type {
  ActionFunction,
  LoaderFunction,
  LinksFunction,
} from "@remix-run/node";
import { createApplication, getUserDetails } from "~/utils/api.server";

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

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserDetails(request);
  const formSession = await getFormSession(request);

  if (!formSession || (formSession && formSession.domain)) {
    return redirect("/applications/new");
  }

  return user;
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  let domain = formData.get("domain") as string;

  if (!domain) {
    return json({
      error: "Domain is required",
      toastMessage: "Domain is required",
    });
  }

  const { year } = await getUserDetails(request);

  if (domain === "technical" && year != 1) domain = "technicalp";

  const { application } = await getUserDetails(request);

  if (application.some((app) => app.domain === domain)) {
    return json({
      toastMessage: `You have applied for ${getDomainName(domain)} already`,
    });
  }

  await createApplication(request, domain);
  return updateFormSession(
    request,
    { domain, answers: [] },
    "/applications/new"
  );
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
        <div className="kz-form-header">
          <Link to="/" prefetch="viewport">
            <BiHomeAlt size={36} className="home-icon" title="Home" />
          </Link>
        </div>
        <div className="kz-form">
          <h1>Select a domain</h1>
          <div className="kz-form-field kz-selectable-div-container">
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
