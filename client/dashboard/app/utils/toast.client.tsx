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
          maxWidth: "300px",
          padding: "1rem",
          zIndex: "100000",
          width: "fit-content",
          borderRadius: "10px",
          gap: "1rem",
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
