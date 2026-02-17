import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Solutions } from "@/components/sections/services";
import { Projects } from "@/components/sections/projects";
import { WhyUs } from "@/components/sections/why-us";
import { Testimonials } from "@/components/sections/testimonials";
import { Certifications } from "@/components/sections/certifications";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Solutions />
      <Projects />
      <WhyUs />
      <Testimonials />
      <Certifications />
      <Contact />
    </div>
  );
}
