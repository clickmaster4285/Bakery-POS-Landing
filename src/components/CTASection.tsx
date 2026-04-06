import { ArrowRight, ShieldCheck, CreditCard, Headphones } from "lucide-react";

const CTASection = () => (
  <section id="cta" className="section-padding">
    <div className="max-w-5xl mx-auto text-center rounded-3xl p-10 sm:p-16 lg:p-20 relative overflow-hidden" style={{ background: "var(--gradient-maroon)" }}>
      <div className="relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-full px-4 py-1.5">
          <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
          <span className="font-body text-xs font-semibold tracking-wide text-primary-foreground/80 uppercase">Limited Time — 14 Days Free</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight">
          Ready to Sweeten <br className="hidden sm:block" /> Your Sales?
        </h2>
        <p className="font-body text-lg text-primary-foreground/80 max-w-xl mx-auto leading-relaxed">
          Join 2,000+ bakeries already using BakePOS. Start your free 14-day trial today — no credit card needed.
        </p>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <a href="#contact" className="btn-gold inline-flex items-center gap-2 text-base">
            Get Started Free <ArrowRight size={18} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-body font-semibold text-base bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
          >
            Book a Demo
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 pt-4 text-primary-foreground/60">
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <ShieldCheck size={16} className="text-gold" /> No credit card required
          </span>
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <CreditCard size={16} className="text-gold" /> Cancel anytime
          </span>
          <span className="inline-flex items-center gap-2 font-body text-sm">
            <Headphones size={16} className="text-gold" /> 24/7 Support
          </span>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  </section>
);

export default CTASection;
