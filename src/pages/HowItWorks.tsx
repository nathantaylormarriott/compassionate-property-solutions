import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Handshake, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Confidential conversation",
    description:
      "We start with a private, no-obligation conversation to understand your situation. Whether you're dealing with bereavement, divorce, or another life change, we listen first and explain your options clearly.",
    icon: MessageCircle,
    details: [
      "No pressure, no obligation",
      "Understand your timeline and needs",
      "Explain how our process works",
      "Answer all your questions",
    ],
  },
  {
    number: "02",
    title: "Private matching",
    description:
      "Using our network of vetted cash buyers, we identify those whose criteria match your property. We never share your details publicly or list on any portals.",
    icon: Users,
    details: [
      "Match with suitable cash buyers",
      "No public marketing or listings",
      "Your details remain confidential",
      "Only serious buyers are considered",
    ],
  },
  {
    number: "03",
    title: "Introductions",
    description:
      "We facilitate confidential introductions between you and interested buyers. We're there to support discussions and ensure both parties are comfortable.",
    icon: Handshake,
    details: [
      "Managed introductions only",
      "Support during negotiations",
      "Keep both parties informed",
      "Handle any concerns sensitively",
    ],
  },
  {
    number: "04",
    title: "Progression support",
    description:
      "Once terms are agreed, we help maintain momentum through to completion. We work with solicitors and all parties to ensure a smooth process.",
    icon: CheckCircle2,
    details: [
      "Coordinate with solicitors",
      "Regular progress updates",
      "Problem-solving support",
      "Guide you to completion",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              How it works
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              A calm, structured process designed to take the stress out of
              selling during a difficult time. We guide you through each step
              with care and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-24 bottom-0 w-px bg-border hidden md:block" />
                )}

                <div className="flex gap-8 mb-16">
                  {/* Step number */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-serif font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="md:hidden text-2xl font-serif font-bold text-accent">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <step.icon className="w-5 h-5 text-accent" />
                      </div>
                      <h2 className="text-2xl font-serif text-primary">
                        {step.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                      {step.description}
                    </p>

                    <div className="bg-muted/50 rounded-xl p-6">
                      <h4 className="font-medium text-foreground mb-4 text-sm uppercase tracking-wider">
                        What to expect
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              Ready to take the first step?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Start with a confidential conversation. There's no obligation,
              just an opportunity to explore your options.
            </p>
            <Link to="/sell">
              <Button size="lg">
                Request a confidential conversation
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
