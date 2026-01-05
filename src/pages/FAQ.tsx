import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What does 'off-market' mean?",
    answer:
      "Off-market means your property is never listed on property portals like Rightmove or Zoopla, and there's no 'For Sale' board. We introduce your property directly to vetted cash buyers through our private network, ensuring complete discretion.",
  },
  {
    question: "How is this different from a traditional estate agent?",
    answer:
      "Traditional agents market properties publicly and often to anyone who enquires. We work exclusively with verified cash buyers and make confidential introductions only. There are no open viewings, no public listings, and minimal disruption to your life.",
  },
  {
    question: "What fees do you charge?",
    answer:
      "We discuss fees openly during our initial conversation, as they depend on your specific circumstances. There are no upfront costs, and you're under no obligation until you decide to proceed.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Because we work with cash buyers, completions can happen much faster than traditional sales — typically 4-8 weeks from accepting an offer. However, we work to your timeline and can accommodate longer timeframes if needed.",
  },
  {
    question: "Do I have to proceed if I make an enquiry?",
    answer:
      "Absolutely not. An initial conversation is completely without obligation. We understand you may be exploring options, and we're here to help you understand what's possible without any pressure.",
  },
  {
    question: "How do you vet your cash buyers?",
    answer:
      "All buyers in our network provide verified proof of funds before we make any introductions. We only work with serious buyers who can demonstrate their ability to complete purchases quickly and without complications.",
  },
  {
    question: "Can you help with properties that need work?",
    answer:
      "Yes. Many of our cash buyers actively seek properties that need refurbishment. This can be particularly helpful if you're dealing with a property that's been empty or needs significant work.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We work across England and Wales, with particularly strong networks in London, the South East, and major cities. Please get in touch to discuss your specific location.",
  },
  {
    question: "I'm a solicitor or professional advisor. Can we work together?",
    answer:
      "We welcome referrals from solicitors, financial advisors, and other professionals who have clients needing discreet property sales. Please contact us to discuss how we can support your clients.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              Frequently asked questions
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              Find answers to common questions about our service. If you can't
              find what you're looking for, please don't hesitate to get in touch.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border px-6 shadow-soft"
                >
                  <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-primary mb-4">
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're happy to answer any questions you may have. Get in touch
              for a confidential conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact us
                </Button>
              </Link>
              <Link to="/sell">
                <Button size="lg">
                  Start a conversation
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
