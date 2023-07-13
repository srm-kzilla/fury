import type {LinksFunction} from "@remix-run/node";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration,} from "@remix-run/react";
import index from "~/styles/index.css";
import app from "~/styles/App.css";
import {links as homeLink} from "../app/routes/Home"
import {links as dashLink} from "../app/routes/Dashboard"
import {links as exploreLink} from "../app/routes/Explore"
import {links as loginLink} from "../app/routes/Login"
import {links as navbarLink} from "../app/shared/components/Navbar"
import {links as sidebarLink} from "../app/shared/components/Sidebar"
import {links as applicationTitleLink} from "../app/shared/components/ApplicationTile"
import {links as footerLink} from "../app/shared/components/Footer"
import {links as footerCompactLink} from "../app/shared/components/FooterCompact"
import {links as formClosedLink} from "../app/shared/components/FormClosed"
import {links as headbarLink} from "../app/shared/components/Headbar"
import {links as loadingLink} from "../app/shared/components/Loading"
import {links as signInWithSRMKZILLALink} from "../app/shared/components/SignInWithSRMKZILLA"
import {links as taskLink} from "../app/shared/components/Task"
import {links as taskListLink} from "../app/shared/components/TaskList"
import {links as tileLink} from "../app/shared/components/Tile"
import {links as userLink} from "../app/shared/components/User"
import {links as userProfileLink} from "../app/shared/components/UserProfile"
import {links as valuesTickerLink} from "../app/shared/components/ValuesTicker"

export const links: LinksFunction = () => {
    return [
        ...homeLink(),
        ...dashLink(),
        ...navbarLink(),
        ...exploreLink(),
        ...loginLink(),
        ...sidebarLink(),
        ...applicationTitleLink(),
        ...footerLink(),
        ...footerCompactLink(),
        ...formClosedLink(),
        ...headbarLink(),
        ...loadingLink(),
        ...signInWithSRMKZILLALink(),
        ...taskLink(),
        ...taskListLink(),
        ...tileLink(),
        ...userLink(),
        ...userProfileLink(),
        ...valuesTickerLink(),
        {
            rel: "stylesheet",
            href: index,
        }, {
            rel: "stylesheet",
            href: app,
        },
    ];
};

export default function App() {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width,initial-scale=1"/>
            <Meta/>
            <Links/>
        </head>
        <body>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
        </body>
        </html>
    );
}
