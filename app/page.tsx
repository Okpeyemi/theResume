import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Specialisation from "@/components/Specialisation";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div>
      <div className="lg:w-[70%] lg:mx-auto mx-5">
        <Header />
        <Top />
        <Specialisation />
        <Education />
        <Skills />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
