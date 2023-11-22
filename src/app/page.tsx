import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutConf from "@/components/AboutConf";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <AboutConf />
    </main>
  );
}
