import { motion } from "framer-motion";

const conditions = [
  {
    emoji: "⚖️",
    title: "Weight Management",
    desc: "Calorie-deficit or calorie-controlled salads with high satiety ingredients. We follow your prescribed calorie window precisely.",
    tags: ["Low Cal", "High Fibre", "Portion Controlled"],
    color: "border-blue-100 bg-blue-50/40",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "🩸",
    title: "Diabetes Management",
    desc: "Low-glycaemic index greens, seeds, and vegetables. No added sugar, no refined grains — completely aligned with diabetic diet plans.",
    tags: ["Low GI", "No Sugar", "Fibre Rich"],
    color: "border-red-100 bg-red-50/40",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    emoji: "🦋",
    title: "Thyroid Support",
    desc: "Selenium-rich, iodine-balanced ingredients. We avoid raw cruciferous overload and follow your thyroid-specific ingredient checklist.",
    tags: ["Selenium Rich", "Balanced", "Anti-Inflammatory"],
    color: "border-purple-100 bg-purple-50/40",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "🌸",
    title: "PCOD / PCOS",
    desc: "Anti-inflammatory, hormone-balancing ingredients. High-fibre, low-carb focused salads that support insulin sensitivity and hormonal balance.",
    tags: ["Anti-Inflammatory", "Low Carb", "Hormone Friendly"],
    color: "border-pink-100 bg-pink-50/40",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    emoji: "💪",
    title: "High Protein Plans",
    desc: "Paneer, legumes, seeds, and protein-dense greens to hit your client's daily protein targets without any non-veg sources.",
    tags: ["High Protein", "Pure Veg", "Muscle Support"],
    color: "border-orange-100 bg-orange-50/40",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    emoji: "🫀",
    title: "Cardiac & Cholesterol",
    desc: "Low saturated fat, high Omega-3 ingredients. Heart-healthy greens, flaxseeds, and anti-oxidant rich vegetables per cardiologist/dietitian guidelines.",
    tags: ["Heart Healthy", "Omega-3", "Low Fat"],
    color: "border-green-100 bg-green-50/40",
    tagColor: "bg-green-100 text-green-700",
  },
];

export function ConditionSpecific() {
  return (
    <section id="condition-specific" className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
            🩺 Dietitian-Recommended
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Condition-Specific Diets,<br />
            <span className="text-primary">Built on Your Prescription</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We follow your clinical recommendations to the letter. Share your patient's condition and dietary guidelines — we prepare meals that align with your treatment protocol.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {conditions.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`p-8 rounded-2xl border ${c.color} hover:-translate-y-1 hover:shadow-lg transition-all duration-300`}
            >
              <div className="text-4xl mb-5">{c.emoji}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-2">
                {c.tags.map((tag, j) => (
                  <span key={j} className={`px-3 py-1 rounded-full text-xs font-bold ${c.tagColor}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* How it works callout */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { step: "01", title: "Share the Prescription", desc: "Send us your client's condition, restrictions, and dietary guidelines via WhatsApp.", icon: "📋" },
            { step: "02", title: "We Customise the Meal", desc: "Our kitchen team prepares a daily fresh salad bowl exactly matching your clinical protocol.", icon: "👨‍🍳" },
            { step: "03", title: "Delivered Fresh Daily", desc: "Client receives fresh meals every day. You track compliance. Outcomes improve.", icon: "🚀" },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-border rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="text-4xl mb-4">{item.icon}</div>
              <div className="text-xs font-black text-primary tracking-widest mb-3">STEP {item.step}</div>
              <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
