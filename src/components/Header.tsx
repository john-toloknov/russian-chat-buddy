import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, MessageCircle, Send } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#home" },
  { label: "Портфолио", href: "#portfolio" },
  { label: "Прайс-лист", href: "#pricing" },
  { label: "Контакты", href: "#contacts" },
];

const socials = [
  { icon: Instagram, href: "https://www.instagram.com/kdavisss07", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/77087383268", label: "WhatsApp" },
  { icon: Send, href: "https://t.me/Kristna", label: "Telegram" },
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
          scrolled ? "glass-effect shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="flex flex-col items-start"
          >
            <span className="font-display text-xl md:text-2xl font-semibold text-foreground">
              Кристина Толокнова
            </span>
            <span className="text-xs font-body tracking-[0.2em] uppercase text-muted-foreground">
              Фотограф
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="font-body text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
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
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavClick(item.href)}
                  className="font-display text-3xl text-foreground hover:text-primary transition-colors"
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
                  className="p-3 rounded-full bg-foreground/10 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
