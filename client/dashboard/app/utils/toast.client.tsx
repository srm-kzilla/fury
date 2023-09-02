import toast from "react-hot-toast";
import { AiOutlineClose } from "react-icons/ai";

const toastBaseOptions = {
  style: {
    background: "#111111",
    color: "#fff",
    border: "1px solid #30363d",
    maxWidth: "300px",
    padding: "1rem",
    zIndex: "100000",
  },
};

export default {
  show: (message: string, icon: string) =>
    toast.custom((t) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "#111111",
          color: "#fff",
          border: "1px solid #30363d",
          padding: "1rem",
          zIndex: "100000",
          width: "300px",
          borderRadius: "10px",
          gap: "1rem",
          justifyContent: "space-between",
        }}
      >
        {icon}
        <h1
          style={{
            fontSize: "0.8rem",
          }}
        >
          {message}
        </h1>
        <h5
          style={{
            cursor: "pointer",
          }}
          onClick={() => toast.dismiss()}
        >
          <AiOutlineClose />
        </h5>
      </div>
    )),
  error: (message: string) => toast.error(message, toastBaseOptions),
  success: (message: string) => toast.success(message, toastBaseOptions),
};

export const getToastFromIdentifier = (
  identifier: ToastIdentifier
): ToastMessage => {
  switch (identifier) {
    case "form_saved":
      return { type: "success", message: "Form saved successfully" };

    case "form_submitted":
      return {
        type: "custom",
        message: "Form submitted successfully",
        icon: "🚀",
      };

    case "form_submit_error":
      return { type: "error", message: "Error submitting form" };

    case "draft_deleted":
      return { type: "success", message: "Draft deleted successfully" };

    case "answer_required":
      return { type: "error", message: "Please answer answer the question" };

    case "application_limit_reached":
      return { type: "error", message: "You have already made 2 applications" };

    default:
      return {
        type: "error",
        message: "Something went wrong, please try again",
      };
  }
};
