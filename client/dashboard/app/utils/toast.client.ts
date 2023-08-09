import toast from "react-hot-toast";

const toastBaseOptions = {
  style: {
    background: "#111111",
    color: "#fff",
    border: "1px solid #30363d",
    maxWidth: "300px",
    padding: "1rem",
    zIndex: "100000"
  },
};

export default {
  show: (message: string, icon: string) =>
    toast(message, { ...toastBaseOptions, icon }),
  error: (message: string) => toast.error(message, toastBaseOptions),
  success: (message: string) => toast.success(message, toastBaseOptions),
};