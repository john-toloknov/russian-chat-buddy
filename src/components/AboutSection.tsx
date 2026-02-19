import { motion } from "framer-motion";
import photographerImg from "@/assets/photographer-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-emerald/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-gold/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_60px_-15px_hsl(153,53%,53%,0.3)]">
              <img
                src={photographerImg}
                alt="Кристина Толокнова — фотограф"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accents */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-gold/40 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-emerald/30 rounded-full -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent mb-3 font-medium">
              Обо мне
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Привет, я{" "}
              <span className="italic bg-gradient-to-r from-emerald to-emerald-glow bg-clip-text text-transparent">Кристина!</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-4">
              Я — профессиональный фотограф, специализирующийся на портретной, семейной
              и пейзажной съёмке. Моя цель — не просто сделать красивые снимки, а
              запечатлеть искренние эмоции, важные моменты и настоящие истории.
            </p>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              В работе я использую только современное оборудование и постоянно
              совершенствую свои навыки. Каждая съёмка для меня — это уникальный
              творческий процесс, в котором мы вместе создаём нечто особенное.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8">
              {[
                { value: "5+", label: "Лет опыта", color: "from-emerald to-emerald-glow" },
                { value: "500+", label: "Фотосессий", color: "from-gold to-gold-glow" },
                { value: "100%", label: "Довольных клиентов", color: "from-rose to-rose-glow" },
              ].map((stat) => (
                <div key={stat.label}>
                  <span className={`font-display text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                  <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
