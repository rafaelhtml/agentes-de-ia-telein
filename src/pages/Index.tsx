import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Segments from "@/components/Segments";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Segments />
      <Pricing />
      <CTA />
    </div>
  );
};

export default Index;
