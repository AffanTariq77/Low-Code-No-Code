import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import WhyWorkWithUs from "@/components/WhyWorkWithUs";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full max-w-[100vw]">
      <Navigation />
    <div className="pt-24 sm:pt-28 md:pt-32 mb-[-4rem] sm:mb-[-5rem] md:mb-[-6rem] text-center bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight px-2"
      style={{ color: "#192841" }}
    >
      Prompt-to-Product Accelerator
    </h1>
  </div>
</div>

      <Hero />
      <Problem />
      <Services />
      <TechStack />
      <WhyWorkWithUs />
      <SocialProof />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
