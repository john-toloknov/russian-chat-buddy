import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait1 from "@/assets/portfolio-portrait-1.jpg";
import portrait2 from "@/assets/portfolio-portrait-2.jpg";
import landscape1 from "@/assets/portfolio-landscape-1.jpg";
import family1 from "@/assets/portfolio-family-1.jpg";

interface Category {
  id: string;
  label: string;
  description: string;
  images: string[];
}

const categories: Category[] = [
  {
    id: "portraits",
    label: "Портреты",
    description:
      "Съёмка, направленная на раскрытие личности и внутреннего мира человека. Работаю над эмоциями, светом и композицией.",
    images: [portrait1, portrait2],
  },
  {
    id: "landscapes",
    label: "Пейзажи",
    description:
      "Фотографии природы, запечатлевающие величие гор, спокойствие озёр и красоту рассветов.",
    images: [landscape1],
  },
  {
    id: "family",
    label: "Семейные",
    description:
      "Яркие и тёплые фотографии, которые сохранят воспоминания о важных моментах вашей семьи.",
    images: [family1],
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("portraits");
  const [activeImage, setActiveImage] = useState(0);

  const currentCategory = categories.find((c) => c.id === activeCategory)!;

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setActiveImage(0);
  };

  return (
    <section id="portfolio" className="section-padding bg-card">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Мои работы
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Портфолио
          </h2>
        </motion.div>

        {/* Category tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`px-6 py-2 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-transparent text-muted-foreground border border-border hover:border-primary hover:text-foreground"
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
              className="aspect-[4/3] rounded-lg overflow-hidden shadow-xl mb-6"
            >
              <img
                src={currentCategory.images[activeImage]}
                alt={currentCategory.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </AnimatePresence>

          {/* Thumbnails */}
          {currentCategory.images.length > 1 && (
            <div className="flex justify-center gap-3 mb-6">
              {currentCategory.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`w-20 h-14 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                    activeImage === i
                      ? "border-primary scale-105"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          <p className="font-body text-center text-muted-foreground italic max-w-lg mx-auto">
            {currentCategory.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
