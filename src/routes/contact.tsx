import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, Check, Package, RotateCcw, Truck, Clock, Shield, X } from "lucide-react";
import { LeafField } from "@/components/leaf-field";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Earthora" },
      { name: "description", content: "Get in touch with Earthora — questions about pieces, custom orders or collaborations." },
      { property: "og:title", content: "Contact Earthora" },
      { property: "og:description", content: "Reach the Earthora studio in Colombo, Sri Lanka." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.currentTarget as HTMLFormElement).reset();
  };

  const inputCls =
    "w-full bg-transparent border-0 border-b border-border/70 py-4 text-base outline-none placeholder:text-muted-foreground focus:border-leaf transition-colors";

  return (
    <section className="relative hero-bg overflow-hidden">
      <LeafField />
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28 space-y-28">
        {/* Contact Section */}
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-leaf">Contact</p>
            <h1 className="mt-4 text-5xl sm:text-7xl leading-[1.02] text-balance">
              Say <span className="italic text-leaf">hello</span>.
            </h1>
            <p className="mt-6 max-w-md text-muted-foreground">
              Questions about a piece, a custom order, or a collaboration? Send us a note — we reply within a day.
            </p>

            <ul className="mt-12 space-y-6">
              {[
                { Icon: Mail, label: "Email", value: "earthora100@gmail.com" },
                { Icon: Phone, label: "Phone (Whatsapp)", value: "+94 76 058 2663" },
                { Icon: MapPin, label: "Studio", value: "Wellawaya, Sri Lanka" },
              ].map(({ Icon, label, value }) => (
                <li key={label} className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full border border-border/70 grid place-items-center text-leaf">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</p>
                    <p className="text-base">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="glass rounded-3xl p-8 sm:p-10 space-y-2"
          >
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Your name</label>
              <input required type="text" placeholder="Full name" className={inputCls} />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Email</label>
              <input required type="email" placeholder="you@example.com" className={inputCls} />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Tell us what's on your mind…"
                className={inputCls + " resize-none"}
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-8 group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm text-primary-foreground shadow-[var(--shadow-glow)] disabled:opacity-70"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Sent
                </>
              ) : (
                <>
                  Send message <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </motion.form>
        </div>

        {/* Return Policy Section - No Returns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-red-500/10 grid place-items-center text-red-500">
              <X className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight">Return Policy</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-500">
                <Shield className="h-4 w-4" />
                <h3 className="font-medium">All Sales Are Final</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Earthora does not accept returns or exchanges. All purchases are final sale. Please review product descriptions, dimensions, and images carefully before placing your order.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-500">
                <Clock className="h-4 w-4" />
                <h3 className="font-medium">Exceptions</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                In the rare event that your item arrives damaged or defective, please contact us within 48 hours of delivery with photos. We will evaluate on a case-by-case basis.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Questions before purchasing?</span> We're happy to provide additional photos, measurements, or information to ensure you're completely satisfied with your choice. Email us at{" "}
              <a href="mailto:earthora100@gmail.com" className="text-leaf hover:underline">
                earthora100@gmail.com
              </a>{" "}
              before ordering.
            </p>
          </div>
        </motion.div>

        {/* Shipping Policy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-full bg-leaf/10 grid place-items-center text-leaf">
              <Truck className="h-5 w-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-light tracking-tight">Shipping Policy</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-leaf">
                <Package className="h-4 w-4" />
                <h3 className="font-medium">Processing Time</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Orders are processed within 2-3 business days. You'll receive a tracking number once your order ships.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-leaf">
                <Truck className="h-4 w-4" />
                <h3 className="font-medium">Delivery Options</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="block">Sri Lanka: 2-5 business days</span>
                <span className="block">International: 7-14 business days</span>
                <span className="block text-xs text-leaf/70">Express shipping available at checkout</span>
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-leaf">
                <Shield className="h-4 w-4" />
                <h3 className="font-medium">Shipping Protection</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                All orders are fully insured and tracked. We carefully package each item with sustainable materials to ensure it arrives safely.
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Free shipping:</span> Enjoy complimentary shipping on orders over $100 (international) or LKR 15,000 (Sri Lanka). 
              Customs fees and import duties for international orders are the responsibility of the buyer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}