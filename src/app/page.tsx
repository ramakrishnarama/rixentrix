import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Iot from "@/components/Iot";
import Bms from "@/components/Bms";
import Cloud from "@/components/Cloud";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Iot />
        <Bms />
        <Cloud />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
