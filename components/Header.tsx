"use client";

import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/images/logo.png";
import { ModeToggle } from "./ModeToggle";
import { navbar } from "@/lib/utils";
import { Button } from "./ui/button";
import ToggleButton from "./ToggleButton";
import Resume from "./Resume";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-10">
      <div className="flex items-center">
        <Image src={Logo} width={70} height={70} alt="Logo" />
        <a
          className="mx-5 max-sm:hidden font-medium"
          href="mailto:maqsoud.tawaliou@epitech.eu"
        >
          maqsoud.tawaliou@epitech.eu
        </a>
      </div>
      <div className="max-xl:hidden">
        {navbar.map(({ label, link }, index) => (
          <a
            className={`mx-5 font-semibold cursor-pointer hover:border-b-4 hover:pb-2 hover:border-primary`}
            href={link}
            key={index}
          >
            {label}
          </a>
        ))}
      </div>
      <div className="flex items-center">
        <Button className="font-semibold rounded-full w-40 mx-5 p-5">
          <Resume />
        </Button>
        <ModeToggle />
        <div className="hidden max-xl:block">
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
