import { motion } from "framer-motion";
import photographerImg from "@/assets/photographer-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={photographerImg}
                alt="Кристина Толокнова — фотограф"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
              Обо мне
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Привет, я{" "}
              <span className="italic">Кристина!</span>
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
            <div className="flex gap-8">
              <div>
                <span className="font-display text-3xl font-bold text-primary">5+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Лет опыта</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-primary">500+</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Фотосессий</p>
              </div>
              <div>
                <span className="font-display text-3xl font-bold text-primary">100%</span>
                <p className="font-body text-sm text-muted-foreground mt-1">Довольных клиентов</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
