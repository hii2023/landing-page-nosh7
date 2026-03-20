import { motion } from "framer-motion";
import { Salad, Dumbbell, HeartHandshake, Leaf, Droplets, Apple } from "lucide-react";

export function CustomPlans() {
  const planTypes = [
    {
      icon: <Salad size={28} />,
      title: "Customized Salad Bowls",
      desc: "Every salad bowl is built to your exact dietary specifications — ingredients, portions, toppings, and dressings tailored per client.",
      color: "text-primary",
      bg: "bg-green-50",
    },
    {
      icon: <Dumbbell size={28} />,
      title: "Macro-Calibrated Meals",
      desc: "We calibrate protein, carb, and fat ratios according to your prescription — whether it's high-protein, low-carb, or balanced macros.",
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      icon: <Leaf size={28} />,
      title: "Ingredient Substitutions",
      desc: "Allergic to something? Need to avoid specific ingredients? We swap seamlessly — no cross-contamination, fully documented.",
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      icon: <Droplets size={28} />,
      title: "Health Drinks & Seeds",
      desc: "Pair salads with custom seed blends and health drinks recommended by you — chia, flax, pumpkin, and more.",
      color: "text-cyan-600",
      bg: "bg-cyan-50",
    },
    {
      icon: <Apple size={28} />,
      title: "Portion Flexibility",
      desc: "Light snack, full meal, or multi-course plan — portion sizes are adjusted exactly per your client's calorie target.",
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
    {
      icon: <HeartHandshake size={28} />,
      title: "Partner-Managed Menus",
      desc: "You design the menu, we execute it. Send us your client's plan on WhatsApp and we handle the rest daily.",
      color: "text-rose-600",
      bg: "bg-rose-50",
    },
  ];

  return (
    <section id="custom-plans" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-primary font-semibold text-sm mb-6 border border-green-100">
            🎨 Fully Customizable
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            We Build the Plan <span className="text-primary">You Design</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            No fixed menus. No one-size-fits-all. You prescribe the diet — we cook and deliver it exactly as you envision, every single day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {planTypes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-8 bg-white border border-border rounded-2xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-3xl p-10 md:p-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl mb-6">🤝</div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            You Prescribe. We Deliver.
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Simply send us your client's dietary requirements on WhatsApp — ingredients, quantities, frequency — and we take it from there. No app, no complexity.
          </p>
          <a
            href="https://wa.me/919712989498?text=Hi+Nosh7!+I+want+to+discuss+a+customized+plan+for+my+client."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all shadow-lg shadow-[#25D366]/30"
          >
            💬 Discuss a Custom Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}
