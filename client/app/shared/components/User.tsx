import React from "react";
import "../../styles/shared/components/User.css";

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
