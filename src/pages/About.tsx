import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Banknote, CheckCircle, Heart, Shield } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import residentialDistrict from "@/assets/residential-district.webp";
import countrysideImage from "@/assets/about-us-countryside.webp";

const processSteps = [
  {
    icon: MessageCircle,
    title: "A Private Conversation",
    description:
      "A confidential, no-obligation chat about your situation and timeline.",
  },
  {
    icon: Banknote,
    title: "A Fair Cash Offer",
    description:
      "After due diligence (including a valuation and viewing), we provide a clear, transparent cash offer. No agent fees or hidden costs.",
  },
  {
    icon: CheckCircle,
    title: "A Streamlined Completion",
    description:
      "We handle everything. The property is sold 'as-is' – no repairs or staging. Completion can often be in 7 days to 8 weeks, depending on your circumstances.",
  },
];

const commitmentPrinciples = [
  {
    icon: Heart,
    title: "Compassionate Efficiency",
    description: "We ease the burden during tough transitions.",
  },
  {
    icon: Shield,
    title: "Utmost Honesty",
    description:
      "We act with fairness and transparency, encouraging you to seek independent advice.",
  },
];

const comparisonData = [
  {
    category: "Type of Sale",
    us: "Private, off-market sale.",
    agents: "Public, open-market sale.",
  },
  {
    category: "Buyer",
    us: "Pre-qualified cash buyers or institutional funds.",
    agents: "Any buyer (often requiring a mortgage).",
  },
  {
    category: "Speed",
    us: "Fast. Completion in as little as 7 days, typically within a few weeks.",
    agents: "Slow. Takes 3-6 months on average, dependent on a chain.",
  },
  {
    category: "Process",
    us: "Simple, direct 3-step process. No public viewings.",
    agents:
      "Complex: requires marketing, viewings, negotiations, and chain management.",
  },
  {
    category: "Fees & Costs",
    us: "No fees. You receive the agreed cash sum. No agent commission.",
    agents:
      "Agent commission (typically 1-3% + VAT). Seller often pays for EPC, staging, or repairs.",
  },
  {
    category: "Property Condition",
    us: "Sold 'as-is'. No need for cleaning, repairs, or decorating.",
    agents:
      "Often requires investment to make it 'market-ready' to attract buyers.",
  },
  {
    category: "Certainty",
    us: "Higher than a traditional sale. A cash-based process with no chain, helping minimise uncertainty and delay.",
    agents:
      "Low. Risk of buyer's mortgage falling through or a chain collapsing.",
  },
  {
    category: "Best For",
    us: "Urgent sales, probate, divorce, avoiding stress, or needing a quick, guaranteed exit.",
    agents:
      "Maximising price in a stable market, with time for viewings and negotiation.",
  },
  {
    category: "Control & Privacy",
    us: "High privacy. Discreet process with minimal public exposure.",
    agents:
      "Low privacy. Property is publicly advertised with frequent viewings.",
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
              A New Approach for Life's Transitions
            </p>
          </div>
        </div>
      </section>

      {/* Our Purpose with Image */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-6">
                Our Purpose
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                When facing a bereavement or divorce, you don't need a lengthy,
                public property sale. We offer a private, compassionate
                alternative. We connect homeowners in transition with prepared
                cash buyers. Our process avoids public viewings and market
                uncertainty, offering a respectful path to closure.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={residentialDistrict}
                alt="Residential neighbourhood"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Vision */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg order-2 lg:order-1">
              <img
                src={countrysideImage}
                alt="Peaceful countryside path"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-6">
                Our Founder's Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                The Next Chapter Homes started after seeing loved ones endure
                long, stressful sales during difficult times.
              </p>
              <blockquote className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed">
                "People needing to settle estates or finalise divorces were stuck
                for months, paying bills on an empty property. They needed a
                better way – one that prioritised resolution and peace."
              </blockquote>
              <p className="text-muted-foreground leading-relaxed mt-8">
                That vision drives us: making the practical side of moving on
                simpler and swifter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment with Process Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-4">
                Our Commitment
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                We have built trust through two principles:
              </p>
            </div>
            
            {/* All Tiles in One Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[...commitmentPrinciples, ...processSteps].map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 shadow-soft hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-xl text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-8 text-center">
              How We Compare
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              The Next Chapter Homes vs Estate Agents
            </p>
            <div className="bg-card border border-border rounded-xl shadow-soft overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-primary/5">
                    <TableHead className="font-serif font-semibold text-primary text-lg md:text-xl w-1/4 border-r border-border">
                      Criteria
                    </TableHead>
                    <TableHead className="font-serif font-semibold text-primary text-lg md:text-xl w-[37.5%] border-r border-border">
                      The Next Chapter Homes
                    </TableHead>
                    <TableHead className="font-serif font-semibold text-primary text-lg md:text-xl w-[37.5%]">
                      Estate Agents
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonData.map((row, index) => (
                    <TableRow
                      key={index}
                      className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}
                    >
                      <TableCell className="font-medium text-foreground border-r border-border">
                        {row.category}
                      </TableCell>
                      <TableCell className="text-foreground border-r border-border">
                        {row.us}
                      </TableCell>
                      <TableCell className="text-foreground">
                        {row.agents}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              Ready to Start Your Next Chapter?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're here to listen and help you find the right path forward.
              There's no pressure, no obligation—just a compassionate
              conversation.
            </p>
            <Link to="/#contact-form">
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
