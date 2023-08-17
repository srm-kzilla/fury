import footerCompactStyles from "~/styles/components/FooterCompact.css";
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
        crafted by your <img src="/mask_parrot.gif" alt="parrot" /> crazy
        friends on the SRMKZILLA team
      </p>
    </div>
  );
};

export default FooterCompact;
