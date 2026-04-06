import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marie Laurent",
    role: "Owner, La Petite Boulangerie",
    quote: "BakePOS transformed how we handle our morning rush. Orders are faster, mistakes are down 90%, and my staff loves it.",
    initials: "ML",
  },
  {
    name: "James Chen",
    role: "Manager, Golden Crust Bakery",
    quote: "The inventory tracking alone saved us thousands. We finally know exactly what we need to bake each day.",
    initials: "JC",
  },
  {
    name: "Sofia Rodriguez",
    role: "Owner, Sweet Traditions",
    quote: "Our customers love the loyalty program. We've seen a 35% increase in repeat visits since switching to BakePOS.",
    initials: "SR",
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="section-padding bg-muted/50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-body text-sm font-semibold tracking-wide text-gold uppercase mb-3">Testimonials</p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Loved by Bakery Owners
        </h2>
        <p className="font-body text-muted-foreground leading-relaxed">
          See why hundreds of bakeries trust BakePOS to run their business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="card-premium p-8 flex flex-col">
            <div className="flex gap-1 mb-4">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-gold text-gold" />)}
            </div>
            <blockquote className="font-body text-foreground leading-relaxed mb-6 flex-1">
              "{t.quote}"
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-maroon flex items-center justify-center font-body text-sm font-bold text-primary-foreground">
                {t.initials}
              </div>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
