import toast from "react-hot-toast";

const toastBaseOptions = {
  style: {
    background: "#202020",
    color: "#fff",
    border: "1px solid #fff",
    maxWidth: "250px",
  },
};

export default {
  show: (message: string, icon: string) =>
    toast(message, { ...toastBaseOptions, icon }),
  error: (message: string) =>
    toast.error(message, {
      ...toastBaseOptions,
      style: { ...toastBaseOptions.style, border: "1px solid #ff644e" },
    }),
  success: (message: string) =>
    toast.success(message, {
      ...toastBaseOptions,
      style: { ...toastBaseOptions.style, border: "1px solid #008000" },
    }),
};
