import Hero from "@/components/landing/Hero";
import Description from "@/components/landing/Description";
import About from "@/components/landing/About";
import Directions from "@/components/landing/Directions";
import { Teachers } from "@/components/landing/Teachers";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Description />
      <About />
      <Directions />
      <Teachers />
    </main>
  );
}
