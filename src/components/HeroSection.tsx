import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContacts = () => {
    document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Фон"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-4"
        >
          Профессиональная фотография
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 leading-tight"
        >
          Кристина
          <br />
          <span className="italic font-normal">Толокнова</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg text-primary-foreground/80 mb-10 max-w-xl mx-auto"
        >
          Запечатлю искренние эмоции, важные моменты и настоящие истории вашей жизни
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={scrollToPortfolio}
            className="px-8 py-3 bg-primary text-primary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:bg-emerald-glow transition-colors duration-300"
          >
            Портфолио
          </button>
          <button
            onClick={scrollToContacts}
            className="px-8 py-3 border border-primary-foreground/40 text-primary-foreground font-body text-sm uppercase tracking-widest rounded-sm hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            Связаться
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-foreground/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
