import userStyles from "~/styles/shared/components/User.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: userStyles,
  },
];

interface Props {
  clickDisabled: boolean;
}

const User = (props: Props) => {
  return (
    <div className="kz-user">
      <h2>Pick a project to continue</h2>
    </div>
  );
};

export default User;
