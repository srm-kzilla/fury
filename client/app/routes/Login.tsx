import React, {useContext, useEffect, useState} from "react";
import "../styles/pages/Login.css";
import {Loading, Navbar} from "../shared/components";
import GitHubIcon from "../assets/images/github.svg";
import GoogleIcon from "../assets/images/google.svg";
import qs from "querystring";
import {AuthStore} from "../shared/stores";
import {useNavigate} from "@remix-run/react";
import {APIService} from "../shared/services/apiService";
import {toast} from "../shared/utils/toast";


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
                        data: {user},
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
            <Navbar/>
            {/*TODO: Apply flexbox here*/}
            <div>
                <div>
                    <div>
                        <h1>The campus club you love.</h1>
                    </div>
                    <div className="login-col">
                        <div className="login">
                            {/* eslint-disable-next-line @typescript-eslint/no-use-before-define */}
                            <LoginButton provider={AuthProvider.Google}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loading/>
    );
};

export enum AuthProvider {
    Google = "google",
    GitHub = "github",
}

interface LoginButtonProps {
    provider: AuthProvider;
}

export const getProviderConfig = (provider: AuthProvider) => {
    switch (provider) {
        case AuthProvider.Google:
            return {
                icon: GoogleIcon,
                text: "Sign in with Google",
                url:
                    "https://accounts.google.com/o/oauth2/v2/auth?" +
                    qs.stringify({
                        client_id:
                            "311478294319-ej3c44c7nc1omuiv0m8sa5ndfoh6dcev.apps.googleusercontent.com",
                        redirect_uri: process.env.REACT_APP_OAUTH_URL,
                        response_type: "code",
                        access_type: "offline",
                        prompt: "consent",
                        scope: [
                            "https://www.googleapis.com/auth/userinfo.email",
                            "https://www.googleapis.com/auth/userinfo.profile",
                        ].join(" "),
                    }),
            };
        case AuthProvider.GitHub:
            return {
                icon: GitHubIcon,
                text: "Sign in with GitHub",
                url:
                    "https://github.com/login/oauth/authorize?" +
                    qs.stringify({
                        client_id: "e3f853137251730f5999",
                        scope: ["user:email"].join(" "),
                    }),
            };
    }
};

const LoginButton: React.FC<LoginButtonProps> = (props) => {
    function openLoginWindow(url: string) {
        window.open(url, "_self");
    }

    const providerConfig = getProviderConfig(props.provider);

    return (
        <div
            className="login-button"
            onClick={() => openLoginWindow(providerConfig.url)}
        >
            <img src={providerConfig.icon} alt={providerConfig.text}/>
            <p>{providerConfig.text}</p>
        </div>
    );
};

export default Login;
