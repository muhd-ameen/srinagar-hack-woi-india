import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Format } from "@/components/sections/Format";
import { Hero } from "@/components/sections/Hero";
import { Partners } from "@/components/sections/Partners";
import { Prizes } from "@/components/sections/Prizes";
import { Tracks } from "@/components/sections/Tracks";

// Short summaries only. Each one links to its own page for the details.
export default function Home() {
  return (
    <>
      <Hero />
      <About number={1} summary />
      <Tracks number={2} summary />
      <Format number={3} summary />
      <Prizes number={4} summary />
      <Partners />
      <Faq number={5} summary />
      <FinalCta />
    </>
  );
}
