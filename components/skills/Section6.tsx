"use client"

import React, { useState } from 'react'
import { skills } from '@/lib/skills'
import Image from 'next/image'
import { Button } from '../ui/button'

const Section6 = () => {
    const [active, setActive] = useState(false);
    const [id, setId] = useState(0)
    const [showMore, setShowMore] = useState(false);

    const displayedSkills = showMore ? skills : skills.slice(0, 6); // Affiche 6 outils par défaut

    return (
        <div className="flex flex-col items-center">
            <div className="flex justify-evenly flex-wrap mb-5">
                {displayedSkills.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center"
                        onMouseEnter={() => {
                            setActive(true);
                            setId(skill.id);
                        }}
                        onMouseLeave={() => {
                            setActive(false);
                            setId(skill.id);
                        }}
                    >
                        <div className="flex flex-col items-center border border-muted bg-card px-[60px] py-[40px] m-5 rounded-3xl hover:border-primary hover:bg-popover">
                            <Image
                                src={id === skill.id ? skill.activeImg : skill.inactiveImg}
                                width={60}
                                height={60}
                                alt={skill.name}
                            />
                            <h1 className="mt-5 font-bold text-[20px]">{skill.percentage}</h1>
                        </div>
                        <h3 className="font-medium mb-5">{skill.name}</h3>
                    </div>
                ))}
            </div>
            <Button
                className="mt-5 px-4 p-7 bg-primary text-white rounded-full font-semibold"
                onClick={() => setShowMore(!showMore)}
            >
                {showMore ? 'Voir moins' : 'Voir plus'}
            </Button>
        </div>
  )
}

export default Section6