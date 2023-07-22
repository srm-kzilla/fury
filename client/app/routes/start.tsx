import { useContext, useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";
import loginStyles from "../styles/pages/Login.css";
import { Loading, Navbar } from "../shared/components";
import GoogleIcon from "../assets/images/google.svg";
import qs from "querystring";
import { links as navbarLinks } from "../shared/components/Navbar";
import { links as loadingLinks } from "../shared/components/Loading";
import { AuthStore } from "../shared/stores";
import { APIService } from "~/shared/services/apiService";
import { toast } from "~/shared/utils/toast";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...navbarLinks(),
  ...loadingLinks(),
  {
    rel: "stylesheet",
    href: loginStyles,
  },
];

const Login = () => {
  const authStore = useContext(AuthStore);
  const history = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (authStore.user) return history("/dashboard");
        const _token = localStorage.getItem("access_token");
        if (_token) {
          const {
            data: { user },
          } = await APIService.getInstance().fetchUserInfo();
          authStore.setUser(user);
          history("/dashboard");
        } else {
          toast({
            title: "Heads up!",
            message:
              "You have until 25th September 2022 to sprinkle your magic. <span>Sign In for #Recruitment2022,</span> and get started.",
            theme: "info",
            options: {
              autoClose: false,
            },
          });
        }
      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return !loading ? (
    <div className="kz-login">
      <Navbar />
      <div className={"kz-login-container"}>
        <h1>The campus club you love.</h1>
        <div className="login">
          <LoginButton />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export const getProviderConfig = () => {
  return {
    icon: GoogleIcon,
    text: "Sign in with Google",
    url:
      "https://accounts.google.com/o/oauth2/v2/auth?" +
      qs.stringify({
        client_id:
          "311478294319-ej3c44c7nc1omuiv0m8sa5ndfoh6dcev.apps.googleusercontent.com",
        redirect_uri: "http://localhost:3000/oauth/google/callback",
        response_type: "code",
        access_type: "offline",
        prompt: "consent",
        scope: [
          "https://www.googleapis.com/auth/userinfo.email",
          "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
      }),
  };
};

const LoginButton = () => {
  function openLoginWindow(url: string) {
    window.open(url, "_self");
  }

  const providerConfig = getProviderConfig();

  return (
    <div
      className="login-button"
      onClick={() => openLoginWindow(providerConfig.url)}
    >
      <img src={providerConfig.icon} alt={providerConfig.text} />
      <p>{providerConfig.text}</p>
    </div>
  );
};

export default Login;
