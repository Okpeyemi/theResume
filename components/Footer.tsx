"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import Logo from "@/public/assets/images/logo.png"
import Logo1 from "@/public/assets/images/logo1.png"
import { navbar } from '@/lib/utils'

const Footer = () => {
    const [theme, setTheme] = useState("");
  return (
    <div className="flex flex-col w-full bg-popover items-center py-[50px] mt-20">
        <div>
            <Image 
                src={Logo1}
                width={100}
                height={100}
                alt='Logo'
            />
        </div>
        <div className="flex max-md:flex-wrap justify-center">
            {navbar.map(({label, link}, index) => (
            <a className={`m-5 font-bold cursor-pointer hover:border-b-4 hover:pb-2 hover:border-primary`} href={link} key={index}>{label}.</a>
            ))}
        </div>
        <p className="text-primary my-5 text-center">© 2024 All Rights Reserved by <a href="#" className="font-bold">Maqsoud.Tawaliou</a></p>
    </div>
  )
}

export default Footer