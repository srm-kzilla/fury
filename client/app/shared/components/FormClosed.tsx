import React from "react";
import {BiHomeAlt} from "react-icons/bi";
import { Link } from "@remix-run/react";
import "../../styles/shared/components/FormClosed.css";

export default function FormClosed() {
    return (
        <div className="kz-form-closed">
            <Link to="/dashboard">
                <BiHomeAlt size={36} className="home-icon" title="Home"/>
            </Link>
            <h1>Bummer! That ship has sailed</h1>
            <p>
                We are not accepting any more applications for #Recruitment2022. Nothing
                to worry about, though. We'd love to see you apply again the next time
                around!
            </p>
        </div>
    );
}
