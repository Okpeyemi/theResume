import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Download from "@/public/assets/images/download.png"

const Resume = () => {
  return (
    <a href="https://drive.google.com/file/d/1_mAfHV-5WO-FpjBMmCbpHWVXuF4kVCzS/view?usp=drive_link" className="flex">
        Mon CV 
        <Image
            className="ml-4"
            src={Download} 
            width={15}
            height={15}
            alt="Download"
        />
    </a>
  )
}

export default Resume