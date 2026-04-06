import { Croissant } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Croissant className="h-7 w-7 text-gold" />
            <span className="font-display text-lg font-bold">BakePOS</span>
          </div>
          <p className="font-body text-sm text-primary-foreground/60 leading-relaxed max-w-xs">
            The modern point-of-sale system built exclusively for artisan bakeries.
          </p>
        </div>

        {[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Integrations", href: "#integrations" },
              { label: "How it works", href: "#how-it-works" },
              { label: "Updates", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Press", href: "#" },
            ],
          },
          {
            title: "Support",
            links: [
              { label: "Help Center", href: "#" },
              { label: "Contact", href: "#contact" },
              { label: "Privacy", href: "#" },
              { label: "Terms", href: "#" },
            ],
          },
        ].map((col) => (
          <div key={col.title}>
            <h4 className="font-body text-sm font-semibold mb-4 text-primary-foreground/80">{col.title}</h4>
            <ul className="space-y-2">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="font-body text-sm text-primary-foreground/50 hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-body text-xs text-primary-foreground/40">© 2026 BakePOS. All rights reserved.</p>
        <div className="flex gap-4">
          {["Twitter", "LinkedIn", "Instagram"].map(s => (
            <a key={s} href="#" className="font-body text-xs text-primary-foreground/40 hover:text-gold transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
