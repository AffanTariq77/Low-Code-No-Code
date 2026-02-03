import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import OurImpact from "./OurImpact";

import {
  Zap,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Zap,
      step: "01",
      title: "The AI Rescue Mission",
      description: "Did your AI write code that looks right but acts wrong? We specialize in 'Hallucination Rehab.'",
      details: [
        "Debug AI-generated code from Bolt.new, v0, Lovable, etc.",
        "Identify where the logic breaks down",
        "Fix bugs that prompts alone can't solve",
        "Ensure your code actually works as intended",
      ],
      price: "Starting at $499",
      cta: "Rescue My Code",
    },
    {
      icon: CheckCircle,
      step: "02",
      title: "Productionizing the Prototype",
      description: "A script running on a browser tab isn't a business. We harden your prototype for the real world.",
      details: [
        "Secure authentication setup",
        "Real database integration (Supabase/Firebase/SQL)",
        "Deployment strategies that handle actual traffic",
        "Production-ready architecture and security",
      ],
      price: "$1,500 - $5,000",
      cta: "Go to Production",
    },
    {
      icon: TrendingUp,
      step: "03",
      title: "The Hybrid Build (Days, Not Months)",
      description: "We don't just fix; we build. By combining AI generation with professional engineering, we deliver fully functional apps at lightning speed.",
      details: [
        "AI-generated boilerplate + human expertise",
        "Full-stack applications in days, not months",
        "Custom features and integrations",
        "Scalable architecture from day one",
      ],
      price: "$5,000 - $20,000+",
      cta: "Build with Us",
    },
  ];

  const [hovered, setHovered] = React.useState<number | null>(null);

  return (
    <>
      <section
        id="services"
        className="py-8 px-2 sm:px-6 md:py-10 bg-muted/20"
      >
        <div className="container mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#192841" }}
            >
              Our Core Services: From Hallucination to Production
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We specialize in taking AI-generated code and transforming it into production-ready software that scales.
            </p>
          </div>

          {/* SVG gradient definition rendered once */}
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="services-gradient"
                x1="0"
                y1="0"
                x2="28"
                y2="28"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8923cb" />
                <stop offset="1" stopColor="#374c70ff" />
              </linearGradient>
            </defs>
          </svg>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="flex h-full"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Card
                    className={`flex flex-col justify-between p-6 md:p-8 border border-border/40 transition-all duration-300 bg-[#F3F9FF] min-h-[520px] h-full w-full ${
                      hovered === index
                        ? "scale-105 shadow-2xl z-20 -translate-y-2"
                        : "hover:shadow-sky-blue hover:-translate-y-1"
                    }`}
                    style={{ background: "#F3F9FF" }}
                  >
                    <div>
                      <div className="mb-4 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon
                            className="h-6 w-6"
                            style={{ color: "#8923cb" }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-muted-foreground">{item.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-primary font-sans tracking-tight text-left">
                        {item.title}
                      </h3>
                      <p className="text-base text-muted-foreground font-normal mb-4">
                        {item.description}
                      </p>
                      <ul className="text-sm text-muted-foreground font-normal font-sans leading-relaxed list-disc pl-6 text-left mb-6 space-y-2">
                        {item.details.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-auto pt-4 border-t border-border/30">
                      <p className="text-lg font-bold text-primary mb-4">{item.price}</p>
                      <Button className="w-full bg-primary hover:bg-sky-400 text-white font-semibold">
                        {item.cta}
                      </Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <OurImpact />
    </>
  );
};

export default Services;
