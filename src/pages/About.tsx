import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "We understand that selling a home during a life transition is deeply personal. Every interaction is guided by empathy and care.",
  },
  {
    icon: Shield,
    title: "Complete Discretion",
    description:
      "Your privacy is paramount. We handle every aspect of the process with the utmost confidentiality and respect.",
  },
  {
    icon: Users,
    title: "Trusted Guidance",
    description:
      "We're not just facilitators—we're your advocates, ensuring you're supported and informed at every step.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 -mt-20 pt-28 md:pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              About Us
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              We help people navigate property sales during life's most
              challenging transitions—with patience, clarity, and respect.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                The Next Chapter Homes was founded with a simple belief: that
                selling a property during a difficult life transition shouldn't
                add to your burden—it should help lift it.
              </p>
              <p>
                Whether you're navigating bereavement, divorce, or another
                significant life change, the traditional property market often
                moves too slowly, demands too much attention, and offers too
                little certainty.
              </p>
              <p>
                We created a different path. One that prioritises your peace of
                mind over profit margins. One that handles the complexities so
                you can focus on what truly matters—moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              What Guides Us
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our values shape every conversation and decision we make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 shadow-soft border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <value.icon
                    className="w-7 h-7 text-accent"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">
              Our Approach
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                We exclusively connect you with verified cash buyers from our
                private network. There are no public listings, no open
                viewings, and no 'For Sale' boards. Your sale remains entirely
                confidential.
              </p>
              <p>
                Our goal is to facilitate completions between 7 days and 8
                weeks from your accepted offer—significantly faster than the
                traditional market. We coordinate all legal and financial
                processes efficiently, keeping you informed at every stage.
              </p>
              <p>
                Most importantly, there's never any pressure. You decide when,
                or if, you're ready to proceed. We're here to guide, not to
                push.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-primary-foreground mb-4">
              Ready to start a conversation?
            </h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              We're here to listen and help you understand your options. No
              obligation, no pressure—just compassionate guidance.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
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
