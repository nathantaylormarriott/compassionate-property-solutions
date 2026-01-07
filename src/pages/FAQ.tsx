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
import faqBackground from "@/assets/faq-background.webp";

const faqs = [
  {
    question: "I'm not ready to make any decisions. Is that okay?",
    answer:
      "Absolutely. This consultation is simply to provide information and answer questions. We will never pressure you. You decide when, or if, you're ready to take the next step.",
  },
  {
    question: "I'm worried about accepting an undervalued offer. How do you protect me?",
    answer:
      "We share clear market context, explain each offer in plain terms, and help you weigh what matters most. You stay in control at every stage.",
  },
  {
    question: "The house needs repairs and clearing out. Can you help with that?",
    answer:
      "Yes. We can arrange for the buyer to handle repairs and clear-outs, so you don't need to manage works or organise contractors.",
  },
  {
    question: "The process feels complicated. Will you simplify it for me?",
    answer:
      "Yes. We break everything down into calm, manageable steps and handle the paperwork, so you always know what's happening.",
  },
  {
    question: "What does 'off-market' mean?",
    answer:
      "Off-market means your property is never listed on portals like Rightmove or Zoopla, and there's no 'For Sale' board. We introduce your property directly to vetted buyers through our private network, ensuring complete discretion.",
  },
  {
    question: "How is this different from a traditional estate agent?",
    answer:
      "Traditional agents market properties publicly and often to anyone who enquires. We make confidential introductions to vetted private buyers only. There are no open viewings, no public listings, and minimal disruption to your life during an already difficult time.",
  },
  {
    question: "What fees do you charge?",
    answer:
      "We discuss fees openly during our initial conversation, as they depend on your specific circumstances. There are no upfront costs, and you're under no obligation until you decide to proceed. Transparency is important to us.",
  },
  {
    question: "How long does the process take?",
    answer:
      "Completions can happen much faster than traditional sales — often 7 days to 8 weeks in most instances. However, we work to your timeline and can accommodate longer timeframes if you need more time. There is no rush.",
  },
  {
    question: "Do I have to proceed if I make an enquiry?",
    answer:
      "Absolutely not. An initial conversation is completely without obligation. We understand you may be exploring options, and we're here to help you understand what's possible without any pressure. You decide when, or if, you're ready.",
  },
  {
    question: "How do you vet potential buyers?",
    answer:
      "All buyers in our network provide verified proof of funds before we make any introductions. We only work with serious buyers who can demonstrate their ability to complete without complications.",
  },
];

export default function FAQ() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24 -mt-20 pt-28 md:pt-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-foreground mb-6 animate-fade-in-up">
              Common Concerns
            </h1>
            <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl">
              Your questions, answered with compassion. If you can't find what
              you're looking for, please don't hesitate to get in touch—we're
              here to listen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed opacity-[0.12]"
          style={{ backgroundImage: `url(${faqBackground})` }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
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
              We're happy to answer any questions you may have. There's no
              pressure, no obligation—just a compassionate conversation.
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
