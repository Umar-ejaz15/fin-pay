import Exprience from "@/components/Exprience";
import Footer from "@/components/Footer";
import Helped from "@/components/Helped";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Reserve from "@/components/Reserve";
import WhyFinePay from "@/components/WhyFinePay";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Exprience />
      <WhyFinePay />
      <Reserve/>
      <Helped/>
      <Footer/>
    </>
  );
}
