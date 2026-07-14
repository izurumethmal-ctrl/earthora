import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import women from "@/assets/women.jpg";
import men from "@/assets/men.jpg";
import kids from "@/assets/kids.jpg";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";
import ingredients from "@/assets/ingredients.jpg";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Earthora Handcrafted Eco Fashion" },
      { name: "description", content: "Browse the current Earthora collection: eco-dyed dresses, shirts, sarees and babywear — each piece one-of-a-kind." },
      { property: "og:title", content: "Earthora Collection" },
      { property: "og:description", content: "Botanical dyes. Handcrafted garments. One piece per design." },
    ],
  }),
  component: Collection,
});

type Category = "All" | "Women" | "Men" | "Kids"| "Babies"| "Others";
const filters: Category[] = ["All", "Women", "Men", "Kids", "Babies", "Others"];

const products = [
  { img: women, name: "Sage & Ember Slip",  category: "Women", tag: "Eco-print" },
  { img: men, name: "Olive Clay Overshirt",  category: "Men", tag: "Batik" },
  { img: kids, name: "Newborn Cotton Set",  category: "Kids", tag: "Undyed" },
  { img: hero, name: "Forest Ember Linen", category: "Women", tag: "Signature" },
  { img: about, name: "Indigo Botanical Tee",  category: "Men", tag: "Tie-dye" },
  { img: ingredients, name: "Bark & Leaf Sash", category: "Others", tag: "Accessory" },
] as const;

function Collection() {
  const [active, setActive] = useState<Category>("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="hero-bg">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-leaf">The Collection</p>
          <h1 className="mt-4 text-5xl sm:text-7xl text-balance">
            Wear the <span className="italic text-leaf">forest</span>.
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            One piece per design. Dyed with plants. Made to last.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 py-8 sticky top-[68px] z-30">
        <div className="flex flex-wrap gap-2 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-xs uppercase tracking-[0.2em] transition",
                active === f
                  ? "bg-primary text-primary-foreground border-transparent"
                  : "border-border text-muted-foreground hover:border-leaf hover:text-leaf",
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-32">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <motion.article
              key={p.name}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
                  />
                </div>
                <div className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.2em]">
                  {p.tag}
                </div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="text-lg font-light">{p.name}</h3>
                <span className="text-sm text-muted-foreground">{p.price}</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-leaf">{p.category}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}