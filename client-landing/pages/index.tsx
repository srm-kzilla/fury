import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Life from "@/components/Life";
import Roadmap from "@/components/Roadmap";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <div>
        <Head>
          <title>JOIN SRMKZILLA!</title>
          <meta name="title" content="RECRUITMENT23 SRMKZILLA" />
          <meta property="og:title" content="RECRUITMENT23 SRMKZILLA" />
          <meta property="twitter:title" content="RECRUITMENT23 SRMKZILLA" />
          <meta httpEquiv="refresh" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta
            name="keywords"
            content="RECRUITMENT23, RECRUITMENT, SRMKZILLA, MOZILLA, SRM UNIVERSITY, Technical Club, Mozilla Campus Club"
          />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <meta name="revisit-after" content="10 days" />
          <meta name="author" content="SRMKZILLA" />
          <meta
            name="copyright"
            content="All rights reserved,2023. SRMKZILLA"
          />
          <meta httpEquiv="content-language" content="en" />
          <meta name="application-name" content="SRMKZILLA" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://recruitment.srmkzilla.net/" />
          <meta
            property="og:description"
            content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://recruitment.srmkzilla.net/" />
          <meta property="twitter:site" content="@SRMKZILLA_Club" />

          <meta
            property="twitter:description"
            content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
          />
          <link rel="icon preload canonical" href="srmkzilla-logo-new.svg" />

          <link
            rel="mask-icon preload canonical"
            href="/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#000" />
      </Head>
      <Navbar />
      <Hero />
      <Life />
      <Roadmap />
      <CoreValues />
      <Footer />
    </div>
  );
}
