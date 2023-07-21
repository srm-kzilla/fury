import React from "react";
import Image from "next/image";
import MoonIcon from "remixicon-react/MoonFillIcon";

export default function Navbar() {
  return (
    <div className="w-full h-fit flex justify-between py-6 p-6">
      <div>
        <Image
          src="/srmkzilla-logo-new.svg"
          alt="SRMKZILLA"
          width={60}
          height={60}
        />
      </div>
      <div className="flex w-full gap-5 items-center justify-end">
        <div>
          <a href="https://dashboard.kzilla.xyz" target="_blank">
            <button className="md:px-12 px-4 md:py-2 py-1 rounded-full border-2 text-highlight border-highlight font-bold hover:bg-white hover:text-black hover:text-recruitments-bg duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
