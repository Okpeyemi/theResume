import React from "react";
import { Button } from "../ui/button";
import UserInterface from "@/public/assets/images/user-interface.png";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="flex my-10 justify-between max-md:flex-col">
      <div className="flex flex-col border border-muted bg-card rounded-xl items-start p-10 justify-between w-[60%] max-md:w-full">
        <div className="mb-16">
          <h1 className="text-[50px] font-semibold text-primary max-sm:text-[35px]">
             Réalisations dans ma vie professionnelle.
          </h1>
          <p className="font-medium text-[20px]">
          Développeur passionné, j&apos;ai conçu des applications full-stack variées, allant de plateformes e-commerce à des solutions de gestion du temps, en utilisant <strong>Node.js, Vue.js, Symfony</strong> et<strong> React</strong>. Mes expériences m&apos;ont permis de gérer des projets en petite équipe, de la conception à la mise en production, en assurant le respect des délais et la qualité. Grâce à ma maîtrise de plusieurs technologies comme <strong>Docker, Elixir</strong> et <strong>MySQL,</strong> j&apos;ai su m&apos;adapter aux besoins de différents clients en intégrant des <strong>APIs</strong> et des architectures modernes, garantissant ainsi la scalabilité et la maintenabilité des solutions proposées.
          </p>
        </div>
        <Button className="font-bold rounded-full p-7">Contactez-moi</Button>
      </div>
      <div className="flex flex-col border border-muted bg-card rounded-xl items-center p-10 justify-between w-[37%] max-md:w-full max-md:mt-10">
        <div>
          <h1 className="font-bold my-2 text-[20px] text-primary">Interface Designer</h1>
          <p className="font-medium">
          En tant que <strong>UI designer,</strong> je collabore étroitement avec les clients pour comprendre leurs besoins spécifiques et les traduire en interfaces numériques intuitives. Grâce à mes compétences en <strong>Figma, Adobe XD, Photoshop</strong> et <strong>Illustrator,</strong> je propose des conceptions qui sont superbes, et qui s&apos;alignent également parfaitement avec l&apos;expérience utilisateur et les objectifs fonctionnels du projet.
          </p>
        </div>
        <Image
          src={UserInterface}
          width={250}
          height={250}
          alt="UserInterface"
        />
      </div>
    </div>
  );
};

export default Section3;
