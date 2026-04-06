import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { submitContactForm } from "@/lib/contactApi";

const ContactSection = () => {
  const [pending, setPending] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const bakery = String(fd.get("bakery") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();

    const result = await submitContactForm({ name, email, bakery, message });
    setPending(false);

    if (result.ok === false) {
      toast.error("Could not send message", { description: result.error });
      return;
    }
    form.reset();
    toast.success("Message sent", {
      description: "Thanks for reaching out. Our team will get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <p className="font-body text-sm font-semibold tracking-[0.2em] text-gold uppercase mb-3">Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Talk About Your Bakery
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed text-base sm:text-lg">
            Questions, demos, or custom setups — send a message and we&apos;ll respond within one business day.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Contact us</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Prefer email or phone? Reach us directly — we&apos;re happy to help with demos, support, or consultations.
              </p>
            </div>
            <ul className="space-y-5">
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-background shadow-sm">
                  <MapPin className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">Address</p>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    Main PWD Rd, PWD Housing Society Sector A, PWD Society, Islamabad, Punjab 45700, Pakistan
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-background shadow-sm">
                  <Mail className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">Email</p>
                  <a
                    href="mailto:sales@clickmasters.pk"
                    className="font-body text-sm font-medium text-foreground hover:text-gold transition-colors break-all"
                  >
                    sales@clickmasters.pk
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-background shadow-sm">
                  <Phone className="h-5 w-5 text-gold" aria-hidden />
                </span>
                <div className="space-y-3">
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Customer support
                    </p>
                    <a
                      href="tel:+923325394285"
                      className="font-body text-sm font-medium text-foreground hover:text-gold transition-colors"
                    >
                      0332-5394285
                    </a>
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      Consultation
                    </p>
                    <a
                      href="tel:+923331116842"
                      className="font-body text-sm font-medium text-foreground hover:text-gold transition-colors"
                    >
                      0333-1116842
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="card-premium p-6 sm:p-8 lg:p-10 border-gold/20">
              <div className="mb-6">
                <p className="font-body text-xs font-semibold tracking-[0.15em] text-gold uppercase mb-2">Get started</p>
                <h3 className="font-display text-2xl font-bold text-foreground">Request a callback or demo</h3>
                <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed">
                  Tell us about your bakery — we&apos;ll follow up with pricing options and a tailored walkthrough.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Full name</Label>
                    <Input id="contact-name" name="name" required placeholder="Jane Baker" autoComplete="name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Work email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@bakery.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-bakery">Bakery name</Label>
                  <Input id="contact-bakery" name="bakery" placeholder="Sunrise Artisan Breads" autoComplete="organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-message">How can we help?</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Locations, POS needs, timeline…"
                    className="min-h-[120px] resize-y"
                  />
                </div>
                <button
                  type="submit"
                  disabled={pending}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm !h-11 !px-8 w-full sm:w-auto disabled:opacity-60 disabled:pointer-events-none"
                >
                  {pending ? (
                    "Sending…"
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send message
                    </>
                  )}
                </button>
                <p className="font-body text-xs text-muted-foreground">
                  By submitting, you agree we may contact you about BakePOS. No spam — unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
