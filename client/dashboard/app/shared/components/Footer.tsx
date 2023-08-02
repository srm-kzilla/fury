import footerStyles from "~/styles/shared/components/Footer.css";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaMediumM,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Assets } from "~/constants";
import { observer } from "mobx-react";
import { Link } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: footerStyles,
  },
];

const Footer = () => {
  return (
    <div className="kz-footer">
      <ul className="socials">
        <li>
          <a href="https://instagram.com/srmkzilla">
            <FaInstagram size={21} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/SRMKZILLA_Club">
            <FaTwitter size={21} />
          </a>
        </li>
        <li>
          <a href="https://youtube.com/c/srmkzilla">
            <FaYoutube size={21} />
          </a>
        </li>
        <li>
          <a href="https://medium.com/srmkzilla">
            <FaMediumM size={21} />
          </a>
        </li>

        <li>
          <a href="https://linkedin.com/company/srmkzilla">
            <FaLinkedinIn size={21} />
          </a>
        </li>
        <li>
          <a href="https://facebook.com/srmkzilla">
            <FaFacebookSquare size={21} />
          </a>
        </li>
        <li>
          <a href="mailto:recruitments@srmkzilla.net">
            <FaEnvelope size={21} />
          </a>
        </li>
      </ul>
      <hr />
      <div className="main">
        <div>
          {/*TODO: Apply flexbox here*/}
          <div>
            <div>
              <h4>More about us</h4>
              <ul>
                <li>
                  <a href="https://srmkzilla.net">SRMKZILLA</a>
                </li>
                <li>
                  <a href="https://medium.com/srmkzilla">Blog</a>
                </li>
              </ul>
            </div>
            <div>
              <h4>Related information</h4>
              <ul>
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Equal opportunity</h4>
              <p>
                SRMKZILLA is proud to be an{" "}
                <span>equal opportunity workplace.</span> We are committed to
                equal volunteering opportunity regardless of race, color,
                ancestry, religion, sex, national origin, sexual orientation,
                age, citizenship, disability or gender identity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="footnote">
        <figure>
          <img src={Assets.SRMKZILLA_LOGO_WHITE_MONO} alt="logo" />
        </figure>
        <p>
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
          <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
          apply.
        </p>
      </div>
    </div>
  );
};

export default observer(Footer);
