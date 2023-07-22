import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full h-fit flex justify-between py-6 p-6">
      <div>
        <Link href="https://www.srmkzilla.net/">
          <Image
            src="/SRMKZILLALogo.svg"
            alt="SRMKZILLA"
            width={60}
            height={60}
          />
        </Link>
      </div>
      <div className="flex w-full gap-5 items-center justify-end">
        <div>
          <a href="https://dashboard.kzilla.xyz" target="_blank">
            <button className="md:px-12 px-4 md:py-2 py-1 rounded-full border-2 hover:bg-highlight hover:border-black hover:text-black font-bold bg-primary border-highlight text-highlight hover:text-recruitments-bg duration-300">
              Get Started
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
