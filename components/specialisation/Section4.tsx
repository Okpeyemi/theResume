import React from 'react'
import WebDevelopment from "@/public/assets/images/web-development.png"
import UiUx from "@/public/assets/images/ui-ux.png"
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className="flex flex-col">
        <div className="flex max-md:flex-col items-center justify-between">
            <div className="flex flex-col item-center rounded-xl border border-muted bg-card w-[49%] max-md:w-full hover:border-primary">
                <div className="bg-popover rounded-t-xl">
                    <div className="bg-primary w-fit p-5 mx-9 my-7 rounded-xl">
                        <Image 
                            src={WebDevelopment}
                            width={30}
                            height={30}
                            alt="Web Development"
                        />
                    </div>
                </div>
                <div className="my-10 px-10">
                    <h1 className="my-5 font-bold text-[25px]">Développeur Web</h1>
                    <p>Fort d&apos;une solide expertise en <strong>JavaScript, Node.js, Vue.js</strong> et <strong>React,</strong> je me concentre sur la création d&apos;applications Web réactives et conviviales. Mes projets impliquent souvent du développement full-stack, de la mise en œuvre de la logique <strong>back-end</strong> et de la <strong>gestion de la base de données</strong> à la création d&apos;interfaces utilisateur attrayantes et accessibles.</p>
                </div>
            </div>
            <div className="flex flex-col item-center rounded-xl border border-muted bg-card w-[49%] max-md:w-full max-md:mt-10 hover:border-primary">
                <div className="bg-popover rounded-t-xl">
                    <div className="bg-primary w-fit p-5 mx-9 my-7 rounded-xl">
                        <Image 
                            src={UiUx}
                            width={30}
                            height={30}
                            alt="UiUx"
                        />
                    </div>
                </div>
                <div className="my-10 px-10">
                    <h1 className="my-5 font-bold text-[25px]">UI/UX Designer</h1>
                    <p>Je me spécialise dans la création d&apos;interfaces claires et intuitives qui améliorent l&apos;engagement des utilisateurs. Ma connaissance des <strong>principes UI/UX</strong> combinée à mes compétences techniques me permet de combler le fossé entre la conception et le développement, garantissant des expériences numériques cohérentes et centrées sur l&apos;utilisateur.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4