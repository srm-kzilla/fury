import footerCompactStyles from "~/styles/shared/components/FooterCompact.css";
import { Assets } from "~/constants";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: footerCompactStyles,
    },
  ];
};

const FooterCompact = () => {
  return (
    <div className="kz-footer-compact">
      <p>
        crafted by your <img src={Assets.MASK_PARROT} alt="parrot" /> crazy
        friends on the SRMKZILLA team
      </p>
    </div>
  );
};

export default FooterCompact;
