import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Can you work with AI-generated code?",
      answer:
        "Absolutely. That's our specialty. We fix bugs in AI code, bridge the gaps that prompts can't fill, and productionize prototypes. We respect AI as a tool and know how to take the best of it and make it bulletproof.",
    },
    {
      question: "How fast can you really move?",
      answer:
        "We aim for days, not months. By leveraging the same AI generation tools you do, plus real engineering expertise, we can build and deploy working products in a fraction of traditional timelines. Scope and complexity matter, but speed is our superpower.",
    },
    {
      question: "Do I have to use your tech stack?",
      answer:
        "Not at all. We work with whatever your AI tool generated (Bolt, v0, Lovable, Replit) and scale it using industry-standard stacks. If it exports code, we can productionize it. Platform flexibility is built into our process.",
    },
    {
      question: "What if I need ongoing support after launch?",
      answer:
        "We're not disappearing after launch. We can stay involved as much or as little as you need. We hand you the code and full ownership, but we're available for consultation, updates, or full-time support if that's what makes sense for your business.",
    },
    {
      question: "Do I own the code I'm paying for?",
      answer:
        "Yes, 100%. You own everything. The code, the IP, the final product. Once we deliver, it's yours to modify, deploy, sell, or even hire someone else to maintain. We don't lock you in or hold your code hostage.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const FAQCard = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => (
    <div
      className="border border-border rounded-lg overflow-hidden transition-all duration-200 hover:border-primary/50"
    >
      <button
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-muted/30 transition-colors"
        onClick={() => toggleFAQ(index)}
      >
        <h3 className="text-lg font-semibold text-left text-primary">
          {faq.question}
        </h3>
        <ChevronDown
          className={`h-5 w-5 text-primary transition-transform duration-200 flex-shrink-0 ml-4 ${
            openIndex === index ? "transform rotate-180" : ""
          }`}
        />
      </button>
      {openIndex === index && (
        <div className="px-6 py-4 bg-muted/20 border-t border-border">
          <p className="text-base text-muted-foreground leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <section id="faq" className="py-10 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#192841" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Get answers to common questions about our Prompt-to-Product services.
          </p>
        </div>

        {/* Grid layout: 2-2-1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Left Column - 2 FAQs */}
          <div className="space-y-6">
            <FAQCard faq={faqs[0]} index={0} />
            <FAQCard faq={faqs[1]} index={1} />
          </div>

          {/* Right Column - 2 FAQs */}
          <div className="space-y-6">
            <FAQCard faq={faqs[2]} index={2} />
            <FAQCard faq={faqs[3]} index={3} />
          </div>
        </div>

        {/* Bottom Center - 1 FAQ */}
        <div className="max-w-2xl mx-auto">
          <FAQCard faq={faqs[4]} index={4} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
