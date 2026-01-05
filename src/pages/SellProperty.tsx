import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, Eye, Users, Clock, HandHeart, ArrowRight } from "lucide-react";

const benefits = [
  { icon: Eye, text: "No public marketing" },
  { icon: Users, text: "Fewer viewings" },
  { icon: HandHeart, text: "Compassionate handling" },
  { icon: Clock, text: "Your timeline, not ours" },
  { icon: CheckCircle2, text: "Complete confidentiality" },
];

const situations = [
  { value: "bereavement", label: "Loss of a loved one" },
  { value: "divorce", label: "Divorce / Separation" },
  { value: "estate", label: "Estate / Probate" },
  { value: "exploring", label: "Just beginning to look" },
];

export default function SellProperty() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    situation: "",
    timeframe: "",
    notes: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        description: "Please confirm you agree to be contacted.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Thank you",
      description: "We'll be in touch with a compassionate callback soon.",
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
                Thank you for reaching out
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                We've received your enquiry and will be in touch with a
                compassionate callback within 24 hours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We understand the sensitivity of your situation and will handle
                your request with the care and respect it deserves. There is no
                pressure, no obligation—just a listening ear.
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
              Begin with a Caring Conversation
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mb-4">
              Selling a home during a divorce or after the loss of a loved one
              isn't a simple transaction. It's layered with emotion, complex
              decisions, and memories.
            </p>
            <p className="text-primary-foreground/70 leading-relaxed max-w-2xl">
              We're here to listen first, understand your unique situation, and
              explain your options clearly. There is no rush, no pressure, no
              obligation—just a calm, supportive conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 border-b border-border">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center">
            Built on Patience, Clarity, and Respect
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-3">
                  <benefit.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm text-foreground font-medium">
                  {benefit.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                Request a Compassionate Callback
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Complete the form below and we'll be in touch within 24 hours.
                Your privacy is sacred—this conversation is completely
                confidential.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email address *</Label>
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postcode">Property postcode *</Label>
                  <Input
                    id="postcode"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleChange}
                    required
                    placeholder="e.g. SW1A 1AA"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="situation">I am exploring options related to... *</Label>
                  <select
                    id="situation"
                    name="situation"
                    value={formData.situation}
                    onChange={handleChange}
                    required
                    className="flex h-11 w-full rounded-lg border border-input bg-card px-4 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                  >
                    <option value="">Select your situation</option>
                    {situations.map((s) => (
                      <option key={s.value} value={s.value}>
                        {s.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timeframe">Your preferred timeline</Label>
                  <Input
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleChange}
                    placeholder="e.g. No rush, or within 3 months"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="notes">Anything else you'd like us to know?</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share whatever feels comfortable. There are no wrong answers..."
                  rows={4}
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
                  I understand this is a confidential enquiry and agree to be
                  contacted regarding my request. There is no obligation to
                  proceed.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Request a Compassionate Callback"}
                {!isSubmitting && <ArrowRight className="ml-2" />}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Your privacy is sacred. We are here to listen and inform, not to sell.
              </p>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
