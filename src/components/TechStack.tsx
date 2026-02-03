import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TechStack = () => {
  const techCategories = {
    ai: [
      {
        name: "Vercel v0",
        details: {
          title: "Vercel v0",
          desc: "Stunning, instant UI generation from simple prompts. Perfect for rapid prototyping and design iteration.",
          url: "https://v0.dev/",
        },
      },
      {
        name: "Lovable",
        details: {
          title: "Lovable",
          desc: "AI-powered platform for creating beautiful web applications through natural language prompts.",
          url: "https://lovable.dev/",
        },
      },
      {
        name: "Bolt.new",
        details: {
          title: "Bolt.new",
          desc: "Full-stack logic and rapid iteration. Build complete applications with AI in minutes.",
          url: "https://bolt.new/",
        },
      },
      {
        name: "Replit",
        details: {
          title: "Replit",
          desc: "Collaborative browser-based IDE with AI assistance for instant development and deployment.",
          url: "https://replit.com/",
        },
      },
      {
        name: "Cursor",
        details: {
          title: "Cursor",
          desc: "AI-first code editor that understands your codebase and helps you write better code faster.",
          url: "https://cursor.sh/",
        },
      },
      {
        name: "Windsurf",
        details: {
          title: "Windsurf",
          desc: "AI-assisted coding environment designed for professional developers who want AI superpowers.",
          url: "https://codeium.com/windsurf",
        },
      },
      {
        name: "Emergent",
        details: {
          title: "Emergent",
          desc: "Complex agentic workflows and advanced AI automation for enterprise-scale applications.",
          url: "https://emergent.ai/",
        },
      },
    ],
    web: [
      {
        name: "Bubble",
        details: {
          title: "Bubble",
          desc: "Complex web apps with zero compromise on design. Perfect for scaling AI prototypes into full products.",
          url: "https://bubble.io/",
        },
      },
      {
        name: "Webflow",
        details: {
          title: "Webflow",
          desc: "Professional web design platform with custom code capabilities for pixel-perfect results.",
          url: "https://webflow.com/",
        },
      },
      {
        name: "Framer",
        details: {
          title: "Framer",
          desc: "High-fidelity interactive sites with smooth animations and modern design capabilities.",
          url: "https://www.framer.com/",
        },
      },
      {
        name: "Shopify",
        details: {
          title: "Shopify",
          desc: "E-commerce platform where AI innovation meets powerful selling capabilities.",
          url: "https://www.shopify.com/",
        },
      },
      {
        name: "WordPress",
        details: {
          title: "WordPress",
          desc: "Content management meets modern AI features for flexible, scalable websites.",
          url: "https://wordpress.org/",
        },
      },
    ],
    mobile: [
      {
        name: "FlutterFlow",
        details: {
          title: "FlutterFlow",
          desc: "High-performance native apps with beautiful UI. Turn your AI idea into App Store reality.",
          url: "https://flutterflow.io/",
        },
      },
      {
        name: "Adalo",
        details: {
          title: "Adalo",
          desc: "Rapid internal tools and MVPs without code. Perfect for testing your AI concepts on mobile.",
          url: "https://www.adalo.com/",
        },
      },
      {
        name: "Glide",
        details: {
          title: "Glide",
          desc: "Transform spreadsheets into mobile apps. Great for quick internal tools and data-driven apps.",
          url: "https://www.glideapps.com/",
        },
      },
      {
        name: "React Native",
        details: {
          title: "React Native",
          desc: "Cross-platform native mobile apps using JavaScript. Perfect for scaling to iOS and Android.",
          url: "https://reactnative.dev/",
        },
      },
    ],
    backend: [
      {
        name: "Node.js",
        details: {
          title: "Node.js",
          desc: "JavaScript runtime perfect for real-time applications and microservices architecture.",
          url: "https://nodejs.org/",
        },
      },
      {
        name: "Python",
        details: {
          title: "Python",
          desc: "Versatile backend language ideal for AI integration, data processing, and rapid development.",
          url: "https://www.python.org/",
        },
      },
      {
        name: "Supabase",
        details: {
          title: "Supabase",
          desc: "Open-source Firebase alternative with PostgreSQL, authentication, and real-time subscriptions.",
          url: "https://supabase.com/",
        },
      },
      {
        name: "Firebase",
        details: {
          title: "Firebase",
          desc: "Google's platform for building web and mobile apps with real-time database and authentication.",
          url: "https://firebase.google.com/",
        },
      },
      {
        name: "PostgreSQL",
        details: {
          title: "PostgreSQL",
          desc: "Advanced open-source relational database for complex queries and data integrity.",
          url: "https://www.postgresql.org/",
        },
      },
      {
        name: "MongoDB",
        details: {
          title: "MongoDB",
          desc: "Flexible NoSQL database perfect for rapidly evolving data structures.",
          url: "https://www.mongodb.com/",
        },
      },
      {
        name: "API Integration",
        details: {
          title: "API Integration",
          desc: "Connect to Stripe, Twilio, SendGrid, and third-party services your app needs.",
          url: "https://stripe.com/",
        },
      },
    ],
    cloud: [
      {
        name: "AWS",
        details: {
          title: "AWS",
          desc: "The world's most comprehensive cloud platform, offering unlimited scalability for mission-critical apps.",
          url: "https://aws.amazon.com/",
        },
      },
      {
        name: "Vercel",
        details: {
          title: "Vercel",
          desc: "Lightning-fast deployment platform optimized for Next.js and frontend apps.",
          url: "https://vercel.com/",
        },
      },
      {
        name: "Netlify",
        details: {
          title: "Netlify",
          desc: "Serverless hosting platform with CI/CD built-in for modern web applications.",
          url: "https://netlify.com/",
        },
      },
      {
        name: "Heroku",
        details: {
          title: "Heroku",
          desc: "Platform as a Service for rapid app deployment with minimal DevOps overhead.",
          url: "https://www.heroku.com/",
        },
      },
      {
        name: "Docker",
        details: {
          title: "Docker",
          desc: "Containerization standard ensuring your software runs consistently across environments.",
          url: "https://www.docker.com/",
        },
      },
      {
        name: "GitHub",
        details: {
          title: "GitHub",
          desc: "Version control and collaboration platform essential for team development.",
          url: "https://github.com/",
        },
      },
    ],
  };

  const [hovered, setHovered] = useState<{ cat: string; idx: number } | null>(
    null,
  );

  return (
    <section id="tech-stack" className="py-8 px-2 sm:px-6 md:py-10">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            The Tech Stack: The Right Tool for Your Vibe
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are experts in taking output from bleeding-edge Generative UI tools and transforming them into scalable production platforms.
          </p>
        </div>

        <Tabs defaultValue="ai" className="max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-5 w-full mb-12">
            <TabsTrigger value="ai">AI Accelerators</TabsTrigger>
            <TabsTrigger value="web">Web Platforms</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="cloud">Cloud/DevOps</TabsTrigger>
          </TabsList>

          {Object.entries(techCategories).map(([key, technologies]) => (
            <TabsContent key={key} value={key}>
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center p-2 sm:p-6 md:p-8">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => setHovered({ cat: key, idx: index })}
                    onMouseLeave={() => setHovered(null)}
                    className="relative"
                  >
                    <Badge
                      variant="secondary"
                      className={`px-6 py-3 text-base bg-card/80 text-foreground border border-border/40 transition-all duration-300 opacity-100 cursor-pointer ${
                        hovered && hovered.cat === key && hovered.idx === index
                          ? "scale-105 shadow-2xl z-30 border-sky-400"
                          : "hover:border-sky-400 hover:shadow-sky-blue"
                      }`}
                    >
                      {tech.name}
                    </Badge>
                    {/* Tooltip with pointer and richer content */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 mt-3 w-[320px] max-w-xs bg-background border border-border rounded-xl shadow-2xl p-5 text-sm text-muted-foreground font-sans transition-all duration-300 z-40 pointer-events-none flex flex-col items-center gap-2 ${
                        hovered && hovered.cat === key && hovered.idx === index
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      }`}
                      style={{
                        boxShadow: "0 8px 32px 0 rgba(0, 80, 180, 0.10)",
                      }}
                    >
                      <div className="w-8 h-8 flex items-center justify-center rounded-full bg-primary/10 mb-1">
                        <span className="text-primary text-lg font-bold">
                          {tech.name[0]}
                        </span>
                      </div>
                      <div className="text-base font-semibold text-primary mb-1 text-center">
                        {tech.details.title}
                      </div>
                      <div className="text-xs text-muted-foreground text-center mb-2">
                        {tech.details.desc}
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-background border-l border-t border-border rotate-45 z-10"></div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default TechStack;
