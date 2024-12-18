import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { navbar } from "@/lib/utils"
import { link } from "fs"
import { Menu } from "lucide-react"

import React from 'react'
import Resume from "./Resume"

const ToggleButton = () => {
  return (
    <div className="mx-5 p-[5px] rounded-[5px] border border-muted hover:bg-muted flex items-center">
      <DropdownMenu>
      <DropdownMenuTrigger><Menu /> </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {navbar.map(({label, link}, index) => (
            <DropdownMenuItem key={index}><a href={link}>{label}</a></DropdownMenuItem>
          ))}
        {/* <DropdownMenuSeparator />
        <DropdownMenuItem className="bg-primary cursor-pointer font-semibold"><Resume /></DropdownMenuItem> */}
      </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default ToggleButton