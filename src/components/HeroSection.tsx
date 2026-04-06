import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-bakery.jpg";

const HeroSection = () => (
  <section className="relative pt-20 sm:pt-24 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
    <div className="max-w-7xl mx-auto section-padding pb-0 lg:pb-0">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-1.5">
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="font-body text-xs font-semibold tracking-wide text-brown uppercase">Trusted by 2,000+ Bakeries</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            The POS System <br />
            <span className="gradient-text">Built for Bakeries</span>
          </h1>

          <p className="font-body text-lg text-muted-foreground max-w-lg leading-relaxed">
            Streamline orders, manage inventory, and delight customers with the point-of-sale system designed exclusively for artisan bakeries.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary inline-flex items-center gap-2">
              Get Started Free <ArrowRight size={18} />
            </a>
            <button className="btn-gold inline-flex items-center gap-2 !bg-transparent border-2 border-gold text-brown hover:bg-gold/10">
              <Play size={16} className="text-gold" /> Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-cream-dark flex items-center justify-center font-body text-xs font-bold text-brown-light">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-gold">
                {[1,2,3,4,5].map(i => <span key={i}>★</span>)}
              </div>
              <p className="font-body text-xs text-muted-foreground">4.9/5 from 500+ reviews</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-up-delay-1">
          <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <img src={heroImage} alt="BakePOS dashboard showing order management for a bakery" width={1280} height={832} className="w-full h-auto" />
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 border border-border" style={{ boxShadow: "var(--shadow-card)" }}>
            <p className="font-body text-xs text-muted-foreground">Today's Sales</p>
            <p className="font-display text-2xl font-bold text-foreground">$2,847</p>
            <p className="font-body text-xs text-gold font-semibold">↑ 12% from yesterday</p>
          </div>
        </div>
      </div>
    </div>

    <div className="absolute top-1/4 right-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-maroon/5 rounded-full blur-3xl pointer-events-none" />
  </section>
);

export default HeroSection;
