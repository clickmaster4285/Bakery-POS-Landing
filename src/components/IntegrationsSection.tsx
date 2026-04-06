import { CreditCard, Truck, FileText, MessageSquare, Cloud, ShieldCheck } from "lucide-react";

const integrations = [
  { icon: CreditCard, name: "Stripe", desc: "Payment processing" },
  { icon: CreditCard, name: "Square", desc: "Card payments" },
  { icon: FileText, name: "QuickBooks", desc: "Accounting sync" },
  { icon: Truck, name: "DoorDash", desc: "Delivery orders" },
  { icon: MessageSquare, name: "Mailchimp", desc: "Email marketing" },
  { icon: Cloud, name: "Google", desc: "Cloud backup" },
  { icon: ShieldCheck, name: "Clover", desc: "POS hardware" },
  { icon: FileText, name: "Xero", desc: "Financial reports" },
];

const IntegrationsSection = () => (
  <section id="integrations" className="section-padding bg-muted/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-wide text-gold">Integrations</p>
        <h2 className="mb-4 font-display text-3xl font-bold text-foreground sm:text-4xl">Works With Your Favorite Tools</h2>
        <p className="font-body leading-relaxed text-muted-foreground">
          Seamlessly connect BakePOS with the platforms you already use and love.
        </p>
      </div>

      <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
        {integrations.map((item) => (
          <div key={item.name} className="card-premium group cursor-pointer p-6 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 transition-colors group-hover:bg-gold/20">
              <item.icon className="h-6 w-6 text-gold" />
            </div>
            <p className="font-body text-sm font-semibold text-foreground">{item.name}</p>
            <p className="mt-1 font-body text-xs text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IntegrationsSection;
