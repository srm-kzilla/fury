    import {useParams} from "@remix-run/react";
import applicationStyles from "../styles/pages/Application.css";
import {LinksFunction} from "@remix-run/node";

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: applicationStyles,
    },
];

// TODO: Implement data fetching here with loaders

export default function Application() {
    const params = useParams();
    return (
        <div>
            <h1 className={"test"}>{params.domain}</h1>
        </div>
    )
}