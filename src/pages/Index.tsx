import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Heart, Shield, Home, Ear, Compass, HandHeart, ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const processSteps = [
  {
    icon: Ear,
    title: "A Listening Ear First",
    description:
      "We start by truly understanding your unique situation, timeline, and needs. There is no rush, no script. This is your journey.",
  },
  {
    icon: Compass,
    title: "Your Personalized Path",
    description:
      "We explain every option clearly—from a traditional sale to a simplified, guaranteed purchase—and help you choose what brings the most peace.",
  },
  {
    icon: HandHeart,
    title: "We Carry the Burden",
    description:
      "Once you decide, our dedicated team handles everything: from coordinating with solicitors and navigating paperwork to managing the home's condition.",
  },
];

const faqPreview = [
  {
    question: "I'm not ready to make any decisions. Is that okay?",
    answer:
      "Absolutely. This consultation is simply to provide information and answer questions. We will never pressure you. You decide when, or if, you're ready to take the next step.",
  },
  {
    question: "How do you handle families who may disagree on the sale?",
    answer:
      "With sensitivity and neutrality. We facilitate clear communication between all parties, providing objective information to help find common ground and reduce conflict.",
  },
  {
    question: "The house needs repairs and clearing out. Can you help with that?",
    answer:
      "Yes. We can coordinate every detail, from minor repairs to full clearouts, working with vetted, respectful partners. You don't have to lift a finger.",
  },
];

const situations = [
  { value: "bereavement", label: "Loss of a loved one" },
  { value: "divorce", label: "Divorce / Separation" },
  { value: "estate", label: "Estate / Probate" },
  { value: "exploring", label: "Just beginning to look" },
];

export default function Index() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    situation: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", situation: "" });
    toast({
      title: "Thank you",
      description: "We'll be in touch with a compassionate callback soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
              Facing the Sale of a Home After Loss or Divorce?
            </h1>
            <p className="text-2xl md:text-3xl font-serif text-primary-foreground/90 leading-snug mb-6">
              You Don't Have to Navigate This Alone.
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-xl">
              We provide compassionate, step-by-step guidance to handle the
              practical burdens of selling a home, so you can focus on what
              matters most: healing, family, and moving forward.
            </p>

            <div className="mb-4">
              <Link to="/sell">
                <Button variant="hero" size="lg">
                  Begin with a Caring Conversation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <p className="text-primary-foreground/60 text-sm italic">
              Completely confidential. No pressure, ever.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: We Understand the Weight You Carry */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6 leading-tight">
                  This Is More Than Just a Property Sale
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Selling a home during a divorce or after the loss of a loved
                  one isn't a simple transaction. It's layered with emotion,
                  complex decisions, and memories. The legal forms, the constant
                  calls, the sheer volume of it all can feel overwhelming on top
                  of everything else you're managing.
                </p>
                <p className="text-foreground leading-relaxed">
                  Our role isn't to be just another company. We are specialists
                  who provide a calm, clear path forward—handling the logistics
                  with care and respect, so you don't have to.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-3">
                      <Home className="w-7 h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground">Home</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-3">
                      <Heart className="w-7 h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground">Care</span>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-3">
                      <Shield className="w-7 h-7 text-accent" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm text-muted-foreground">Protection</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: A Different Kind of Process */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Built on Patience, Clarity, and Respect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A different kind of process, designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <step.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                See How Our Process Works
                <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: FAQ Preview */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Common Concerns, Gentle Guidance
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your questions, answered with compassion.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            {faqPreview.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border"
              >
                <h3 className="font-serif text-lg text-primary mb-3">
                  "{faq.question}"
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                Read More Gentle Guidance
                <ChevronRight className="ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-4">
                Ready for a Lighter Burden?
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Let's have a brief, confidential conversation. We can outline
                your options and answer your specific questions. There is no
                cost, no obligation—just clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Option 1: Button */}
              <div className="bg-primary-foreground/10 rounded-2xl p-8 text-center">
                <h3 className="font-serif text-xl text-primary-foreground mb-4">
                  Prefer to schedule a time?
                </h3>
                <p className="text-primary-foreground/70 mb-6 text-sm">
                  Book a quiet, unhurried conversation at a time that suits you.
                </p>
                <Link to="/contact">
                  <Button
                    variant="hero-outline"
                    size="lg"
                    className="border-primary-foreground/40 hover:border-primary-foreground"
                  >
                    Schedule a Quiet Talk
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>

              {/* Option 2: Simple Form */}
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-serif text-xl text-primary mb-4">
                  Request a Compassionate Callback
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">
                      Your name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email address
                    </Label>
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
                    <Label htmlFor="situation" className="text-sm">
                      I am exploring options related to...
                    </Label>
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
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Request a Compassionate Callback"}
                  </Button>
                </form>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Your privacy is sacred. This conversation is 100% confidential.
                  <br />
                  We are here to listen and inform, not to sell.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
