import toast, { ToastPosition } from "react-hot-toast";

const toastBaseOptions = {
  style: {
    background: "#202020",
    color: "#ff644e",
    border: "1px solid #ff644e",
    maxWidth: "250px",
  },
  position: "top-right" as ToastPosition,
};

const successToastOptions = {
  style: {
    background: "#202020",
    color: "#ff644e",
    border: "1px solid #008000",
    maxWidth: "250px",
  },
  position: "top-right" as ToastPosition,
};

export default {
  show: (message: string, icon: string) =>
    toast(message, { ...toastBaseOptions, icon }),
  error: (message: string) => toast.error(message, toastBaseOptions),
  success: (message: string) => toast.success(message, successToastOptions),
};
