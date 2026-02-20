import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/kdavisss07",
    handle: "@kdavisss07",
    gradient: "from-rose to-gold",
    glow: "hover:shadow-[0_0_30px_hsl(350,70%,60%,0.3)]",
  },
  {
    icon: Send,
    label: "Telegram",
    href: "https://t.me/kristina_toloknova_bot",
    handle: "@kristina_toloknova_bot",
    gradient: "from-gold to-emerald",
    glow: "hover:shadow-[0_0_30px_hsl(38,80%,55%,0.3)]",
  },
];

const ContactsSection = () => {
  return (
    <section id="contacts" className="section-padding bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-rose/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-emerald/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto max-w-3xl text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent mb-3 font-medium">
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



        {/* Desktop: cards grid */}
        <div className="hidden sm:grid grid-cols-2 gap-6 max-w-lg mx-auto">
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
              className={`group p-6 rounded-2xl bg-background border border-border hover:border-transparent transition-all duration-300 hover:-translate-y-2 ${s.glow}`}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${s.gradient} mb-3`}>
                <s.icon size={24} className="text-primary-foreground" />
              </div>
              <p className="font-body text-sm font-medium text-foreground mb-1">
                {s.label}
              </p>
              <p className="font-body text-xs text-muted-foreground">{s.handle}</p>
            </motion.a>
          ))}
        </div>

        {/* Mobile: inline icon row */}
        <div className="flex sm:hidden justify-center gap-6">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${s.gradient} transition-all duration-300 active:scale-95`}
              aria-label={s.label}
            >
              <s.icon size={22} className="text-primary-foreground" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
