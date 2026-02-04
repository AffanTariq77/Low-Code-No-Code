import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import Hero3DImage from "./Hero3DImage";

const Hero = () => {
  return (
    <Dialog>
      <section className="pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 bg-white overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 sm:gap-12 md:gap-20 w-full">
          {/* Left: Text */}
          <div className="flex-1 w-full text-left space-y-4 sm:space-y-6 md:space-y-7 max-w-2xl md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-[1.1]">
              From Prompt to Product.<br className="hidden sm:block" />
              Real Software, Ready to Scale.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              Turn your AI-generated prototypes into production-ready software in days, not months.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              You bring the Vibe; we bring the Engineering.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start mt-2 sm:mt-4">
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary active:bg-sky-500 md:hover:bg-sky-400 text-primary-foreground gap-2 md:hover:shadow-sky-blue px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg md:text-xl font-semibold w-full sm:w-auto touch-manipulation min-h-[48px]"
                >
                  Get My Launch Plan
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </DialogTrigger>
            </div>
            <div className="pt-4 sm:pt-6">
              <p className="text-sm sm:text-base text-muted-foreground">
                Free 15-minute roadmap session for your AI code (Bolt.new, v0, Replit, etc.).
              </p>
            </div>
          </div>
          {/* Right: 3D Animation */}
          <div className="flex-1 flex justify-center items-center w-full mb-6 sm:mb-8 md:mb-0">
            <Hero3DImage />
          </div>
        </div>
        <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
          <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
            <div className="p-0">
              <ContactForm onlyForm />
            </div>
          </div>
        </DialogContent>
      </section>
    </Dialog>

  );
};

export default Hero;
