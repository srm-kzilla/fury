import exploreStyles from "~/styles/pages/Explore.css";
import { FooterCompact, Sidebar } from "~/shared/components";
import InfoTile, { links as infoTileLinks } from "~/components/InfoTile";
import { links as compactFooterLinks } from "~/shared/components/FooterCompact";
import { links as sidebarLinks } from "~/shared/components/Sidebar";
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
  BiVector,
} from "react-icons/bi";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => [
  ...sidebarLinks(),
  ...compactFooterLinks(),
  ...infoTileLinks(),
  {
    rel: "stylesheet",
    href: exploreStyles,
  },
];

const Explore = () => {
  const items = [
    {
      icon: <BiTerminal />,
      title: "Git Set Go",
      description:
        "We help you Git started with your life as as Developer and Engineer.",
      timestamp: 1663428864000,
      url: "https://www.instagram.com/p/Cies4m2vSY8/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiJoystick />,
      title: "Multiverse of IOT",
      description:
        "Doctor Sterange wishes his Multiverse was as cool as our Multiverse of IOT.",
      timestamp: 1653492864000,
      url: "https://www.instagram.com/p/Cd8b7GMPZ_Y/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiDonateHeart />,
      title: "Sandesh",
      description:
        "The ultimate tool that helps you send dynamic and scheduled mass mails in a few clicks!",
      timestamp: 1652801664000,
      url: "hhttps://www.instagram.com/p/CdkPtAIqq4F/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiMeteor />,
      title: "MOZOHACK'22",
      description: "A hackathon, but only cooler and way more fun!",
      timestamp: 1645112064000,
      url: "https://www.instagram.com/p/CahCB5Vv2YF/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiPlanet />,
      title: "Polls",
      description:
        "An open source tool to make polls, but with some extra drip!",
      timestamp: 1637163264000,
      url: "https://www.instagram.com/p/CZWCbDRK2Y8/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiGame />,
      title: "Octavia, our dearest music bot",
      description: "Who doesn't like vibing to music for free on Discord?",
      timestamp: 1631892864000,
      url: "https://www.instagram.com/p/CSD0QMwBvLB/?igshid=MTA0ZTI1NzA=",
    },
    {
      icon: <BiPalette />,
      title: "Introduced Links to world.",
      description:
        "We made an incredible link manager that lets you host all your important links in one place",
      timestamp: 1630146255000,
      url: "https://www.instagram.com/p/CTH15oLBgOx/",
    },
    {
      icon: <BiBox />,
      title: "Money Mine",
      description:
        "A Financial Literacy event with unique insights and tips on the robust world of finance.",
      timestamp: 1626517455000,
      url: "https://www.instagram.com/p/CRO31aMjwIg/",
    },
    {
      icon: <BiLockOpenAlt />,
      title: "Our flagship event, MOZOFEST",
      description:
        "An amalgamation of various events spread across different spheres.",
      timestamp: 1616149455000,
      url: "https://www.instagram.com/p/CLwX9AkBVmp/",
    },
    {
      icon: <BiBot />,
      title: "Launced SRMKZILLA's Website",
      description:
        "The revamped, the upgraded, the supercalifragilisticexpialidocious space to redefine what campus clubs can do.",
      timestamp: 1614507855000,
      url: "https://www.srmkzilla.net/",
    },
    {
      icon: <BiAward />,
      title: "Introduced Springboard to World",
      description:
        "Springboard let's you take a break from never ending task of project setup.",
      timestamp: 1612002255000,
      url: "https://www.instagram.com/p/CKqIFW1jYcA/",
    },
    {
      icon: <BiAward />,
      title: "Tech Introduction",
      description:
        "TECH-TRODUCTION was tailored for all the newbie's as we introduced Web development, Machine-learning, Internet of Things, Flutter, and Game Development.",
      timestamp: 1610447055000,
      url: "https://www.instagram.com/p/CJ8zea_DX4D/",
    },
    {
      icon: <BiVector />,
      title: "Mozo League",
      description: "Our very own fantasy league for all the football fanatics.",
      timestamp: 1609323855000,
      url: "https://www.instagram.com/p/CJbB1-ADcM6/",
    },
    {
      icon: <BiVector />,
      title: "Code Decode",
      description:
        "Code Decode, a workshop on how to start with competitive coding.",
      timestamp: 1605608655000,
      url: "https://www.instagram.com/p/CHsG774DblR/",
    },
    {
      icon: <BiRocket />,
      title: "Recruitments'20",
      description: "Onboarding of new members to our team.",
      timestamp: 1603794255000,
      url: "https://www.instagram.com/p/CG1pVftDe4z/",
    },
  ];

  return (
    <>
      <div className="kz-explore">
        <Sidebar />
        <div>
          <div>
            <div className="main">
              <h2>
                Explore <span>@srmkzilla</span>
              </h2>
              <div>
                <h3 className="mb">2022</h3>
                <div>
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
