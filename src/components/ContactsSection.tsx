import { motion } from "framer-motion";
import { Instagram, MessageCircle, Send, Mail } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kdavisss07",
    handle: "@kdavisss07",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/77087383268",
    handle: "+7 708 738 32 68",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/Kristna",
    handle: "@Kristna",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="section-padding bg-card">
      <div className="container mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
            Свяжитесь со мной
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Контакты
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-12">
            Готовы запечатлеть ваши лучшие моменты? Напишите мне — обсудим детали
            и подберём идеальный формат съёмки.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-lg bg-background border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <s.icon
                size={28}
                className="mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors"
              />
              <p className="font-body text-sm font-medium text-foreground mb-1">
                {s.label}
              </p>
              <p className="font-body text-xs text-muted-foreground">{s.handle}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
