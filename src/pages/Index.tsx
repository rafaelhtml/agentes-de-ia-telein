import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import AdvancedFeatures from "@/components/AdvancedFeatures";
import GoogleCalendarIntegration from "@/components/GoogleCalendarIntegration";
import Testimonials from "@/components/Testimonials";
import AboutUs from "@/components/AboutUs";
import Pricing from "@/components/Pricing";
import Implementation from "@/components/Implementation";
import Comparison from "@/components/Comparison";
import Guarantee from "@/components/Guarantee";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import ChatTelein from "@/components/ChatTelein";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <AdvancedFeatures />
      <GoogleCalendarIntegration />
      <Testimonials />
      <ChatTelein />
      <Comparison />
      <AboutUs />
      <Implementation />
      <Pricing />
      <Guarantee />
      <CTA />
      <FAQ />
    </div>
  );
};

export default Index;
