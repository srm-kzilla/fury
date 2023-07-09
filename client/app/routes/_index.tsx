import type {LinksFunction, V2_MetaFunction} from "@remix-run/node";
import stylesHref from "../styles/shared/components/Footer.css";

export const meta: V2_MetaFunction = () => {
    return [
        {title: "New Remix App"},
        {name: "description", content: "Welcome to Remix!"},
    ];
};

export const links: LinksFunction = () => [
    {rel: "stylesheet", href: stylesHref},
];

export default function Index() {
    return (
        <div>
            <div></div>
        </div>
    );
}
