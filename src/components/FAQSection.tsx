import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does it take to set up BakePOS?",
    a: "Most bakeries are up and running within 30 minutes. Our onboarding wizard guides you through menu setup, payment configuration, and staff training — no technical expertise needed.",
  },
  {
    q: "Can I use my existing hardware?",
    a: "Yes! BakePOS works on iPads, Android tablets, and most modern POS hardware. We also offer certified hardware bundles if you need new equipment.",
  },
  {
    q: "Is there a contract or commitment?",
    a: "No long-term contracts. All plans are month-to-month, and you can upgrade, downgrade, or cancel anytime with no penalties.",
  },
  {
    q: "Do you support multi-location bakeries?",
    a: "Absolutely. Our Enterprise plan supports unlimited locations with centralized reporting, inventory management, and staff scheduling across all your stores.",
  },
  {
    q: "What payment methods does BakePOS support?",
    a: "We support all major credit and debit cards, Apple Pay, Google Pay, cash, gift cards, and split payments. Integration with Stripe and Square is built-in.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted at rest and in transit with bank-level 256-bit SSL encryption. We perform daily backups and are PCI DSS compliant.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-14">
        <p className="font-body text-sm font-semibold tracking-wide text-gold uppercase mb-3">FAQ</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          Everything you need to know about BakePOS. Can't find an answer? <a href="#contact" className="text-gold hover:underline font-medium">Contact us</a>.
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="card-premium px-6 border border-border rounded-xl data-[state=open]:ring-1 data-[state=open]:ring-gold/20"
          >
            <AccordionTrigger className="font-body font-semibold text-foreground text-left text-sm sm:text-base py-5 hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-sm text-muted-foreground leading-relaxed pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
