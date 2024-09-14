import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Life from "@/components/Life";
import Roadmap from "@/components/Roadmap";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";
import Head from "next/head";
import Headbar from "@/components/Headbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>JOIN SRMKZILLA!</title>
        <meta name="title" content="RECRUITMENT'24 SRMKZILLA" />
        <meta property="og:title" content="RECRUITMENT24 SRMKZILLA" />
        <meta property="twitter:title" content="RECRUITMENT24 SRMKZILLA" />
        <meta httpEquiv="refresh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="keywords"
          content="RECRUITMENT24, RECRUITMENT, SRMKZILLA, MOZILLA, SRM UNIVERSITY, Technical Club, Mozilla Campus Club"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="10 days" />
        <meta name="author" content="SRMKZILLA" />
        <meta name="copyright" content="All rights reserved,2024. SRMKZILLA" />
        <meta httpEquiv="content-language" content="en" />
        <meta name="application-name" content="SRMKZILLA" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://recruitment.srmkzilla.net/" />
        <meta
          property="og:image"
          content="https://recruitment-2021.s3.ap-south-1.amazonaws.com/life/Screenshot+from+2021-09-14+17-35-58.png"
        />
        <meta
          property="og:description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://recruitment.srmkzilla.net/"
        />
        <meta property="twitter:site" content="@SRMKZILLA_Club" />

        <meta
          property="twitter:description"
          content="SRMKZILLA is a community of young tech enthusiasts who eat, sleep and breath technology. We organize everything from technical workshops to gaming events, you name it & we do it. "
        />
        <link rel="icon preload canonical" href="/srmkzilla-join-now.svg" />

        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#000" />
      </Head>
      <Headbar />
      <Navbar />
      <Hero />
      <Life />
      <Roadmap />
      <CoreValues />
      <Footer />
    </>
  );
}
