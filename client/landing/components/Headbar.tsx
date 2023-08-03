import React from "react";
import Markdown from "markdown-to-jsx";
const Headbar = ({ headline }: { headline?: string }) => {
  return headline ? (
    <div className="p-1 pb-2 flex items-center justify-center text-xs font-body font-light z-50 bg-header-img ">
      <Markdown>{headline}</Markdown>
    </div>
  ) : null;
};

export default Headbar;
