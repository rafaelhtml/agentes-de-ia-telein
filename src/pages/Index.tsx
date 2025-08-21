
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AICopyGenerator from "@/components/AICopyGenerator";
import VideoDemo from "@/components/VideoDemo";
import AboutUs from "@/components/AboutUs";
import Segments from "@/components/Segments";
import AudioExamples from "@/components/AudioExamples";
import Pricing from "@/components/Pricing";
import VSLMobile from "@/components/VSLMobile";
import Comparison from "@/components/Comparison";
import Affiliate from "@/components/Affiliate";
import Guarantee from "@/components/Guarantee";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VSLMobile />
      <Problem />
      <Solution />
      <AICopyGenerator />
      <VideoDemo />
      <AudioExamples />
      <AboutUs />
      <Segments />
      <Pricing />
      <Comparison />
      <Affiliate />
      <Guarantee />
      <CTA />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Index;
