import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, Shield, Calendar, HandHeart } from "lucide-react";

const highlights = [
  {
    title: "Discreet, private introductions",
    description:
      "Avoid public listings and viewings. Introduce your home only to vetted buyers who match your needs.",
    icon: Shield,
  },
  {
    title: "A timeline that suits you",
    description:
      "Move at your pace. Whether you need time or need certainty, the process is designed around your situation.",
    icon: Calendar,
  },
  {
    title: "Support that carries the burden",
    description:
      "From coordinating paperwork to handling practical details, the aim is to remove stress and keep everything clear.",
    icon: HandHeart,
  },
];

const whatToExpect = [
  "A confidential conversation to understand your circumstances",
  "Clear options explained without jargon or pressure",
  "A single point of contact from start to finish",
  "Regular updates and a calm, predictable process",
];

export default function SellProperty() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              Sell with clarity, privacy, and care
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              If selling a property feels overwhelming right now, this is a calm
              place to start. Explore a guided, discreet sale designed for life
              transitions—without pressure.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Begin a Conversation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                A different kind of sale
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                The process is built around dignity and simplicity—protecting
                your privacy and reducing the practical burden.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {highlights.map((item) => (
                <Card key={item.title} className="p-6 shadow-soft border border-border">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-serif text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                What to expect
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Start with a private conversation. From there, the next steps
                stay clear and manageable, with support at every stage.
              </p>
            </div>

            <Card className="p-8 shadow-card border border-border">
              <ul className="space-y-4">
                {whatToExpect.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link to="/contact">
                  <Button className="w-full" size="lg">
                    Ask a question confidentially
                    <ArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>

              <p className="text-center text-sm text-muted-foreground mt-4">
                No obligation. No pressure. Just clarity.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}

