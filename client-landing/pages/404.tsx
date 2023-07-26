import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Error = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.replace("/");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="bg-gray500 h-screen w-screen overflow-hidden z-30 relative">
      <Head>
        <title>404</title>
        <meta name="description" content="404 page" />
        <link rel="icon preload canonical" href="./images/kzillalogo.png" />
      </Head>
      <Navbar />
      <div className="z-30 relative">
        <h1 className="text-center text-white text-4xl mt-16">Oops..</h1>

        <p className="text-center text-white text-3xl">
          Looks like you&apos;re lost
        </p>
        <h1 className="text-center text-white text-xl font-medium mt-5">
          Redirecting to{" "}
          <Link className="cursor-pointer" href="/">
            recruitment.srmkzilla.net
          </Link>{" "}
          now
        </h1>
      </div>
      <Image
        src="/404bg.png"
        className="z-20 w-full xl:h-auto h-96 object-fill absolute bottom-0 xl:-mb-20 mb-0 left-0"
        alt="404 background"
        width={150}
        height={150}
      />
      <motion.img
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.3 }}
        transition={{ yoyo: Infinity, duration: 2 }}
        src="/404stars.png"
        className="absolute top-0 left-0 w-screen h-screen object-cover z-0"
        alt="stars"
      />
      <div className="absolute z-20 xl:w-5/12 bg w-9/12 top-96 mt-12 md:mt-24 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <Image height={1000} width={1500} src="/err.png" alt="404" />
      </div>
    </div>
  );
};

export default Error;
