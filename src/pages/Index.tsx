import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AICopyGenerator from "@/components/AICopyGenerator";
import VideoDemo from "@/components/VideoDemo";
import Segments from "@/components/Segments";
import AudioExamples from "@/components/AudioExamples";
import Pricing from "@/components/Pricing";
import Affiliate from "@/components/Affiliate";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <AICopyGenerator />
      <VideoDemo />
      <AudioExamples />
      <Segments />
      <Pricing />
      <Affiliate />
      <CTA />
      <ContactForm />
    </div>
  );
};

export default Index;
