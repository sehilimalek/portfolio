import Contact from "@/_components/sections/contact";
import Footer from "@/_components/sections/footer";
import Hero from "@/_components/sections/hero";
import Portfolio from "@/_components/sections/portfolio";
import Services from "@/_components/sections/services";
import Toggles from "@/_components/toggles";

export default function Home() {
  return (
    <main className="md:h-screen md:flex flex-col justify-center items-center ">
      <div className="md:grid gap-4 grid-cols-4 grid-rows-1 p-4 space-y-4 md:space-y-0">
        <div className="md:hidden">
          <Toggles />
        </div>
        <div className="md:row-span-2">
          <Hero />
        </div>
        <div className="md:col-span-2 space-y-4">
          <Services />
          <Portfolio />
        </div>
        <div className="md:row-span-2 md:space-y-4">
          <div className="hidden md:block">
            <Toggles />
          </div>
          <Contact />
          <Footer />
        </div>
      </div>
    </main>
  );
}
