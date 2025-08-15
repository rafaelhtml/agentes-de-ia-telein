import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Segments from "@/components/Segments";
import AudioExamples from "@/components/AudioExamples";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Segments />
      <AudioExamples />
      <Pricing />
      <ContactForm />
      <CTA />
    </div>
  );
};

export default Index;
