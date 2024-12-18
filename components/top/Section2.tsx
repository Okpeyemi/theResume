import React from 'react'
import Trophy from "@/public/assets/images/trophy.png"
import Job from "@/public/assets/images/suitcase.png"
import HappyClient from "@/public/assets/images/customer-engagement.png"
import Complete from "@/public/assets/images/closure.png"
import Image from 'next/image'

const Section2 = () => {
  return (
    <div className="flex max-md:flex-col my-10 border border-muted bg-card rounded-xl items-center p-10 justify-between">
        <div className="flex flex-col max-md:my-10">
            <Image
                src={Trophy}
                width={30}
                height={30}
                alt="Trophy"
            />
            <h1 className="font-medium text-[70px] min-w-[185px] max-md:text-[100px]">3</h1>
            <p className="font-semibold">Jobs terminés</p>
        </div>
        <div className="flex flex-col items-start max-md:my-10">
            <Image
                src={Job}
                width={30}
                height={30}
                alt="Job"
            />
            <h1 className="font-medium text-[70px] min-w-[185px] max-md:text-[100px]">3</h1>
            <p className="font-semibold">Années d'expériences</p>
        </div>
        <div className="flex flex-col max-md:my-10">
            <Image
                src={HappyClient}
                width={30}
                height={30}
                alt="HappyClient"
            />
            <h1 className="font-medium text-[70px] min-w-[185px] max-md:text-[100px]">23</h1>
            <p className="font-semibold">Clients Satisfaits</p>
        </div>
        <div className="flex flex-col max-md:my-10">
            <Image
                src={Complete}
                width={30}
                height={30}
                alt="Complete"
            />
            <h1 className="font-medium text-[70px] min-w-[185px] max-md:text-[100px]">+10</h1>
            <p className="font-semibold">Projets terminés</p>
        </div>
    </div>
  )
}

export default Section2