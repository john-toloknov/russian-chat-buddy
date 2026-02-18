import { motion } from "framer-motion";
import { Camera, Users, Heart } from "lucide-react";

const plans = [
  {
    icon: Camera,
    title: "Портретная съёмка",
    description: "Продолжительность 1 час, 15 отретушированных фото, все исходники.",
    price: "10 000",
    accent: "from-emerald to-emerald-glow",
    iconColor: "text-emerald",
  },
  {
    icon: Users,
    title: "Семейная съёмка",
    description: "Продолжительность 1.5 часа, 25 отретушированных фото, все исходники.",
    price: "15 000",
    featured: true,
    accent: "from-gold to-gold-glow",
    iconColor: "text-gold",
  },
  {
    icon: Heart,
    title: "Свадебная съёмка",
    description: "Съёмка от 4 часов, от 100 отретушированных фото.",
    price: "от 20 000",
    accent: "from-rose to-rose-glow",
    iconColor: "text-rose",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-emerald/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase bg-gradient-to-r from-emerald to-gold bg-clip-text text-transparent mb-3 font-medium">
            Услуги
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground">
            Прайс-лист
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 group ${
                plan.featured
                  ? "bg-foreground text-background shadow-[0_20px_60px_-15px_hsl(38,80%,55%,0.3)] scale-105"
                  : "bg-card border border-border hover:shadow-xl"
              }`}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-4 ${
                plan.featured ? "bg-background/10" : "bg-gradient-to-br " + plan.accent + "/10"
              }`}>
                <plan.icon
                  size={32}
                  className={plan.featured ? "text-gold" : plan.iconColor}
                />
              </div>
              <h3 className={`font-display text-2xl font-semibold mb-3 ${
                plan.featured ? "text-background" : "text-foreground"
              }`}>
                {plan.title}
              </h3>
              <p className={`font-body text-sm mb-6 leading-relaxed ${
                plan.featured ? "text-background/70" : "text-muted-foreground"
              }`}>
                {plan.description}
              </p>
              <p className={`font-display text-3xl font-bold bg-gradient-to-r ${plan.accent} bg-clip-text text-transparent mb-1`}>
                {plan.price}
              </p>
              <p className={`font-body text-xs ${
                plan.featured ? "text-background/50" : "text-muted-foreground"
              }`}>
                руб.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
