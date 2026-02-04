import React from "react";
import { AlertCircle } from "lucide-react";

const Problem = () => {
  const issues = [
    {
      icon: "�",
      title: "The database isn't connecting properly.",
    },
    {
      icon: "💳",
      title: "The payment gateway is throwing errors you don't understand.",
    },
    {
      icon: "⚠️",
      title: "You're staring at raw code files, afraid to touch them lest the whole thing breaks.",
    },
    {
      icon: "🚧",
      title: "The prototype works in the browser, but you don't know how to deploy it.",
    },
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#192841" }}
          >
            The Problem: "The 80% Trap"
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Does this sound familiar? You spent the weekend on Bolt.new, v0, or Lovable, typing prompts and watching magic happen. You have a beautiful UI and a working concept. But now?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {issues.map((issue, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-[#F3F9FF] border border-border/40 rounded-lg hover:shadow-sky-blue transition-all duration-300"
            >
              <div className="text-2xl flex-shrink-0">{issue.icon}</div>
              <p className="text-lg text-muted-foreground">{issue.title}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-[#F3F9FF] border border-border/40 p-8 rounded-lg mt-10">
            <p className="text-lg text-muted-foreground text-center">
              <strong>The Reality:</strong> AI is an incredible architect, but it's not a finishing carpenter. You've successfully "Vibe Coded" a prototype, but you need a partner to cross the finish line into a scalable business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
