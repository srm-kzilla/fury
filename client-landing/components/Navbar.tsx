import React from "react";
import Image from "next/image";
import MoonIcon from "remixicon-react/MoonFillIcon";

export default function Navbar() {
    return (
        <div className={"w-full h-fit flex justify-between py-6 p-6"}>
            <div>
                <Image src={"/SRMKZILLALogo.png"} alt={"SRMKZILLA"} width={45} height={45}/>
            </div>
            <div className={"flex w-full gap-5 items-center justify-end"}>
                <div className={"w-fit h-fit cursor-pointer"}>
                    <MoonIcon size={35}/>
                </div>
                <div>
                    <button className={"md:px-12 px-4 md:py-2 py-1 rounded-full border-2 border-white font-bold hover:bg-white hover:text-recruitments-bg duration-300"}>Get Started</button>
                </div>
            </div>
        </div>
    );
}