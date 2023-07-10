import React, {useContext} from "react";
import "../../styles/shared/Sidebar.css";
import {Assets} from "../../constants";
import {BiHomeCircle, BiLogOut, BiRocket} from "react-icons/bi";
import {Link, useLocation, useNavigate} from "@remix-run/react";


import classNames from "classnames";
import {AuthStore, ThemeStore} from "../stores";
import {observer} from "mobx-react";
import {FaMoon, FaRegMoon} from "react-icons/fa";

const Sidebar = () => {
    let location = useLocation();
    const history = useNavigate();
    const pathname = location.pathname;
    const authStore = useContext(AuthStore);
    const themeStore = useContext(ThemeStore);

    const signOut = () => {
        authStore.setUser(undefined);
        authStore.setAuthorization(undefined);
        history("/start");
    };

    const toggleTheme = () => {
        themeStore.theme === "dark"
            ? themeStore.setTheme("light")
            : themeStore.setTheme("dark");
    };

    return (
        <div className="kz-sidebar">
            <div>
                <div className="logo">
                    <img
                        src={
                            themeStore.theme === "dark"
                                ? Assets.SRMKZILLA_LOGO_WHITE
                                : Assets.SRMKZILLA_LOGO_BLACK
                        }
                        alt="logo"
                        onClick={() => {
                            history("/");
                        }}
                    />
                </div>
                <ul>
                    <li title="Dashboard">
                        <Link
                            to="/dashboard"
                            className={classNames({active: pathname === "/dashboard"})}
                        >
                            <BiHomeCircle/>
                        </Link>
                    </li>
                    <li title="Explore SRMKZILLA">
                        <Link
                            to="/explore"
                            className={classNames({active: pathname === "/explore"})}
                        >
                            <BiRocket/>
                        </Link>
                    </li>
                </ul>

                <div className="sign-out">
                    <div className="theme" onClick={toggleTheme} title="Toggle theme">
                        {themeStore.theme === "dark" ? <FaMoon/> : <FaRegMoon/>}
                    </div>
                    <div title="Logout">
                        <BiLogOut onClick={signOut}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default observer(Sidebar);
