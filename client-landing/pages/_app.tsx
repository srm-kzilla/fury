import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "cal-sans";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
