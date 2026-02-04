import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/airbridge-logo.png";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import ContactForm from "./ContactForm";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <Dialog>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border overflow-hidden w-full max-w-[100vw]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center flex-shrink-0">
              <img src={logo} alt="AirBridge Devs" className="h-6 sm:h-7 md:h-8 w-auto max-w-[140px] sm:max-w-none" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105 text-sm lg:text-base"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105 text-sm lg:text-base"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="transition-colors transition-transform duration-200 text-headernav hover:text-headernav-dark hover:scale-105 text-sm lg:text-base"
              >
                FAQ
              </button>
              <DialogTrigger asChild>
                <Button className="bg-primary active:bg-sky-500 md:hover:bg-sky-400 text-primary-foreground md:hover:shadow-sky-blue text-sm lg:text-base px-4 lg:px-6 py-2 touch-manipulation min-h-[44px]">
                  Get My Launch Plan
                </Button>
              </DialogTrigger>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2 touch-manipulation min-h-[44px] min-w-[44px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-headernav active:text-headernav-dark py-3 px-2 touch-manipulation min-h-[44px] text-base font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left text-headernav active:text-headernav-dark py-3 px-2 touch-manipulation min-h-[44px] text-base font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-headernav active:text-headernav-dark py-3 px-2 touch-manipulation min-h-[44px] text-base font-medium"
              >
                FAQ
              </button>
              <DialogTrigger asChild>
                <Button className="bg-primary active:bg-sky-500 text-primary-foreground w-full py-3 touch-manipulation min-h-[48px] text-base font-semibold">
                  Get My Launch Plan
                </Button>
              </DialogTrigger>
            </div>
          )}
        </div>
      </nav>
      <DialogContent className="max-w-xl p-0 bg-transparent border-0 shadow-none">
        <div className="rounded-2xl bg-white shadow-xl border border-border p-0 overflow-hidden">
          <div className="p-0">
            <ContactForm onlyForm />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Navigation;
