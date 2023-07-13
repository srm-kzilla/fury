import React, {useContext} from "react";
import navbarCSS from "../../styles/shared/components/Navbar.css";
import {Assets} from "../../constants";
import {Link, useLocation} from "@remix-run/react";
import {AuthStore, ThemeStore} from "../stores";
import {FaMoon, FaRegMoon} from "react-icons/fa";
import {observer} from "mobx-react";
import {BiLogOut} from "react-icons/bi";
import {LinksFunction} from "@remix-run/node";


export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: navbarCSS,
        },
    ];
};

const Navbar = () => {
    const {user} = useContext(AuthStore);
    const themeStore = useContext(ThemeStore);
    const authStore = useContext(AuthStore);
    const location = useLocation();

    const toggleTheme = () => {
        themeStore.theme === "dark"
            ? themeStore.setTheme("light")
            : themeStore.setTheme("dark");
    };

    const signOut = () => {
        authStore.setUser(undefined);
        authStore.setAuthorization(undefined);
    };

    return (
        <div className="kz-navbar test">
            <div className="logo">
                <Link to="/">
                    <figure>
                        <img
                            src={
                                themeStore.theme === "dark"
                                    ? Assets.SRMKZILLA_LOGO_WHITE
                                    : Assets.SRMKZILLA_LOGO_BLACK
                            }
                            alt="logo"
                        />
                    </figure>
                </Link>
            </div>

            <div className="cta">
                <div onClick={toggleTheme}>
                    {themeStore.theme === "dark" ? <FaMoon/> : <FaRegMoon/>}
                </div>

                {user ? (
                    <div>
                        <div>
                            <Link className="border" to="/dashboard">
                                Dashboard
                            </Link>
                        </div>
                        <div>
                            <BiLogOut onClick={signOut}/>
                        </div>
                    </div>
                ) : !(location.pathname === "/start") ? (
                    <Link className="border" to="/start">
                        Get started
                    </Link>
                ) : null}
            </div>
        </div>
    );
};

export default observer(Navbar);
