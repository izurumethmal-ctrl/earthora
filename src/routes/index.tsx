import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { LeafField } from "@/components/leaf-field";
import hero from "@/assets/hero.jpg";
import women from "@/assets/women.jpg";
import men from "@/assets/men.jpg";
import kids from "@/assets/kids.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
};

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden hero-bg">
        <LeafField />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pt-16 pb-24 lg:grid-cols-2 lg:pt-24 lg:pb-32 lg:items-center">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground"
            >
              <Sparkles className="h-3 w-3 text-leaf" /> One-of-a-kind eco fashion
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-5xl leading-[1.02] text-balance sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Be you with
              <span className="block italic text-leaf">beauty, nature</span>
              <span className="block">& wellness.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              Earthora crafts handmade garments with mahogany bark, onion peel and
              pathangi wood — botanical dyes for skin, and for the earth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <Link
                to="/ingredients"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-glow)] hover:-translate-y-0.5 transition"
              >
                Natural Dye Source
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/collection"
                className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 text-sm font-medium tracking-wide hover:border-leaf hover:text-leaf transition"
              >
                Explore Collection
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-14 grid grid-cols-3 gap-6 max-w-md"
            >
              {[
                { n: "100%", l: "Plant-based dyes" },
                { n: "1/1", l: "Unique pieces" },
                { n: "0", l: "Duplicates ever" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl font-light text-leaf">{s.n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
              <img
                src={hero}
                alt="Earthora eco-fashion in a misty forest"
                width={1600}
                height={1800}
                className="h-[520px] w-full object-cover sm:h-[640px] lg:h-[720px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Signature</p>
                <p className="mt-1 text-lg font-light">Eco-print Linen — Forest Ember</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COLLECTIONS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-leaf">Our Categories</p>
            <h2 className="mt-3 text-4xl sm:text-5xl">Made for every body.</h2>
          </div>
          <Link to="/collection" className="text-sm text-muted-foreground hover:text-leaf inline-flex items-center gap-1">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { img: women, title: "Women's Collection", sub: "Eco-dyed dresses, ayurvedic sarees, natural tops" },
            { img: men, title: "Men's Collection", sub: "Herbal-fabric shirts, casual & formal wear" },
            { img: kids, title: "Kids & Baby", sub: "Newborn sets, soft cotton frocks, dyed babywear" },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              custom={i}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-light">{c.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.sub}</p>
                <Link
                  to="/collection"
                  className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-leaf"
                >
                  Discover <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="border-y border-border/60 bg-card/30">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl max-w-3xl"
          >
            Why choose <span className="italic text-leaf">Earthora</span>.
          </motion.h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Eco-friendly & sustainable", "Every step of production is designed to tread lightly."],
              ["Natural plant-based dyes", "Bark, peels, wood and leaves — never synthetic."],
              ["Gentle on the skin", "Breathable, herbal-treated fabrics you'll want to live in."],
              ["Handmade with care", "Slow craft, thoughtful detail, no shortcuts."],
              ["One-of-a-kind pieces", "Each garment is exclusive, no duplicates ever."],
              ["Ethical craftsmanship", "Fair, respectful production honoring tradition."],
            ].map(([t, d], i) => (
              <motion.div
                key={t}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                className="rounded-2xl border border-border/60 bg-background/40 p-8 hover:border-leaf/60 transition"
              >
                <div className="h-10 w-10 rounded-full bg-leaf/15 text-leaf grid place-items-center">
                  <span className="text-sm">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-light">{t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <LeafField />
        <div className="mx-auto max-w-4xl px-6 py-28 text-center">
          <h2 className="text-4xl sm:text-6xl leading-tight text-balance">
            Wear something the earth <span className="italic text-leaf">approves of</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Discover the current Earthora collection — botanical color, honest fabric, one piece per design.
          </p>
          <Link
            to="/collection"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm text-primary-foreground shadow-[var(--shadow-glow)]"
          >
            Shop the collection <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
