import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Earthora — Our Story of Nature & Craft" },
      {
        name: "description",
        content:
          "Discover Earthora — an eco-friendly clothing brand handcrafting unique garments with natural plant-based dyes in Sri Lanka.",
      },
      { property: "og:title", content: "About Earthora" },
      { property: "og:description", content: "Nature, wellness and craft — the story behind Earthora." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="relative hero-bg">
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-leaf"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-5xl sm:text-7xl leading-[1.02] text-balance"
          >
            Where nature, fashion & <span className="italic text-leaf">wellness</span> meet.
          </motion.h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <motion.img
          initial={{ opacity: 0, scale: 1.03 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          src={about}
          alt="Hands dyeing fabric with natural plant-based dyes"
          loading="lazy"
          className="w-full h-[420px] sm:h-[560px] object-cover rounded-3xl shadow-[var(--shadow-soft)]"
        />
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 space-y-8 text-lg text-muted-foreground leading-relaxed">
        {[
          "Earthora is an eco-friendly clothing brand dedicated to creating beautiful, handcrafted garments using natural dyes and sustainable techniques. We believe clothing should look beautiful, feel gentle on your skin, and remain kind to the environment.",
          "Every Earthora creation is designed with natural plant-based dyes — mahogany bark, onion peel, welmadata, pathangi wood, and other botanicals. Our tie-dye, batik and eco-print techniques ensure each piece carries its own patterns and character.",
          "We proudly create one-of-a-kind garments. Each design is a single exclusive piece — we do not produce identical copies. Our collections span women, men, children and newborn babies, handcrafted with love, creativity and respect for nature.",
        ].map((p, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            {p}
          </motion.p>
        ))}
      </section>

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 lg:grid-cols-2">
          {[
            {
              t: "Our Vision",
              d: "To become a globally recognised sustainable fashion brand that inspires people to embrace eco-friendly living through unique, handcrafted clothing made with the beauty of nature — a world where fashion protects both human health and the environment.",
            },
            {
              t: "Our Mission",
              d: "To create high-quality, handcrafted clothing using natural dyes and sustainable production methods — designing one-of-a-kind garments, preserving tie-dye, batik and eco-print traditions, and delivering pieces that reflect individuality and respect for nature.",
            },
          ].map((b, i) => (
            <motion.div
              key={b.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="rounded-3xl border border-border/60 bg-background/40 p-10"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-leaf">{b.t}</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{b.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <img
            src={hero}
            alt="Earthora garment in a forest"
            loading="lazy"
            className="w-full h-[520px] object-cover rounded-3xl"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-leaf">Our commitments</p>
            <h2 className="mt-3 text-4xl font-light">Craft, honestly.</h2>
            <ul className="mt-8 space-y-4 text-muted-foreground">
              {[
                "One-of-a-kind garments with no duplicate copies.",
                "Healthy, eco-friendly fashion made from nature's resources.",
                "Preserving traditional tie-dye, batik and eco-print techniques.",
                "Supporting sustainable, ethical practices that reduce impact.",
                "Beautiful, comfortable clothing that reflects individuality.",
              ].map((l) => (
                <li key={l} className="flex gap-3">
                  <span className="mt-2 h-1 w-6 shrink-0 bg-leaf" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
