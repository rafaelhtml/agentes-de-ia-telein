import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Comparison from "@/components/Comparison";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ChatTelein from "@/components/ChatTelein";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <Comparison />
      <ChatTelein />
      <Testimonials />
      <Pricing />
      <Guarantee />
      <AboutUs />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Index;
