import { Hero } from "../sections/Hero";
import { SelectedWork } from "../sections/SelectedWork";
import { About } from "../sections/About";
import { Contact } from "../sections/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <About />
      <Contact />
    </>
  );
}
