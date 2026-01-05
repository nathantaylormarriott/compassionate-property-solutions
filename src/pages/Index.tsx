import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { Shield, Users, Eye, Lock, Heart, Scale, MessageCircle, Handshake, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const trustFeatures = [
  { icon: Lock, label: "Off-market only" },
  { icon: Users, label: "Cash buyers" },
  { icon: Eye, label: "No open viewings" },
  { icon: Shield, label: "Confidential introductions" },
];

const steps = [
  {
    number: "01",
    title: "Confidential conversation",
    description: "We listen, understand your situation, and explain options clearly.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Private matching",
    description: "We match your property with suitable cash buyers from our network.",
    icon: Users,
  },
  {
    number: "03",
    title: "Introductions",
    description: "We introduce both parties and support discussions where needed.",
    icon: Handshake,
  },
  {
    number: "04",
    title: "Progression support",
    description: "We help maintain momentum through solicitors to completion.",
    icon: CheckCircle2,
  },
];

const whatWeDoBullets = [
  "Source and introduce vetted cash buyers",
  "No public listings or portals",
  "Minimal viewings",
  "Clear communication throughout",
  "Sensitive, respectful handling",
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/60" />
        </div>

        <div className="container relative z-10 py-20">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6 text-balance">
              Selling a property during a life transition doesn't have to be stressful.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed mb-8 max-w-xl">
              We specialise in discreet, off-market home sales for people navigating
              bereavement or divorce — connecting you with serious cash buyers,
              privately and professionally.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/sell">
                <Button variant="hero" size="lg">
                  Request a confidential conversation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="hero-outline" size="lg">
                  Learn how it works
                </Button>
              </Link>
            </div>

            <p className="text-primary-foreground/60 text-sm italic">
              Private. Respectful. No obligation.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-card border-y border-border py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {trustFeatures.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-3 justify-center"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-foreground font-medium text-sm md:text-base">
                  {feature.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              Who we help
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We work with people navigating significant life changes, offering
              a calm and respectful approach to property sales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Bereavement Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">
                Bereavement
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Handling a property after a loss can feel overwhelming. We offer
                a calm, respectful way to sell without public listings or
                unnecessary disruption.
              </p>
            </div>

            {/* Divorce Card */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border hover:shadow-lg transition-shadow duration-300">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Scale className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-4">
                Divorce / Separation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                When privacy matters, we provide discreet introductions to cash
                buyers, helping both parties move forward with clarity and
                dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-6">
                  A quieter way to sell.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  We connect property owners with vetted cash buyers through
                  private, off-market introductions — no portals, no public
                  listings, no disruption.
                </p>
              </div>

              <div className="space-y-4">
                {whatWeDoBullets.map((bullet, index) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-0.5 flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <span className="text-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary mb-4">
              How it works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A simple, supportive process designed around your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                <div className="bg-card rounded-2xl p-6 h-full border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-serif font-bold text-accent/30">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 border-t border-dashed border-secondary" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-6">
              Not sure if now is the right time?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              If you're unsure whether now is the right time, we're happy to
              talk it through. There's no pressure, no obligation — just an
              honest conversation.
            </p>
            <Link to="/sell">
              <Button
                variant="hero-outline"
                size="lg"
                className="border-primary-foreground/40 hover:border-primary-foreground"
              >
                Speak with us confidentially
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
