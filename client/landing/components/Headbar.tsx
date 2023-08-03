import React from "react";
const Headbar = () => {
  return (
    <div className="p-1 pb-2 flex items-center justify-center text-xs font-body font-light z-50 bg-header-img ">
      <p>
        Dear Freshers, we see you can&apos;t wait. Recruitments are now open!
        :&#41;{" "}
        <a href="#" className="underline decoration-dashed">
          {" "}
          #2022Wrapped
        </a>
      </p>
    </div>
  );
};

export default Headbar;
