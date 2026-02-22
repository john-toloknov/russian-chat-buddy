import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TelegramIcon from "./icons/TelegramIcon";

const FloatingTelegram = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.3 }
    );

    const el = document.getElementById("contacts");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="https://t.me/kristina_toloknova_bot"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
          aria-label="Написать в Telegram"
        >
          <TelegramIcon size={56} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default FloatingTelegram;
