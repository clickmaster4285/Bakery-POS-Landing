import { ShoppingCart, BarChart3, Package, CreditCard, Clock, Users } from "lucide-react";

const features = [
  { icon: ShoppingCart, title: "Smart Order Management", desc: "Process walk-in, phone, and online orders seamlessly from a single intuitive dashboard." },
  { icon: Package, title: "Inventory Tracking", desc: "Track ingredients in real-time with automatic low-stock alerts and supplier integrations." },
  { icon: BarChart3, title: "Sales Analytics", desc: "Understand your best-sellers, peak hours, and revenue trends with beautiful reports." },
  { icon: CreditCard, title: "Flexible Payments", desc: "Accept cards, mobile wallets, cash, and split payments without missing a beat." },
  { icon: Clock, title: "Pre-Order System", desc: "Let customers place custom cake and pastry orders ahead of time, reducing wait times." },
  { icon: Users, title: "Customer Loyalty", desc: "Build repeat business with built-in rewards programs and personalized promotions." },
];

const FeaturesSection = () => (
  <section id="features" className="section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
        <p className="font-body text-sm font-semibold tracking-wide text-gold uppercase mb-3">Powerful Features</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Everything Your Bakery Needs
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          From morning rush to closing time, BakePOS handles every aspect of your bakery operations.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {features.map((f, i) => (
          <div key={f.title} className={`card-premium p-8 group animate-fade-up-delay-${Math.min(i % 3 + 1, 3)}`}>
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
              <f.icon className="h-6 w-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
