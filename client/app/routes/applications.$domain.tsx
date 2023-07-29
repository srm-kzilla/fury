import {useParams} from "@remix-run/react";

// TODO: Implement data fetching here with loaders

export default function Application() {
    const params = useParams();
    return (
        <div>
            <h1>{params.domain}</h1>
        </div>
    )
}