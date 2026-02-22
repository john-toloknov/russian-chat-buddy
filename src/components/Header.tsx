import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Send } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Прайс-лист", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/kdavisss07", label: "Instagram" },
  { icon: Send, href: "https://t.me/kristina_toloknova_bot", label: "Telegram" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-foreground/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.3)] py-2 translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col items-start group"
          >
            <span className={`font-display text-xl md:text-2xl font-semibold transition-colors duration-300 ${
              scrolled ? "text-primary-foreground" : "text-foreground"
            }`}>
              Кристина
              <span className="bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent ml-1">
                Толокнова
              </span>
            </span>
            <span className={`text-xs font-body tracking-[0.2em] uppercase transition-colors duration-300 ${
              scrolled ? "text-primary-foreground/60" : "text-muted-foreground"
            }`}>
              Фотограф
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`font-body text-sm tracking-wide uppercase relative transition-colors duration-300 
                  after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-emerald after:to-gold after:transition-all after:duration-300 hover:after:w-full
                  ${scrolled ? "text-primary-foreground/70 hover:text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-primary-foreground" : "text-foreground"}`}
            aria-label="Меню"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-foreground/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-3xl text-background hover:text-emerald transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>

            <div className="flex gap-6 mt-12">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-background/10 text-background hover:bg-emerald hover:text-primary-foreground transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={22} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
