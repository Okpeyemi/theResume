"use client"

import React, { useState } from 'react'
import Photo from "@/public/assets/images/Photo.jpeg"
import LinkedIn from "@/public/assets/images/linkedin.png"
import GitHub from "@/public/assets/images/github.png"
import Image from 'next/image'
import { Button } from '../ui/button'

const Section1 = () => {
    const [active, setActive] = useState(false);
  return (
    <div className="flex max-md:flex-col my-10 border border-muted bg-card rounded-xl items-center" onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)} >
        {active ? 
        (<Image
            className="rounded-xl border-2 border-primary m-10 w-[300px] h-[300px] max-md:w-[500px] max-md:h-[500px] max-sm:w-[300px] max-sm:h-[300px]"
            src={Photo}
            width={500}
            height={500}
            alt="Photo"
        />) : (<Image
            className="rounded-xl m-10 w-[300px] h-[300px] max-md:w-[500px] max-md:h-[500px] max-sm:w-[300px] max-sm:h-[300px]"
            src={Photo}
            width={500}
            height={500}
            alt="Photo"
        />)}

        <div className="m-10 flex flex-col justify-between">
            <h1 className="font-semibold text-[55px] max-xl:text-[45px] max-lg:text-[35px] text-primary">Salut, Je suis Maqsoud - Web <br /> Developper + UX Designer</h1>
            <h5 className="text-[20px] my-5">Je design et je code de jolie et simple site web.</h5>
            <div className="flex items-center">
                <Button className="font-semibold rounded-full w-[150px] mr-2 p-("><a href="#contact">Recruter-moi</a></Button>
                <a href="#">
                    <Image
                        className="mx-2 cursor-pointer"
                        src={GitHub}
                        width={35}
                        height={35}
                        alt="GitHub" 
                    />
                </a>
                <a href="#">
                    <Image
                        className="mx-2 cursor-pointer"
                        src={LinkedIn}
                        width={35}
                        height={35}
                        alt="LinkedIn" 
                    />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Section1