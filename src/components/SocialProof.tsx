import { Card } from "@/components/ui/card";
import { CheckCircle, Zap } from "lucide-react";

const SocialProof = () => {
  const cases = [
    {
      title: "Case A: The E-Commerce Pivot",
      vibe: "A user generated a custom sneaker customizer on Bolt.new.",
      block: "Couldn't integrate Stripe payments or save customer orders to a database.",
      fix: "We connected the AI frontend to a Shopify backend for secure checkout.",
      result: "Launched in 4 days; processed $5k in orders the first week.",
      icon: Zap,
    },
    {
      title: "Case B: The Internal Tool",
      vibe: "A manager prompted a sales tracking dashboard on Replit.",
      block: "Critical security issues; the database was exposed to the public web.",
      fix: "We migrated the logic to Bubble with proper privacy rules and role-based access. Secure and scalable.",
      result: "Now securely used by 20+ sales reps; saved the team 10 hours/week in manual data entry.",
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-10 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#192841" }}
          >
            Social Proof / Use Case Examples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real projects, real results. See how we've helped others turn AI prototypes into profitable products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => {
            const Icon = caseItem.icon;
            return (
              <Card
                key={index}
                className="p-8 border border-border/40 hover:shadow-sky-blue transition-all duration-300"
                style={{ background: "#F3F9FF" }}
              >
                <div className="mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6" style={{ color: "#8923cb" }} />
                  </div>
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: "#192841" }}
                  >
                    {caseItem.title}
                  </h3>
                </div>

                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-primary mb-1">The Vibe:</p>
                    <p>{caseItem.vibe}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-red-600 mb-1">The Block:</p>
                    <p>{caseItem.block}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-primary mb-1">The Fix:</p>
                    <p>{caseItem.fix}</p>
                  </div>
                  <div className="pt-4 border-t border-border/30">
                    <p className="font-bold text-lg" style={{ color: "#192841" }}>
                      ✨ The Result:
                    </p>
                    <p className="text-lg font-semibold text-primary mt-1">
                      {caseItem.result}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
