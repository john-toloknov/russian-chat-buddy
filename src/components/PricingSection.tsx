import { motion } from "framer-motion";
import { Camera, Users, Heart } from "lucide-react";

const plans = [
  {
    icon: Camera,
    title: "Портретная съёмка",
    description: "Продолжительность 1 час, 15 отретушированных фото, все исходники.",
    price: "10 000",
  },
  {
    icon: Users,
    title: "Семейная съёмка",
    description: "Продолжительность 1.5 часа, 25 отретушированных фото, все исходники.",
    price: "15 000",
    featured: true,
  },
  {
    icon: Heart,
    title: "Свадебная съёмка",
    description: "Съёмка от 4 часов, от 100 отретушированных фото.",
    price: "от 20 000",
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary mb-3">
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
              className={`rounded-lg p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.featured
                  ? "bg-foreground text-background shadow-xl"
                  : "bg-card border border-border"
              }`}
            >
              <plan.icon
                size={36}
                className={`mx-auto mb-4 ${plan.featured ? "text-primary" : "text-primary"}`}
              />
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
              <p className="font-display text-3xl font-bold text-primary mb-1">
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
