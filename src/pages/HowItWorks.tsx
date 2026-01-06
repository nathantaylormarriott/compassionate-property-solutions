import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import pineForestBg from "@/assets/pineforest.webp";

const steps = [
  {
    number: "1",
    title: "A Listening Ear First",
    description:
      "We start with a private, no-obligation conversation to truly understand your unique situation, timeline, and needs. Whether you're dealing with bereavement, divorce, or another life change, we listen first. There is no rush, no script. This is your journey.",
    details: [
      "No pressure, no obligation",
      "Understand your timeline and needs",
      "Explain how our process works",
      "Answer all your questions with patience",
    ],
  },
  {
    number: "2",
    title: "Your Personalised Path",
    description:
      "We explain every option clearly—from a traditional sale to a discreet, guided sale—and help you choose what brings the most peace and meets your practical needs. You are always in control.",
    details: [
      "Clear explanation of all options",
      "No confusing jargon or pressure",
      "Help you choose what's right for you",
      "Respect your decision, whatever it is",
    ],
  },
  {
    number: "3",
    title: "Private Introductions",
    description:
      "Using our network of vetted buyers, we identify those whose criteria match your property. We never share your details publicly or list on any portals. Your privacy is sacred.",
    details: [
      "Match with suitable private buyers",
      "No public marketing or listings",
      "Your details remain confidential",
      "Only serious buyers are considered",
    ],
  },
  {
    number: "4",
    title: "We Carry the Burden",
    description:
      "Once you decide to proceed, our dedicated team handles everything: from coordinating with your solicitors or ours and navigating paperwork to managing the home's condition. We are your single point of contact throughout.",
    details: [
      "Coordinate with your solicitors or ours",
      "Regular progress updates",
      "Handle all the details",
      "Guide you calmly to completion",
    ],
  },
];

export default function HowItWorks() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 -mt-20 pt-28 md:pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              Built on Patience, Clarity, and Respect
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              A calm, structured process designed to take the burdens off your
              shoulders during a difficult time. We guide you through each step
              with care, never rushing, always listening.
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
                    <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-sans font-bold text-xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="md:hidden text-2xl font-sans font-bold text-accent">
                        {step.number}
                      </span>
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
                          <li
                            key={detail}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
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

      {/* Swift Sale Section */}
      <section className="relative py-16 md:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${pineForestBg})` }}
        >
          <div className="absolute inset-0 bg-primary/85" />
        </div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary-foreground mb-4">
              For Those Needing a Swift Sale
            </h2>
            <p className="text-xl md:text-2xl font-serif font-medium text-primary-foreground/90 mb-8">
              A Direct Path to Completion, Not Just a Viewing
            </p>

            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-6">
              We exclusively connect you with verified cash buyers.
            </p>

            <p className="text-primary-foreground/80 leading-relaxed mb-10">
              When time is of the essence—whether due to probate deadlines, divorce settlements, or simply the need for closure—the traditional property market moves too slowly. Public viewings, buyer financing delays, and lengthy chains can add months of uncertainty.
            </p>

            <div className="bg-white/10 rounded-xl p-6 md:p-8 border border-white/20">
              <h3 className="text-xl font-serif text-primary-foreground mb-4">
                Our Realistic Timeline:
              </h3>
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                Our goal, and our consistent track record, is to facilitate a completion between 7 days and 8 weeks from your accepted offer. We coordinate all legal and financial processes efficiently to make this possible.
              </p>
              <p className="text-primary-foreground/70 text-sm leading-relaxed italic">
                Please note: While this is our clear aim, it is not a guaranteed promise. The exact timeline can be influenced by legal complexities inherent to your situation, such as probate validation or transfer of equity. We will, however, manage every aspect to proceed as swiftly as the circumstances allow, keeping you clearly informed at each stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              Start Your Next Chapter
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Start with a confidential conversation. There's no obligation,
              just an opportunity to explore your options with someone who truly
              listens.
            </p>
            <Link to="/contact">
              <Button size="lg">
                Begin a Conversation
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}