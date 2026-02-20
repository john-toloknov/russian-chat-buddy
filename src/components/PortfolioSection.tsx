import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import portrait2 from "@/assets/portfolio-portrait-2.jpg";
import landscape1 from "@/assets/portfolio-landscape-1.jpg";
import family1 from "@/assets/portfolio-family-1.jpg";

interface Category {
  id: string;
  label: string;
  description: string;
  images: string[];
  accent: string;
}

const categories: Category[] = [
  {
    id: "portraits",
    label: "Портреты",
    description: "Съёмка, направленная на раскрытие личности и внутреннего мира человека.",
    images: [portrait1, portrait2],
    accent: "from-emerald to-emerald-glow",
  },
  {
    id: "landscapes",
    label: "Пейзажи",
    description: "Фотографии природы, запечатлевающие величие гор и красоту рассветов.",
    images: [landscape1],
    accent: "from-gold to-gold-glow",
  },
  {
    id: "family",
    label: "Семейные",
    description: "Яркие и тёплые фотографии, сохраняющие воспоминания о важных моментах.",
    images: [family1],
    accent: "from-rose to-rose-glow",
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("portraits");
  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  // Flatten all images for lightbox navigation
  const allImages = categories.flatMap((c) => c.images);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveImage(0);
  };

  const openLightbox = (categoryId: string, imageIndex: number) => {
    const cat = categories.find((c) => c.id === categoryId)!;
    const globalIndex = allImages.indexOf(cat.images[imageIndex]);
    setLightboxIndex(globalIndex);
    setLightboxOpen(true);
  };

  const lightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const lightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % allImages.length);
  };

  return (
    <>
      <section id="portfolio" className="section-padding bg-foreground relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-emerald/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent mb-3 font-medium">
              Мои работы
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-background">
              Портфолио
            </h2>
          </motion.div>

          {/* Category tabs */}
          <div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-6 py-2.5 rounded-full font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? `bg-gradient-to-r ${cat.accent} text-primary-foreground shadow-lg`
                    : "bg-transparent text-background/50 border border-background/20 hover:border-background/50 hover:text-background"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Image display */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeCategory}-${activeImage}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] mb-6 cursor-pointer group"
                onClick={() => openLightbox(activeCategory, activeImage)}
              >
                <img
                  src={currentCategory.images[activeImage]}
                  alt={currentCategory.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                  <span className="font-body text-sm uppercase tracking-wider text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-foreground/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Открыть
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnails */}
            {currentCategory.images.length > 1 && (
              <div className="flex justify-center gap-3 mb-6">
                {currentCategory.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeImage === i
                        ? "border-emerald scale-105 shadow-[0_0_15px_hsl(153,53%,53%,0.3)]"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            <p className="font-body text-center text-background/50 italic max-w-lg mx-auto">
              {currentCategory.description}
            </p>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-transparent shadow-none [&>button]:hidden" aria-describedby={undefined}>
          <VisuallyHidden><DialogTitle>Просмотр фотографии</DialogTitle></VisuallyHidden>
          <div
            className="relative flex items-center justify-center"
            onTouchStart={(e) => {
              const touch = e.touches[0];
              (e.currentTarget as any)._touchStartX = touch.clientX;
            }}
            onTouchEnd={(e) => {
              const startX = (e.currentTarget as any)._touchStartX;
              if (startX == null) return;
              const diff = e.changedTouches[0].clientX - startX;
              if (Math.abs(diff) > 50) {
                diff > 0 ? lightboxPrev() : lightboxNext();
              }
            }}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-foreground/70 backdrop-blur-sm flex items-center justify-center text-background hover:bg-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {allImages.length > 1 && (
              <>
                <button
                  onClick={lightboxPrev}
                  className="absolute left-2 z-10 w-10 h-10 rounded-full bg-foreground/70 backdrop-blur-sm flex items-center justify-center text-background hover:bg-foreground transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={lightboxNext}
                  className="absolute right-2 z-10 w-10 h-10 rounded-full bg-foreground/70 backdrop-blur-sm flex items-center justify-center text-background hover:bg-foreground transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={allImages[lightboxIndex]}
              alt="Фото в полном размере"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-body text-sm text-background/70 bg-foreground/50 px-3 py-1 rounded-full backdrop-blur-sm">
              {lightboxIndex + 1} / {allImages.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PortfolioSection;
