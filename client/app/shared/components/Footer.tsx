import React, {useContext} from "react";
import "../styles/shared/Footer.css";
import {Col, Grid, Row} from "react-flexbox-grid";
import {
    FaEnvelope,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedinIn,
    FaMediumM,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import {Assets} from "../../constants";
import {ThemeStore} from "../stores";
import {observer} from "mobx-react";
import {Link} from "@remix-run/react";

const Footer = () => {
    const themeStore = useContext(ThemeStore);
    return (
        <div className="kz-footer">
            <ul className="socials">
                <li>
                    <a href="https://instagram.com/srmkzilla">
                        <FaInstagram size={21}/>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/SRMKZILLA_Club">
                        <FaTwitter size={21}/>
                    </a>
                </li>
                <li>
                    <a href="https://youtube.com/c/srmkzilla">
                        <FaYoutube size={21}/>
                    </a>
                </li>
                <li>
                    <a href="https://medium.com/srmkzilla">
                        <FaMediumM size={21}/>
                    </a>
                </li>

                <li>
                    <a href="https://linkedin.com/company/srmkzilla">
                        <FaLinkedinIn size={21}/>
                    </a>
                </li>
                <li>
                    <a href="https://facebook.com/srmkzilla">
                        <FaFacebookSquare size={21}/>
                    </a>
                </li>
                <li>
                    <a href="mailto:recruitments@srmkzilla.net">
                        <FaEnvelope size={21}/>
                    </a>
                </li>
            </ul>
            <hr/>
            <div className="main">
                <Grid fluid>
                    <Row>
                        <Col xs={12} lg={3}>
                            <h4>More about us</h4>
                            <ul>
                                <li>
                                    <a href="https://srmkzilla.net">SRMKZILLA</a>
                                </li>
                                <li>
                                    <a href="https://blog.srmkzilla.net">Blog</a>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={3}>
                            <h4>Related information</h4>
                            <ul>
                                <li>
                                    <Link to="/privacy">Privacy</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col xs={12} lg={6}>
                            <h4>Equal opportunity</h4>
                            <p>
                                SRMKZILLA is proud to be an{" "}
                                <span>equal opportunity workplace.</span> We are committed to
                                equal volunteering opportunity regardless of race, color,
                                ancestry, religion, sex, national origin, sexual orientation,
                                age, citizenship, disability or gender identity.
                            </p>
                        </Col>
                    </Row>
                </Grid>
            </div>
            <hr/>
            <div className="footnote">
                <figure>
                    <img
                        src={
                            themeStore.theme === "dark"
                                ? Assets.SRMKZILLA_LOGO_WHITE_MONO
                                : Assets.SRMKZILLA_LOGO_BLACK_MONO
                        }
                        alt="logo"
                    />
                </figure>
                <p>
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and{" "}
                    <a href="https://policies.google.com/terms">Terms of Service</a>{" "}
                    apply.
                </p>
            </div>
        </div>
    );
};

export default observer(Footer);
