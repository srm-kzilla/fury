import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const LoginPage: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-kz-grey overflow-x-hidden">
      <Head>
        <title>Signup</title>
        <link rel="icon" href="/logo.svg" />
      </Head>
      <div className="flex h-screen w-full flex-col">
        <div className="flex flex-col h-full w-full lg:flex-row">
          <div className="w-full lg:h-full h-fit lg:w-5/12">
            <div className="flex justify-center h-fit lg:h-[50vh]">
              <div className="justify-center h-fit lg:h-[50vh]">
                <div className="relative h-1/2 center md:pl-12">
                  <div className="lg:mt-20 h-full w-full font-josefinSans mt-2 font-bold text-kz-orange md:text-[7vw] text-[3rem] ">
                    AdminPanel
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="z-0 flex h-full w-full lg:w-7/12 items-center justify-center">
            <div className="flex relative h-fit w-fit lg:w-7/12 xl:w-5/12 flex-col rounded-xl bg-kz-lt-grey px-10 py-12 sm:py-16 sm:pt-10 space-y-8 drop-shadow-2xl outline outline-1 shadow-3xl">
              <div className="absolute left-4 -top-[8vh] lg:-rotate-90 lg:-left-[14vh] lg:top-[6vh]">
                <h1 className="text-[6vh] font-outfit font-bold text-gray-500">
                  Sign In
                </h1>
              </div>
              <form className="space-y-9" action="" method="post">
                <div>
                  <label className=" text-kz-orange text-left font-outfit font-semibold text-xl md:text-2xl m-2">
                    Email
                  </label>
                  <div className="w-full p-2 flex items-center rounded-xl ">
                    <input
                      className="bg-transparent border-b-2 text-gray-500 font-medium outline-none w-full text-l"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your user name"
                    />
                  </div>
                </div>
                <div>
                  <label className=" text-kz-orange text-left font-outfit font-semibold text-xl md:text-2xl m-2">
                    Password
                  </label>
                  <div className="w-full p-2 flex items-center rounded-xl ">
                    <input
                      className="bg-transparent border-b-2 text-gray-500 font-medium outline-none w-full text-l"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your Password"
                    />
                  </div>
                </div>
                <div>
                  <div className="px-2 sm:px-5 max-w-sm ">
                    <button
                      type="submit"
                      className="text-white w-full bg-kz-orange hover:shadow-box-shadow focus:outline-none font-medium rounded-lg md:text-sm px-5 py-2.5 text-center justify-between"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
