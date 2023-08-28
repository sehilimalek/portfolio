import Hero from "@/_components/sections/hero";
import Portfolio from "@/_components/sections/portfolio";
import Services from "@/_components/sections/services";

export default function Home() {
  return (
    <main className="bg-background md:max-w-[85vw] md:mx-auto">
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
