import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle } from "lucide-react";


import React, { useState } from "react";

const ContactForm = ({ onlyForm = false }: { onlyForm?: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    aiTool: "",
    projectType: "",
    details: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);
    // Basic validation
    if (!formData.name || !formData.email || !formData.aiTool || !formData.projectType || !formData.details) {
      setError("Please fill in all required fields.");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.details,
          company: formData.company,
          aiTool: formData.aiTool,
          projectType: formData.projectType,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to book your launch plan.");
      }
      setSuccess(true);
      setFormData({ name: "", email: "", company: "", aiTool: "", projectType: "", details: "" });
    } catch (err: any) {
      setError(err.message || "Failed to book your launch plan.");
    } finally {
      setLoading(false);
    }
  };

  const form = (
    <form className="space-y-6 p-8 bg-white rounded-2xl shadow-none border-none" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="space-y-2">
    <label htmlFor="name" className="text-sm font-medium">
      Full Name *
    </label>
    <Input
      id="name"
      placeholder="John Doe"
      required
      value={formData.name}
      onChange={handleChange}
    />
  </div>

  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Work Email *
    </label>
    <Input
      id="email"
      type="email"
      placeholder="john@company.com"
      required
      value={formData.email}
      onChange={handleChange}
    />
  </div>
</div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium">
          Company Name
        </label>
        <Input id="company" placeholder="Your Company" value={formData.company} onChange={handleChange} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="aiTool" className="text-sm font-medium">
            AI Tool You Used *
          </label>
          <select
            id="aiTool"
            required
            value={formData.aiTool}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Tool</option>
            <option value="Bolt.new">Bolt.new</option>
            <option value="v0">Vercel v0</option>
            <option value="Lovable">Lovable</option>
            <option value="Replit">Replit</option>
            <option value="Cursor">Cursor</option>
            <option value="Windsurf">Windsurf</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="projectType" className="text-sm font-medium">
            What Do You Need? *
          </label>
          <select
            id="projectType"
            required
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select Option</option>
            <option value="Debug Code">Debug AI-Generated Code</option>
            <option value="Productionize">Productionize Prototype</option>
            <option value="Full Build">Full App Build</option>
            <option value="Consultation">Consultation</option>
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-medium">
          Additional Details
        </label>
        <Textarea
          id="details"
          placeholder="Tell us about your prototype, what's working, and what needs fixing..."
          className="min-h-[120px]"
          required
          value={formData.details}
          onChange={handleChange}
        />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      {success && <div className="text-green-600 text-sm">Message sent successfully!</div>}
      <Button
        type="submit"
        size="lg"
        className="w-full hover:bg-sky-400 hover:shadow-sky-blue bg-[#192841] text-white text-base font-semibold rounded-lg"
        disabled={loading}
      >
        {loading ? "Scheduling..." : "Get My Launch Plan"}
      </Button>
    </form>
  );
  if (onlyForm) return form;
  return (
    <section id="contact" className="py-10 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stop Prompting, Start Selling
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't let your great idea die in a chat window. Let's look at what you've built and map out the finish line.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">What happens next?</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Code Review</h4>
                  <p className="text-muted-foreground">
                    We analyze your AI-generated prototype and identify issues
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Roadmap Session</h4>
                  <p className="text-muted-foreground">
                    15-minute call to map out your path from prototype to production
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Clear Timeline</h4>
                  <p className="text-muted-foreground">
                   Exact breakdown of what needs fixing, building, and deploying
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-lg">Next Steps</h4>
                  <p className="text-muted-foreground">
                   Clear pricing and options to move forward (or not)
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Right Side - Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-lg">
            {form}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
