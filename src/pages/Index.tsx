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
    <div className="min-h-screen bg-background">
      <Navigation />
    <div className="pt-32 mb-[-6rem] text-center bg-white">
  <div className="container mx-auto px-4">
    <h1
      className="text-5xl md:text-6xl font-extrabold tracking-tight"
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
