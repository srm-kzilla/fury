import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Life from "@/components/Life";
import Roadmap from "@/components/Roadmap";
import CoreValues from "@/components/CoreValues";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Life />
      <Roadmap />
      <CoreValues />
      <Footer />
    </div>
  );
}
