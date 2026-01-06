import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { Ear, Compass, HandHeart, ArrowRight, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";
import propertyStaircase from "@/assets/This Is More Than Just a Property Sale tile.jpg";
import patienceBackground from "@/assets/section background.jpg";
import faqNotReady from "@/assets/faq-not-ready.webp";
import faqUndervalued from "@/assets/faq-undervalued.webp";
import faqRepairs from "@/assets/faq-repairs.webp";
import faqComplicated from "@/assets/faq-complicated.webp";
import faqTimeline from "@/assets/faq-timeline.webp";
import faqBackground from "@/assets/faq-background.webp";
const processSteps = [
  {
    icon: Ear,
    title: "A Listening Ear First",
    description:
      "We start by truly understanding your unique situation, timeline, and needs. There is no rush, no script. This is your journey.",
  },
  {
    icon: Compass,
    title: "Your Personalised Path",
    description:
      "We explain every option clearly from a traditional sale to a discreet, guided sale and provide clarity where you need it most.",
  },
  {
    icon: HandHeart,
    title: "We Carry the Burden",
    description:
      "Once you decide, we take care of the process around the sale, helping navigate paperwork, and ensuring you're supported and informed at every stage.",
  },
];

const faqPreview = [
  {
    question: "I'm not ready to make any decisions. Is that okay?",
    answer:
      "Absolutely. This consultation is simply to provide information and answer questions. We will never pressure you. You decide when, or if, you're ready to take the next step.",
    image: faqNotReady,
  },
  {
    question: "I'm worried about accepting an undervalued offer. How do you protect me?",
    answer:
      "We believe in clarity from the outset. Our offers are typically around 80% of current market value, reflecting the certainty, speed, and simplicity of the process.\n\nTraditional estate agents often price homes optimistically, which can lead to extended time on the market, reductions, and ongoing costs. Fees are commonly around 3% plus VAT — on a £300,000 property, this can amount to £10,000–£15,000, before accounting for time and other overheads.",
    image: faqUndervalued,
  },
  {
    question: "The house needs repairs and clearing out. Can you help with that?",
    answer:
      "Yes. We can arrange for the buyer to handle repairs and clear-outs, so you don't need to manage works or organise contractors.",
    image: faqRepairs,
  },
  {
    question: "The process sounds complicated. Will you simplify it for me?",
    answer:
      "Yes. We break everything down into calm, manageable steps and take care of the paperwork, so you always know what's happening.",
    image: faqComplicated,
  },
  {
    question: "How quickly can things move if I need a faster timeline?",
    answer:
      "In most instances, we can complete within 7 days to 8 weeks, depending on your circumstances and the property.",
    image: faqTimeline,
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
    phone: "",
    postcode: "",
    situation: "",
    timeframe: "",
    notes: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      postcode: "",
      situation: "",
      timeframe: "",
      notes: "",
      consent: false,
    });
    toast({
      title: "Thank you",
      description: "We'll be in touch with a compassionate callback soon.",
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center -mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        <div className="container relative z-10 pt-20">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground leading-tight mb-6">
              Selling a property during a life transition doesn’t have to be stressful.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              When life brings transitions through loss, divorce, or change,
              selling a home can feel overwhelming. We guide you through with
              compassion, handling the practical burdens so you can focus on
              your next chapter.
            </p>

            <div className="mb-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Begin a Conversation
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
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center rounded-3xl border border-border bg-card/95 p-8 md:p-12 shadow-soft">
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
                  who provide a calm, clear path forward—handling the details
                  with care and respect, so you don't have to.
                </p>
              </div>

              <div className="flex justify-center">
                <img
                  src={propertyStaircase}
                  alt="Light-filled staircase with stained glass window"
                  className="w-full max-w-md rounded-2xl object-cover shadow-card"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: A Different Kind of Process */}
      <section className="relative py-20 md:py-28 bg-muted/60 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${patienceBackground})` }}
          aria-hidden="true"
        />
        <div className="container">
          <div className="relative text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Built on Patience, Clarity, and Respect
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A different kind of process, designed around your needs.
            </p>
          </div>

          <div className="relative grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.06]"
          style={{ backgroundImage: `url(${faqBackground})` }}
          aria-hidden="true"
        />
        <div className="container relative z-10">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
              Common Concerns
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Your questions, answered with compassion.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 mb-12">
            {faqPreview.map((faq, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center bg-card rounded-2xl p-6 md:p-8 shadow-soft border border-border ${
                  index % 2 === 0 ? "" : "md:grid-flow-dense"
                }`}
              >
                <div className={index % 2 === 0 ? "" : "md:col-start-2"}>
                  <h3 className="font-serif text-xl text-primary mb-4">
                    "{faq.question}"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
                <div className={index % 2 === 0 ? "" : "md:col-start-1"}>
                  <img
                    src={faq.image}
                    alt={faq.question}
                    className="w-full aspect-square object-cover rounded-xl"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/faq">
              <Button variant="outline" size="lg">
                Read More Questions
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
                Start Your Next Chapter
              </h2>
              <p className="text-primary-foreground/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Let's have a confidential conversation. We can outline your
                options and answer your specific questions. There is no cost,
                no obligation, just clarity.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-card">
                <h3 className="font-serif text-xl text-primary mb-4">
                  Request a Compassionate Callback
                </h3>
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
                        placeholder="e.g. No rush, or as soon as possible"
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
                    {isSubmitting ? "Sending..." : "Begin a Conversation"}
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
