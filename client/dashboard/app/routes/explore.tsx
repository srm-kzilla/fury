import exploreStyles from "~/styles/pages/Explore.css";
import InfoTile from "~/components/InfoTile";
import {
  infoTileLinks,
  footerCompactLinks,
  sidebarLinks,
  FooterCompact,
  Sidebar,
} from "~/components";
import {
  BiAward,
  BiBot,
  BiBox,
  BiDonateHeart,
  BiGame,
  BiJoystick,
  BiLockOpenAlt,
  BiMeteor,
  BiPalette,
  BiPlanet,
  BiRocket,
  BiTerminal,
  BiTime,
  BiVector,
  BiArrowFromRight,
} from "react-icons/bi";
import { json, type LinksFunction, type LoaderFunction } from "@remix-run/node";
import { getUserActivity, getUserDetails } from "~/utils/api.server";
import { Link, useLoaderData } from "@remix-run/react";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
  ...footerCompactLinks(),
  ...infoTileLinks(),
  {
    rel: "stylesheet",
    href: exploreStyles,
  },
];

export const loader: LoaderFunction = async ({ request }) => {
  const activity = await getUserActivity(request);
  const user = await getUserDetails(request);
  return json({ user, activity });
};

const Explore = () => {
  const { user, activity } = useLoaderData();
  const items = [
    {
      icon: <BiRocket />,
      title: "Fury",
      description:
        "An open-source project inspired by Nick Fury, whose primary job was to recruit Avengers, spies and other cool people! ",
      timestamp: 1692316800000,
      github: "https://github.com/srm-kzilla/fury",
      url: "",
    },
    {
      icon: <BiTime />,
      title: "Off The Clock",
      description:
        "We present to you “Off The Clock” - a harmonious event that soothes your ‘soul’.",
      timestamp: 1692334800000,
      github: "",
      url: "https://www.instagram.com/reel/CvwvvASOm6k/?igshid=MTc4MmM1YmI2Ng==",
    },
    {
      icon: <BiLockOpenAlt />,
      title: "MOZOFEST'23",
      description:
        "A three-day extravaganza to emanate the power of open source community sprinkled with a load of fun and frolic.",
      timestamp: 1677205800000,
      github: "",
      url: "https://www.instagram.com/p/Com8wmDPYva/?igshid=MzRlODBiNWFlZA==",
    },
    {
      icon: <BiMeteor />,
      title: "MOZOHACK'23",
      description:
        "A thrilling 24-hour hackathon where students across the nation come together to bring some amazing ideas to life.",
      timestamp: 1677205800000,
      github: "",
      url: "https://www.instagram.com/p/Cn-_yK5PixM/?igshid=MTc4MmM1YmI2Ng==",
    },
    {
      icon: <BiTerminal />,
      title: "Git Set Go",
      description:
        "We help you Git started with your life as as Developer and Engineer.",
      timestamp: 1663428864000,
      github: "",
      url: "https://www.instagram.com/p/Cies4m2vSY8/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiJoystick />,
      title: "Multiverse of IOT",
      description:
        "Doctor Sterange wishes his Multiverse was as cool as our Multiverse of IOT.",
      timestamp: 1653492864000,
      github: "",
      url: "https://www.instagram.com/p/Cd8b7GMPZ_Y/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiDonateHeart />,
      title: "Sandesh",
      description:
        "The ultimate tool that helps you send dynamic and scheduled mass mails in a few clicks!",
      timestamp: 1652801664000,
      github: "https://github.com/srm-kzilla/sandesh",
      url: "https://www.instagram.com/p/CdkPtAIqq4F/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiMeteor />,
      title: "MOZOHACK'22",
      description: "A hackathon, but only cooler and way more fun!",
      timestamp: 1645112064000,
      github: "",
      url: "https://www.instagram.com/p/CahCB5Vv2YF/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiPlanet />,
      title: "Polls",
      description:
        "An open source tool to make polls, but with some extra drip!",
      timestamp: 1637163264000,
      github: "https://github.com/srm-kzilla/polls",
      url: "https://www.instagram.com/p/CZWCbDRK2Y8/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiGame />,
      title: "Octavia, our dearest music bot",
      description: "Who doesn't like vibing to music for free on Discord?",
      timestamp: 1631892864000,
      github: "https://github.com/srm-kzilla/octavia",
      url: "https://www.instagram.com/p/CSD0QMwBvLB/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiPalette />,
      title: "Introduced Links to world.",
      description:
        "We made an incredible link manager that lets you host all your important links in one place",
      timestamp: 1630146255000,
      github: "https://github.com/srm-kzilla/links",
      url: "https://www.instagram.com/p/CTH15oLBgOx/",
    },
    {
      icon: <BiBox />,
      title: "Money Mine",
      description:
        "A Financial Literacy event with unique insights and tips on the robust world of finance.",
      timestamp: 1626517455000,
      github: "",
      url: "https://www.instagram.com/p/CRO31aMjwIg/",
    },
    {
      icon: <BiLockOpenAlt />,
      title: "Our flagship event, MOZOFEST",
      description:
        "An amalgamation of various events spread across different spheres.",
      timestamp: 1616149455000,
      github: "",
      url: "https://www.instagram.com/p/CLwX9AkBVmp/",
    },
    {
      icon: <BiBot />,
      title: "Launced SRMKZILLA's Website",
      description:
        "The revamped, the upgraded, the supercalifragilisticexpialidocious space to redefine what campus clubs can do.",
      timestamp: 1614507855000,
      github: "https://github.com/srm-kzilla/srmkzilla-net",
      url: "https://www.srmkzilla.net/",
    },
    {
      icon: <BiGame />,
      title: "Jack",
      description: "Meet Jack,a bot of all trades.",
      timestamp: 1613260800000,
      github: "https://github.com/srm-kzilla/jack",
      url: "",
    },
    {
      icon: <BiAward />,
      title: "Introduced Springboard to World",
      description:
        "Springboard let's you take a break from never ending task of project setup.",
      timestamp: 1612002255000,
      github: "https://github.com/srm-kzilla/springboard",
      url: "https://www.instagram.com/p/CKqIFW1jYcA/",
    },
    {
      icon: <BiAward />,
      title: "Tech Introduction",
      description:
        "TECH-TRODUCTION was tailored for all the newbie's as we introduced Web development, Machine-learning, Internet of Things, Flutter, and Game Development.",
      timestamp: 1610447055000,
      github: "",
      url: "https://www.instagram.com/p/CJ8zea_DX4D/",
    },
    {
      icon: <BiVector />,
      title: "Mozo League",
      description: "Our very own fantasy league for all the football fanatics.",
      timestamp: 1609323855000,
      github: "",
      url: "https://www.instagram.com/p/CJbB1-ADcM6/",
    },
    {
      icon: <BiVector />,
      title: "Code Decode",
      description:
        "Code Decode, a workshop on how to start with competitive coding.",
      timestamp: 1605608655000,
      github: "",
      url: "https://www.instagram.com/p/CHsG774DblR/",
    },
    {
      icon: <BiRocket />,
      title: "Recruitments'20",
      description: "Onboarding of new members to our team.",
      timestamp: 1603794255000,
      github: "https://github.com/srm-kzilla/recruitments-2020",
      url: "https://www.instagram.com/p/CG1pVftDe4z/",
    },
    {
      icon: <BiVector />,
      title: "Kzilla.xyz",
      description:
        "Shorten the URL. Broaden the reach.The new URL shrinker of the Internet. It's as easy as it sounds. ",
      timestamp: 1597190400000,
      github: "https://github.com/srm-kzilla/kzilla.xyz",
      url: "https://kzilla.xyz/",
    },
    {
      icon: <BiPalette />,
      title: "Mellow",
      description: "An artistic dark theme for Visual Studio Code.",
      timestamp: 1586908800000,
      github: "https://github.com/srm-kzilla/mellow-vscode-theme",
      url: "https://marketplace.visualstudio.com/items?itemName=SRMKZILLA.Mellow",
    },
  ];

  return (
    <>
      <div className="kz-explore">
        <Sidebar />
        <div className="container">
          <div className="main">
            <Link to={"/"}>
              <div className="go-back">
                <BiArrowFromRight className="icon" />
                <h2>Applications</h2>
              </div>
            </Link>
            <h2>
              Explore <span>@srmkzilla</span>
            </h2>
            <div>
              <h3 className="mb">2023</h3>
              <div>
                <div className="items">
                  {items.map((item, index) => {
                    return (
                      <div key={index} className="tile">
                        <InfoTile {...item} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterCompact />
    </>
  );
};

export default Explore;
