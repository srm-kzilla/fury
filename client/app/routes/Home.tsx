import React, {useContext} from "react";
import classNames from "classnames";
import {Link} from "@remix-run/react";
import {BiChevronLeft, BiChevronRight, BiRightArrowAlt} from "react-icons/bi";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import {Assets} from "../constants";
import {AuthStore} from "../shared/stores";
import {Footer, Navbar} from "../shared/components";
import homeCSS from "../styles/pages/Home.css";
import ValuesTicker from "../shared/components/ValuesTicker";
import ReactPlayer from "react-player/lazy";
import {LinksFunction} from "@remix-run/node";


export const links: LinksFunction = () => {
    return [
        {
            rel: "stylesheet",
            href: homeCSS,
        },
    ];
};
const images = [
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/2d94f3a3-7c9a-45ed-9ef6-09de60a7f9a6.JPG",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/2e9714e7-027e-4f57-ad0e-2b1e27b81d24.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/67a1087e-0859-4e36-89d5-b08c6f965fb5.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/238eb2df-b93a-4297-95ef-923c90c5e976.JPG",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/7198fffe-4d5e-417e-a601-03e88db302eb.jpg",

    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/35550822-20c8-45ef-8ad4-3b714b08081d.jpg",

    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/b1d03d69-1b02-4fb5-b595-857aaf14138a.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/c724c9f7-9463-416f-8021-d334e79bfbe3.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/c6180a3a-4bca-4c6e-9363-2256840e5a56.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/ca0fa632-35a8-4c32-a05a-e6af045884b3.jpg",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/d81862fe-09dc-4714-a0a1-f262a0a4db4c.jpg",

    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/f4d775e1-b0c1-4977-8631-5d6c4482ba81.JPG",
    "https://rasoda.s3.ap-south-1.amazonaws.com/showcase/fe57f9d1-8d9e-45fd-a527-5fb0a8a9aa63.jpg",
];

const life_1 = [
    {
        url: "https://recruitment-2022.s3.ap-south-1.amazonaws.com/life/IMG_2022_1.jpeg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-_MG_2141.jpg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-IMG_9722.jpg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_0136.jpg",
        type: "image",
    },
];

const life_2 = [
    {
        url: "https://recruitment-2022.s3.ap-south-1.amazonaws.com/life/IMG_2022_2.jpeg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_0028.jpg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_2629.jpg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_2171.png",
        type: "image",
    },
];
const life_3 = [
    {
        url: "https://recruitment-2022.s3.ap-south-1.amazonaws.com/life/IMG_2022_3.jpeg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_0045.JPG",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-DSC_0207.jpg",
        type: "image",
    },
    {
        url: "https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Optimized-IMG_6796.jpg",
        type: "image",
    },
];

const Home = () => {
    const {user} = useContext(AuthStore);
    return (
        <div className="kz-home">
            <HeroSection user={user}/>
            <MemoSection user={user}/>
            <LifeAtSRMKZILLASection/>
            <StepsSection user={user}/>
            <ValuesSection/>
            <Footer/>
        </div>
    );
};

const HeroSection = ({user}: { user: any }) => {
    return (
        <>
            <Navbar/>
            <div className="hero">
                <div className="content">
                    <h1>#Recruitment2022</h1>
                    <h3>
                        If you’re looking for a place that values your curiosity, passion,
                        and desire to learn, then you're a future SRMKZILLian.
                    </h3>
                    <div className="cta">
                        <Link to={user ? "/dashboard" : "/start"}>
              <span>
                <BiRightArrowAlt size={32}/>
              </span>
                            {user ? "Dashboard" : "Get started"}
                        </Link>
                    </div>
                </div>

                <figure>
                    <img className="cover" src={Assets.HERO_COVER} alt="hero"/>
                </figure>
            </div>
        </>
    );
};

const MemoSection = ({user}: { user: any }) => {
    return (
        <div className="memo">
            <h3>Dear {user?.first_name || "reader"},</h3>
            <p>
                In the days of yore, we kicked off as a campus club of SRM. In these 6
                years, we've come a long way and <span>learnt a lot on our way! </span>
            </p>

            <p>
                At SRMKZILLA, we focus on building great products-{" "}
                <span>products that blow minds </span>,products that help people
                out,products that are available to everyone for free. We enable
                developers like you to innovate like never before. Be it your first 'int
                main' or your first big project, we are excited that you are{" "}
                <span>changing the world </span>and enriching people’s lives.
                <span> Welcome home, developers.</span>
            </p>
            <p>
                We understand that innovation and creativity work in tandem. We give a
                good large bag of attention to details.{" "}
                <span>Design is the very foundation</span> of everything we do, be it
                the smallest or the largest-designs that we flaunt,designs that truly
                delight. <span>Welcome home, designers.</span>
            </p>

            <p>
                At SRMKZILLA, you have the opportunity to develop extraordinary
                products- products that redefine what campus clubs can do,products that
                <span> make heads turn</span>,products that make you imagine what
                uniqueness looks like! And with a brilliant team working on challenging
                projects, <span>there is nothing quite like SRMKZILLA.</span> One last
                time, <span>WELCOME HOME!!</span>
            </p>
        </div>
    );
};

const LifeAtSRMKZILLASection = () => {
    return (
        <div>
            <div className="life">
                <h2>Life @ SRMKZILLA</h2>
                <p>
                    We are thinkers, doers and innovators. But above that, we are humans-{" "}
                    <span>humans who love to create something unique</span>,collectively.
                    We understand the importance of taking a break, of going on escapades,
                    and having fun. We maintain an environment of joy,{" "}
                    <span>
            where mistakes are not something to be feared, but something to have
            a laugh over.
          </span>{" "}
                    At SRMKZILLA, you can be yourself and still be a part of something
                    much bigger than yourself.{" "}
                    <span>
            We are not a melting pot of cultures, but a colorful mosaic taking
            pride in our diversity.
          </span>
                </p>
                <br/>

                <div id="life-grid">
                    <div className="column">
                        {life_1.map((item) => {
                            return item.type === "image" ? (
                                <img key={item.url} src={item.url} alt="life"/>
                            ) : (
                                // @ts-ignore
                                <ReactPlayer key={item.url} url={item.url} controls/>
                            );
                        })}
                    </div>
                    <div className="column">
                        {life_2.map((item) => {
                            return item.type === "image" ? (
                                <img key={item.url} src={item.url} alt="life"/>
                            ) : (
                                // @ts-ignore
                                <ReactPlayer key={item.url} url={item.url} controls/>
                            );
                        })}
                    </div>
                    <div className="column">
                        {life_3.map((item) => {
                            return item.type === "image" ? (
                                <img key={item.url} src={item.url} alt="life"/>
                            ) : (
                                // @ts-ignore
                                <ReactPlayer key={item.url} url={item.url} controls/>
                            );
                        })}
                    </div>
                </div>

                <div className="showcase">
                    <div className="embed">
                        <iframe
                            src="https://www.youtube.com/embed/LPt3vocZGfE"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </div>
                </div>
            </div>
            {/* <PhotoCarousel /> */}
        </div>
    );
};

const StepsSection = ({user}: { user: any }) => {
    return (
        <div className="steps">
            <h2>Become an SRMKZILLian</h2>
            {/*TODO: Apply flexbox here*/}
            <div>
                <div>
                    <div>
                        <div className="step">
                            <span>1</span>
                            <h4>Apply</h4>
                            <p>
                                Head to the dashboard, enter your info and voila you're one step
                                closer to being a part of our team
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="step">
                            <span>2</span>
                            <h4>Answer</h4>
                            <p>
                                A bunch of fun questions will be sent to your email for which
                                you get an entire week to answer
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="step">
                            <span>3</span>
                            <h4>Interview</h4>
                            <p>
                                Nothing beats a fun chat. We promise to keep it lively and
                                interesting
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="step">
                            <span>4</span>
                            <h4>Welcome!!</h4>
                            <p>
                                Give yourself a pat on the back, for now you are a part of the
                                SRMKZILLA family. Welcome home!
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="lanyard">
                        <div>
                            <figure>
                                <img src={Assets.LANYARD} alt="lanyard"/>
                            </figure>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="cta">
                        <Link to={user ? "/dashboard" : "/start"} className="border">
                            {user ? "Go to dashboard" : "Get started"}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ValuesSection = () => {
    return (
        <div className="values">
            <div className="description">
                <h2>Core values</h2>
                <p>
                    Our spirit lies in making our products accessible to{" "}
                    <span>people from all walks of life.</span>{" "}
                </p>
                <p>
                    At SRMKZILLA, we take pride in our <span>open-source projects</span>{" "}
                    and welcome contributions with open arms. Closed doors can never
                    inspire open innovation
                </p>
                <p>
                    We actively reward and encourage members to participate and
                    <span> collaborate on projects </span>apart from their primary domain,
                    to<span> broaden their horizons</span> and become the best version of
                    themselves.
                </p>
            </div>
            {/*TODO: Apply flexbox here*/}
            <div>
                <div>
                    <ValuesTicker valueSize={8} duration={"18"}/>
                    <ValuesTicker valueSize={8} duration={"25"}/>
                    <ValuesTicker valueSize={8} duration={"20"}/>
                    <ValuesTicker valueSize={8} duration={"28"}/>
                </div>
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PhotoCarousel = () => {
    enum Direction {
        Left,
        Right,
    }

    const Arrow = ({
                       direction,
                       onClick,
                   }: {
        direction?: Direction;
        onClick?: any;
    }) => {
        return (
            <div
                className={classNames("arrow", {
                    left: direction === Direction.Left,
                    right: direction === Direction.Right,
                })}
                onClick={() => {
                    onClick();
                }}
            >
                {direction === Direction.Left ? (
                    <BiChevronLeft size={32}/>
                ) : (
                    <BiChevronRight size={32}/>
                )}
            </div>
        );
    };

    return (
        // @ts-ignore
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass="carousel"
            customLeftArrow={<Arrow direction={Direction.Left}/>}
            customRightArrow={<Arrow direction={Direction.Right}/>}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024,
                    },
                    items: 1,
                    partialVisibilityGutter: 40,
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464,
                    },
                    items: 1,
                    partialVisibilityGutter: 30,
                },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {images.map((image) => {
                return <img loading="lazy" src={image} alt="showcase_image"/>;
            })}
        </Carousel>
    );
};

export default Home;
