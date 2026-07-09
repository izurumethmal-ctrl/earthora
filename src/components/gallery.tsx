// src/components/gallery.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Heart, Sparkles, Clock, Share2, Download, ZoomIn, Award } from "lucide-react";

// Import your gallery images from assets
import gallery1 from "@/assets/gallery/1.jpg";
import gallery2 from "@/assets/gallery/2.jpg";
import gallery3 from "@/assets/gallery/3.jpg";
import gallery4 from "@/assets/gallery/4.jpg";
import gallery5 from "@/assets/gallery/5.jpg";
import gallery6 from "@/assets/gallery/6.jpg";
import gallery7 from "@/assets/gallery/7.jpg";
import gallery8 from "@/assets/gallery/8.jpg";


const galleryImages = [
  {
    id: 1,
    src: gallery1,
    alt: "Women's collection",
    title: "Earth Tones Ensemble",
    description: "Mahogany and indigo dyed collection",
    date: "2024",
    tags: ["women", "earth-tones", "ensemble"],
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: gallery2,
    alt: "Natural dye process",
    title: "Dyeing in Progress",
    description: "Extracting colors from pathangi wood",
    date: "2024",
    tags: ["process", "natural-dye", "craft"],
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: gallery3,
    alt: "Men's herbal shirt",
    title: "Herbal Cotton Shirt",
    description: "Ayurvedic-treated fabric with natural dyes",
    date: "2024",
    tags: ["men", "cotton", "ayurvedic"],
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    src: gallery4,
    alt: "Kids organic dress",
    title: "Baby Bloom Set",
    description: "Soft cotton dyed with turmeric and indigo",
    date: "2024",
    tags: ["kids", "organic", "soft"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    src: gallery5,
    alt: "Saree collection",
    title: "Ayurvedic Silk Saree",
    description: "Handwoven with botanical dye patterns",
    date: "2024",
    tags: ["saree", "silk", "ayurvedic"],
    span: "col-span-2 row-span-2",
  },
  {
    id: 6,
    src: gallery6,
    alt: "Dyeing process",
    title: "Onion Peel Extraction",
    description: "Natural golden hues from kitchen waste",
    date: "2024",
    tags: ["process", "onion-peel", "sustainable"],
    span: "col-span-1 row-span-1",
  },
  {
    id: 7,
    src: gallery7,
    alt: "Men's formal wear",
    title: "Eco-formal Blazer",
    description: "Plant-based dyes meet modern tailoring",
    date: "2024",
    tags: ["men", "formal", "tailored"],
    span: "col-span-1 row-span-2",
  },
  {
    id: 8,
    src: gallery8,
    alt: "Kids playwear",
    title: "Natural Play Set",
    description: "Comfortable and chemical-free",
    date: "2024",
    tags: ["kids", "playwear", "comfort"],
    span: "col-span-1 row-span-1",
  },
  
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const openLightbox = (image: any) => {
    setSelectedImage(image);
    setCurrentIndex(galleryImages.findIndex(img => img.id === image.id));
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    const total = galleryImages.length;
    let newIndex;
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? total - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === total - 1 ? 0 : currentIndex + 1;
    }
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const toggleLike = (id: number) => {
    setLikedImages(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-background to-leaf/5">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-leaf blur-3xl" />
          <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-leaf/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-leaf/20 blur-2xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-leaf/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-leaf backdrop-blur-sm">
              <Sparkles className="h-3 w-3" /> Earthora Showcase
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-5xl font-light sm:text-6xl lg:text-7xl"
          >
            Visual <span className="italic text-leaf">Collection</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
          >
            A curated showcase of our sustainable fashion journey — 
            each piece tells a story of nature and craftsmanship
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-light text-leaf">{galleryImages.length}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Artworks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-leaf">100%</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Natural Dyes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-leaf">{likedImages.length}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Appreciations</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bento Grid Gallery */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px]"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className={`${image.span} relative cursor-pointer overflow-hidden rounded-2xl group`}
              onMouseEnter={() => setHoveredId(image.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-lg font-light text-white lg:text-xl">{image.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{image.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {image.tags.slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs text-white backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-3 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {image.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart className={`h-3 w-3 ${likedImages.includes(image.id) ? "fill-red-500 text-red-500" : ""}`} />
                      {likedImages.includes(image.id) ? 1 : 0}
                    </span>
                  </div>
                </div>
              </div>

              {/* Like Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(image.id);
                }}
                className={`absolute right-3 top-3 rounded-full p-2 backdrop-blur-sm transition-all duration-300 ${
                  likedImages.includes(image.id)
                    ? "bg-red-500/80 text-white"
                    : "bg-black/40 text-white hover:bg-black/60"
                }`}
              >
                <Heart
                  className={`h-4 w-4 transition ${
                    likedImages.includes(image.id) ? "fill-white" : ""
                  }`}
                />
              </button>

              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                <ZoomIn className="h-12 w-12 text-white/30" />
              </div>

              {/* Featured Badge */}
              {image.id === 1 && (
                <div className="absolute left-3 top-3 rounded-full bg-leaf/90 px-3 py-1 text-xs text-white backdrop-blur-sm flex items-center gap-1">
                  <Award className="h-3 w-3" /> Featured
                </div>
              )}

              {/* Category Indicator */}
              <div className="absolute bottom-3 left-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-white/70 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {image.tags[0]}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            {galleryImages.length} unique pieces • Each one a story
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 rounded-full bg-leaf/10 px-6 py-2.5 text-sm text-leaf transition hover:bg-leaf/20"
            >
              <Sparkles className="h-4 w-4" />
              Back to Top
            </button>
          </div>
        </motion.div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2.5 text-white transition hover:bg-white/20 z-10"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-light text-white lg:text-3xl">
                      {selectedImage.title}
                    </h3>
                    <p className="mt-1 text-white/70">{selectedImage.description}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="flex items-center gap-1 text-sm text-white/50">
                        <Clock className="h-4 w-4" /> {selectedImage.date}
                      </span>
                      <span className="text-white/30">•</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedImage.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/20 px-3 py-0.5 text-xs text-white/80 backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => toggleLike(selectedImage.id)}
                      className={`rounded-full p-3 backdrop-blur-sm transition ${
                        likedImages.includes(selectedImage.id)
                          ? "bg-red-500/80 text-white"
                          : "bg-white/20 text-white hover:bg-white/30"
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          likedImages.includes(selectedImage.id) ? "fill-white" : ""
                        }`}
                      />
                    </button>
                    <button className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/30">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="rounded-full bg-white/20 p-3 text-white backdrop-blur-sm transition hover:bg-white/30">
                      <Download className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/60 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}