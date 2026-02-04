import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";
import logo from "@/assets/airbridge-logo.png";



const Footer = () => {
  return (
    <Dialog>
    <footer
      className="text-secondary-foreground border-t-[0.5px] border-[#b3c7e6]/50 overflow-hidden w-full"
      style={{ background: "#98cfecff" }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-9 md:py-10 w-full">
        <div className="flex flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 w-full">
          <div className="flex items-center justify-center mb-1 sm:mb-2">
            <img src={logo} alt="AirBridge Devs" className="h-6 sm:h-7 md:h-8 w-auto" />
          </div>
          <h2
            className="text-xl leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl lg:leading-tight font-bold text-center px-3 sm:px-4 max-w-4xl w-full"
            style={{ color: "#192841" }}
          >
            Don't Let Your Idea Die in a Chat Window
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#23395d] max-w-2xl mx-auto text-center px-3 sm:px-4 leading-relaxed w-full">
            Let's look at what you've built and map out the finish line. Turn that vibe into a venture.
          </p>
         <DialogTrigger asChild>
                <Button className="bg-primary active:bg-sky-500 md:hover:bg-sky-400 text-primary-foreground md:hover:shadow-sky-blue px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base touch-manipulation min-h-[48px] font-semibold">
                  Get My Launch Plan
                </Button>
          </DialogTrigger>
        </div>
      </div>

      <div className="border-t border-[#b3c7e6]">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-5 sm:py-6 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6 w-full">
            <div className="text-xs sm:text-sm text-[#23395d] opacity-50 text-center md:text-left order-2 md:order-1 w-full md:w-auto">
              <p className="mb-1">© 2025 AirBridge Devs. All rights reserved.</p>
              <p className="text-[10px] sm:text-xs break-words">From Prompt to Product. Real Software, Ready to Scale.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 md:order-2 w-full md:w-auto justify-center">
              <nav className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto">
                <a href="#services" className="text-xs sm:text-sm text-[#23395d] opacity-70 active:text-sky-400 md:hover:text-sky-400 transition-colors font-medium whitespace-nowrap">Services</a>
                <a href="#process" className="text-xs sm:text-sm text-[#23395d] opacity-70 active:text-sky-400 md:hover:text-sky-400 transition-colors font-medium whitespace-nowrap">How It Works</a>
                <a href="#faq" className="text-xs sm:text-sm text-[#23395d] opacity-70 active:text-sky-400 md:hover:text-sky-400 transition-colors font-medium whitespace-nowrap">FAQ</a>
              </nav>
              <div className="flex items-center gap-4 sm:gap-5 justify-center">
                <a
                  href="https://www.linkedin.com/company/airbridgedevs/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#23395d] opacity-40 active:text-sky-400 md:hover:text-sky-400 transition-colors p-2 -m-2 flex-shrink-0"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@airbridgedevs.com"
                  className="text-xs sm:text-sm text-[#23395d] opacity-70 active:text-sky-400 md:hover:text-sky-400 transition-colors whitespace-nowrap flex-shrink-0 font-medium"
                >
                  info@airbridgedevs.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
        <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
          <div className="p-0">
            <ContactForm onlyForm />
          </div>
        </div>
      </DialogContent>
    </footer>
    </Dialog>
    
  );
};

export default Footer;
