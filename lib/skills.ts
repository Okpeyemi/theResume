import { StaticImageData } from "next/image";

import Figma from "@/public/assets/images/figma.png";
import Figma2 from "@/public/assets/images/figma2.png";
import Photoshop from "@/public/assets/images/photoshop.png";
import Photoshop2 from "@/public/assets/images/photoshop2.png";
import InDesign from "@/public/assets/images/indesign.png";
import InDesign2 from "@/public/assets/images/indesign2.png";
import XD from "@/public/assets/images/xd.png";
import XD2 from "@/public/assets/images/xd2.png";
import Illustrator from "@/public/assets/images/illustrator.png";
import Illustrator2 from "@/public/assets/images/illustrator2.png";
import JS from "@/public/assets/images/js.png";
import JS2 from "@/public/assets/images/js2.png";
import ReactJs from "@/public/assets/images/atom.png";
import ReactJs2 from "@/public/assets/images/atom2.png";
import VueJs from "@/public/assets/images/vuejs.png";
import VueJs2 from "@/public/assets/images/vuejs2.png";
import Python from "@/public/assets/images/python.png";
import Python2 from "@/public/assets/images/python2.png";
import Html from "@/public/assets/images/html.png";
import Html2 from "@/public/assets/images/html2.png";
import Css from "@/public/assets/images/c.png";
import Css2 from "@/public/assets/images/c2.png";
import PhpMySql from "@/public/assets/images/php&mysql.png";
import PhpMySql2 from "@/public/assets/images/php&mysql2.png";
import NodeJs from "@/public/assets/images/nodejs.png";
import NodeJs2 from "@/public/assets/images/nodejs2.png";
import Express from "@/public/assets/images/ex.png";
import Express2 from "@/public/assets/images/ex2.png";
import Docker from "@/public/assets/images/docker.png";
import Docker2 from "@/public/assets/images/docker2.png";
import Project from "@/public/assets/images/project.png";
import Project2 from "@/public/assets/images/project2.png";
import Network from "@/public/assets/images/global-network.png";
import Network2 from "@/public/assets/images/global-network2.png";
import LanguageC from "@/public/assets/images/c.png";
import LanguageC2 from "@/public/assets/images/c2.png";
import Symfony from "@/public/assets/images/symfony.png";
import Symfony2 from "@/public/assets/images/symfony2.png";
import WordPress from "@/public/assets/images/wordpress.png";
import WordPress2 from "@/public/assets/images/wordpress2.png";
import Elixir from "@/public/assets/images/ex.png";
import Elixir2 from "@/public/assets/images/ex2.png";

type Skills = {
    id: number;
    name: string;
    percentage: string;
    activeImg: StaticImageData;
    inactiveImg: StaticImageData;
}

export const skills: Skills[] = [
    { id: 1, name: "Figma", percentage: "65%", activeImg: Figma, inactiveImg: Figma2 },
    { id: 2, name: "Photoshop", percentage: "75%", activeImg: Photoshop, inactiveImg: Photoshop2 },
    { id: 3, name: "InDesign", percentage: "75%", activeImg: InDesign, inactiveImg: InDesign2 },
    { id: 4, name: "XD", percentage: "75%", activeImg: XD, inactiveImg: XD2 },
    { id: 5, name: "Illustrator", percentage: "65%", activeImg: Illustrator, inactiveImg: Illustrator2 },
    { id: 6, name: "JavaScript", percentage: "45%", activeImg: JS, inactiveImg: JS2 },
    { id: 7, name: "ReactJS", percentage: "50%", activeImg: ReactJs, inactiveImg: ReactJs2 },
    { id: 8, name: "VueJS", percentage: "50%", activeImg: VueJs, inactiveImg: VueJs2 },
    { id: 9, name: "Python", percentage: "45%", activeImg: Python, inactiveImg: Python2 },
    { id: 10, name: "HTML", percentage: "85%", activeImg: Html, inactiveImg: Html2 },
    { id: 11, name: "CSS", percentage: "85%", activeImg: Css, inactiveImg: Css2 },
    { id: 12, name: "PHP & MySQL", percentage: "50%", activeImg: PhpMySql, inactiveImg: PhpMySql2 },
    { id: 13, name: "NodeJS", percentage: "40%", activeImg: NodeJs, inactiveImg: NodeJs2 },
    { id: 14, name: "Express", percentage: "40%", activeImg: Express, inactiveImg: Express2 },
    { id: 15, name: "Docker", percentage: "45%", activeImg: Docker, inactiveImg: Docker2 },
    { id: 16, name: "Project Management", percentage: "65%", activeImg: Project, inactiveImg: Project2 },
    { id: 17, name: "Network", percentage: "65%", activeImg: Network, inactiveImg: Network2 },
    { id: 18, name: "C Language", percentage: "45%", activeImg: LanguageC, inactiveImg: LanguageC2 },
    { id: 19, name: "Symfony", percentage: "45%", activeImg: Symfony, inactiveImg: Symfony2 },
    { id: 20, name: "WordPress", percentage: "65%", activeImg: WordPress, inactiveImg: WordPress2 },
    { id: 21, name: "Elixir", percentage: "40%", activeImg: Elixir, inactiveImg: Elixir2 },
  ];