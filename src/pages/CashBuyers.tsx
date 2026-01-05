import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Shield, Clock, MapPin, ArrowRight } from "lucide-react";

const requirements = [
  "Verified proof of funds",
  "Direct cash purchases only",
  "Completion within 4-8 weeks typical",
  "Confidentiality agreement required",
];

const buyerBenefits = [
  {
    icon: Shield,
    title: "Off-market access",
    description: "Properties not available on portals or public listings",
  },
  {
    icon: Clock,
    title: "Motivated sellers",
    description: "Sellers who are ready to proceed with genuine offers",
  },
  {
    icon: MapPin,
    title: "Targeted opportunities",
    description: "Matched to your specific buying criteria and locations",
  },
];

export default function CashBuyers() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    areas: "",
    budget: "",
    notes: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please confirm you agree to our terms.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Registration received",
      description: "We'll review your details and be in touch shortly.",
    });
  };

  if (isSubmitted) {
    return (
      <Layout>
        <section className="py-20 md:py-28">
          <div className="container">
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-10 h-10 text-success" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Registration received
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Thank you for registering. We'll review your details and be in
                touch to discuss potential opportunities that match your criteria.
              </p>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              Register as a cash buyer
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              Access off-market property opportunities through confidential
              introductions. We work with verified cash buyers who can complete
              quickly and discreetly.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {buyerBenefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Requirements */}
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">
                Buyer requirements
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                To maintain the integrity of our network and protect our sellers,
                we only work with buyers who meet the following criteria:
              </p>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-3 h-3 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border">
              <h3 className="text-xl font-serif text-primary mb-6">
                Register your interest
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Full name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (if applicable)</Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="areas">Target areas *</Label>
                    <Input
                      id="areas"
                      name="areas"
                      value={formData.areas}
                      onChange={handleChange}
                      required
                      placeholder="e.g. London, SE England"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget range *</Label>
                    <Input
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      required
                      placeholder="e.g. £200k-£500k"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes">Additional notes</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Property types, specific requirements..."
                    rows={3}
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-input text-accent focus:ring-accent"
                  />
                  <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                    I confirm I am a genuine cash buyer and agree to provide
                    proof of funds upon request.
                  </Label>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Register as a buyer"}
                  {!isSubmitting && <ArrowRight className="ml-2" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
