import Lottie from "react-lottie";
import applicationStyles from "~/styles/pages/Application.css";
import paperPlaneLottie from "~/assets/lotties/paperplane.json";
import tickLottie from "~/assets/lotties/tick.json";
import { Sidebar, sidebarLinks } from "~/components";
import { useLoaderData, useNavigate } from "@remix-run/react";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { getApplications } from "~/utils/api.server";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
  {
    rel: "stylesheet",
    href: applicationStyles,
  },
];

type LoaderData = {
  application: Application;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  const { domain } = params;
  if (!domain) return redirect("/");

  const { applications } = await getApplications(request);

  const application = applications.find(
    (application) => application.domain === domain
  );

  if (!application) return redirect("/");

  return json({ application });
};

export default function Application() {
  const {
    application: { status },
  } = useLoaderData<LoaderData>();
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <div>
        <Sidebar />
      </div>
      <div className="main">
        {status === "accepted" ? (
          <div className="main-accepted">
            <div className="wrapper-accepted">
              <Lottie
                style={{ width: "60%", height: "60%" }}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: tickLottie,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
              <div className="text">
                <h1>Accepted</h1>
                <p>We loved you!</p>
              </div>
              <div className="status-wrapper">
                <div>
                  <div className="green-circle"></div>
                  <p>Draft</p>
                </div>
                <div>
                  <div className="green-circle"></div>
                  <p>In Review</p>
                </div>
                <div>
                  <div className="green-circle"></div>
                  <p>Accepted</p>
                </div>
              </div>
            </div>
            <div className="wrapper-text">
              <h1>What's next?</h1>
              <p>
                You will get an email from us regarding the interview where
                we'll talk about your interests, your past experience, out
                vision for the future, and how you can contribute and help us
                achieve it. <br />
                Meanwhile, keep an eye on our Instagram page for updates. If you
                have any queries ping us on out Instagram handle.
              </p>
              <h5>
                Not yet joined the super awesome SRMKZILLA Discord?{" "}
                <a href="/">Join us on Discord</a>
              </h5>
            </div>
          </div>
        ) : status === "rejected" ? (
          <div className="rejected-wrapper">
            <h1>
              We carefully reviewed your submission,{" "}
              <span>and decided not to proceed with your application.</span>
            </h1>

            <p>
              Although it didn't workout this time, we may contact you if we
              come across another opening that we think could interest you and
              may be a good match for your skills and experience.
            </p>
            <p>
              Thanks again for your interests in opportunities at SRMKZILLA. We
              wish you the best of luck in your search. We hope to see you
              reapply for a future batch.
            </p>
            <div className="status-wrapper">
              <div>
                <div className="green-circle"></div>
                <p>Draft</p>
              </div>
              <div>
                <div className="green-circle"></div>
                <p>In Review</p>
              </div>
              <div>
                <div className={"red-circle"}></div>
                <p>Rejected</p>
              </div>
            </div>
          </div>
        ) : status === "pending" ? (
          <div className="main">
            <div className="lottie">
              <Lottie
                style={{ width: "80%", height: "80%" }}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: paperPlaneLottie,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <div>
              <h1>In Review</h1>
            </div>
            <div>
              <p>We are reviewing applications on a rolling basis.</p>
            </div>
            <div className="status-wrapper">
              <div>
                <div className="green-circle"></div>
                <p>Draft</p>
              </div>
              <div>
                <div className="green-circle"></div>
                <p>In Review</p>
              </div>
              <div>
                <div className="border-circle"></div>
                <p>Accepted</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="main">
            <div className="lottie">
              <Lottie
                style={{ width: "80%", height: "80%" }}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData: paperPlaneLottie,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              />
            </div>
            <div>
              <h1>Draft</h1>
            </div>
            <div className="draft-wrapper">
              <p>Complete your application now!</p>
              <button onClick={() => navigate("/applications/new")}>
                Take me there!
              </button>
            </div>
            <div className="status-wrapper">
              <div>
                <div className="border-circle"></div>
                <p>Draft</p>
              </div>
              <div>
                <div className="border-circle"></div>
                <p>In Review</p>
              </div>
              <div>
                <div className="border-circle"></div>
                <p>Accepted</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
