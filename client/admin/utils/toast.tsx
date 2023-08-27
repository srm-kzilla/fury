import { LucideCircleSlash } from "lucide-react";
import toast from "react-hot-toast";

const toastBaseOptions = {
  style: {
    background: "#202020",
    color: "#fff",
    border: "1px solid #000",
    maxWidth: "250px",
  },
};

const showToast = (message: string, style: object) => {
  toast(<h1>{message}</h1>, {
    ...style,
    icon: <LucideCircleSlash />,
  });
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
  pending: (message: string) =>
    showToast(message, {
      ...toastBaseOptions,
      style: { ...toastBaseOptions.style, border: "1px solid #f9d56e" },
    }),
  dismiss: () => toast.dismiss(),
};
