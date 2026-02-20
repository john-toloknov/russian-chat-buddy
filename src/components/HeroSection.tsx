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
          className="w-full h-full object-cover scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/40 to-foreground/80" />
        {/* Color accent overlays */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-emerald/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold/15 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-block mb-6"
        >
          <span className="inline-block px-4 sm:px-6 py-2 border border-gold/50 rounded-full font-body text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase text-gold">
            ✦ Профессиональная фотография ✦
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-semibold text-primary-foreground mb-4 sm:mb-6 leading-[0.9]"
        >
          Кристина
          <br />
          <span className="italic font-normal bg-gradient-to-r from-emerald via-gold to-rose bg-clip-text text-transparent">
            Толокнова
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-base sm:text-lg md:text-xl text-primary-foreground/80 mb-8 sm:mb-12 max-w-xl mx-auto px-2"
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
            className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-emerald to-emerald-glow text-primary-foreground font-body text-sm uppercase tracking-widest rounded-full hover:shadow-[0_0_30px_hsl(153,53%,53%,0.4)] transition-all duration-300 hover:scale-105"
          >
            Портфолио
          </button>
          <button
            onClick={scrollToContacts}
            className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-gold/50 text-gold font-body text-sm uppercase tracking-widest rounded-full hover:bg-gold/10 hover:border-gold transition-all duration-300 hover:scale-105"
          >
            Связаться
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator — desktop: mouse, mobile: chevrons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        {/* Desktop mouse */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="hidden sm:flex w-6 h-10 border-2 border-gold/40 rounded-full justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gold/60 rounded-full" />
        </motion.div>

        {/* Mobile chevrons */}
        <div className="flex sm:hidden flex-col items-center gap-0">
          {[0, 1, 2].map((i) => (
            <motion.svg
              key={i}
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              className="text-gold/60"
              animate={{ opacity: [0.2, 0.8, 0.2], y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }}
            >
              <path d="M2 2L12 12L22 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
