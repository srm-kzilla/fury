import applicationStyles from "../styles/pages/Application.css";
import { LinksFunction } from "@remix-run/node";
// import Lottie from "react-lottie";
import paperPlaneLottie from "../assets/lotties/paperplane.json";
import tickLottie from "../assets/lotties/tick.json";
import { Sidebar } from "~/components";
import { sidebarLinks } from "~/components";
import { useEffect, useState } from "react";
import { useParams } from "@remix-run/react";
import getEnv from "~/shared/utils/env";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
  {
    rel: "stylesheet",
    href: applicationStyles,
  },
];

export default function Application() {
  const [data, setData] = useState();
  const params = useParams();
  const { domain } = params;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${getEnv().API_BASE_URL}/applications/get/${domain}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("access_token"),
            },
          }
        );
        const data = await response.json();
        console.log({ data });
        setData(data.status);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="wrapper">
      <div>
        <Sidebar />
      </div>

      <div className="main">
        {data === "Accepted" ? (
          <div className="mainAccepted">
            <div className="wrapperAccepted">
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
              <div className="statusWrapper">
                <div>
                  <div className="greenCircle"></div>
                  <p>Draft</p>
                </div>
                <div>
                  <div className="greenCircle"></div>
                  <p>In Review</p>
                </div>
                <div>
                  <div className="greenCircle"></div>
                  <p>Accepted</p>
                </div>
              </div>
            </div>
            <div className="wrapperText">
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
        ) : data === "Rejected" ? (
          <div className="rejectWrapper">
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
            <div className="statusWrapper">
              <div>
                <div className="greenCircle"></div>
                <p>Draft</p>
              </div>
              <div>
                <div className="greenCircle"></div>
                <p>In Review</p>
              </div>
              <div>
                <div className={"redCircle"}></div>
                <p>Rejected</p>
              </div>
            </div>
          </div>
        ) : data === "in_review" ? (
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
            <div className="statusWrapper">
              <div>
                <div className="greenCircle"></div>
                <p>Draft</p>
              </div>
              <div>
                <div className="greenCircle"></div>
                <p>In Review</p>
              </div>
              <div>
                <div className="borderCircle"></div>
                <p>Accepted</p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
