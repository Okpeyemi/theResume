import React from 'react'
import Section6 from './skills/Section6'

const Skills = () => {
  return (
    <div id="skills" className="my-20 items-center">
        <div className="mb-10 flex flex-col items-center">
            <h1 className="text-[50px] font-bold text-primary max-sm:text-[35px]">Mes Compétences</h1>
            <p className="w-[700px] max-sm:w-[300px] text-center">Les compétences dans les domaines que j'ai déjà explorer</p>
        </div>
        <Section6 />
    </div>
  )
}

export default Skills