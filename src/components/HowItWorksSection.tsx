import { PackagePlus, ShoppingCart, BarChart3, Rocket, ChevronRight } from "lucide-react";

/** Minimal marker on the connector: halo clears the line, monoline chevron (editorial / product-tour style) */
const FlowConnectorMarker = () => (
  <div
    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-cream
      shadow-[0_1px_2px_hsl(var(--brown)/0.08)] ring-[3px] ring-cream"
    aria-hidden
  >
    <ChevronRight className="h-[13px] w-[13px] text-maroon -mr-px" strokeWidth={2.5} aria-hidden />
  </div>
);

const steps = [
  {
    num: "01",
    icon: PackagePlus,
    title: "Add Your Products",
    desc: "Catalog pastries, cakes & breads with photos, prices, and categories.",
    color: "from-gold/20 to-gold/5",
  },
  {
    num: "02",
    icon: ShoppingCart,
    title: "Start Selling",
    desc: "Process orders instantly with our intuitive touchscreen POS interface.",
    color: "from-maroon/20 to-maroon/5",
  },
  {
    num: "03",
    icon: BarChart3,
    title: "Track & Analyze",
    desc: "Monitor sales, inventory & performance with real-time dashboards.",
    color: "from-gold/20 to-gold/5",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Grow Your Bakery",
    desc: "Use insights to optimize your menu, reduce waste & scale confidently.",
    color: "from-maroon/20 to-maroon/5",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
        <span className="inline-block font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          Simple Workflow
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-5">
          How <span className="text-gold">BakePOS</span> Works
        </h2>
        <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed">
          Four simple steps from setup to scaling your bakery business.
        </p>
      </div>

      {/* Flow timeline */}
      <div className="relative">
        {/* Flowing connector line - desktop */}
        <div className="hidden lg:block absolute top-[72px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-1 rounded-full overflow-hidden shadow-[0_1px_3px_hsl(var(--brown)/0.2)]">
          <div className="absolute inset-0 how-it-works-flow-track-h rounded-full" />
          <div className="absolute top-0 bottom-0 w-[45%] -left-[10%] rounded-full bg-gradient-to-r from-transparent via-gold/90 to-transparent animate-flow-pulse" />
          <div className="absolute top-0 bottom-0 w-[40%] -left-[5%] rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent animate-flow-pulse [animation-delay:0.4s]" />
        </div>

        {/* Flowing connector line - tablet */}
        <div className="hidden md:block lg:hidden absolute top-0 bottom-0 left-1/2 w-1 -translate-x-1/2 rounded-full overflow-hidden shadow-[1px_0_3px_hsl(var(--brown)/0.15)]">
          <div className="absolute inset-0 how-it-works-flow-track-v rounded-full" />
          <div className="absolute left-0 right-0 h-[45%] -top-[10%] rounded-full bg-gradient-to-b from-transparent via-gold/90 to-transparent animate-flow-pulse-v" />
          <div className="absolute left-0 right-0 h-[40%] -top-[5%] rounded-full bg-gradient-to-b from-transparent via-white/60 to-transparent animate-flow-pulse-v [animation-delay:0.4s]" />
        </div>

        {/* Mobile connector */}
        <div className="md:hidden absolute top-0 bottom-0 left-8 w-1 rounded-full overflow-hidden shadow-[1px_0_3px_hsl(var(--brown)/0.15)]">
          <div className="absolute inset-0 how-it-works-flow-track-v rounded-full" />
          <div className="absolute left-0 right-0 h-[45%] -top-[10%] rounded-full bg-gradient-to-b from-transparent via-gold/90 to-transparent animate-flow-pulse-v" />
          <div className="absolute left-0 right-0 h-[40%] -top-[5%] rounded-full bg-gradient-to-b from-transparent via-white/60 to-transparent animate-flow-pulse-v [animation-delay:0.4s]" />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 relative">
          {steps.map((step, i) => (
            <div key={step.num} className="relative group">
              {/* Step card */}
              <div className="relative flex flex-row md:flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-0">
                {/* Circle node on the line */}
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${step.color}
                    border-[3px] border-gold/50 flex items-center justify-center
                    group-hover:border-gold group-hover:scale-110 group-hover:shadow-[0_0_24px_-4px_hsl(var(--gold)/0.5)]
                    transition-all duration-500`}>
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-gold group-hover:text-maroon transition-colors duration-300" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-background
                    font-display text-xs font-bold flex items-center justify-center shadow-md
                    group-hover:bg-maroon group-hover:text-white transition-colors duration-300">
                    {step.num}
                  </span>
                </div>

                {/* Text */}
                <div className="md:mt-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1.5 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[220px] md:mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connector markers between steps (desktop) */}
              {i < steps.length - 1 && (
                <div
                  className="hidden lg:flex absolute left-full top-[72px] z-20 w-0 justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  aria-hidden
                >
                  <FlowConnectorMarker />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-sm !py-3 !px-8 group">
          Start Your Journey
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
            <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
