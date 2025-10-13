import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <AboutUs />
      <Pricing />
      <Comparison />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Index;
