import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutConf from "@/components/AboutConf";
import Objective from "@/components/Objective";
import AboutAkgec from "@/components/AboutAkgec";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutConf />
      <Objective />
      <AboutAkgec />
    </main>
  );
}
