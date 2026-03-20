import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhiteLabel() {
  const { t } = useLanguage();

  const points = [
    { emoji: "🏷️", text: t.whiteLabelPoints[0] },
    { emoji: "🎨", text: t.whiteLabelPoints[1] },
    { emoji: "📍", text: t.whiteLabelPoints[2] },
    { emoji: "👨‍🍳", text: t.whiteLabelPoints[3] },
  ];

  return (
    <section id="white-label" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-semibold text-sm mb-8 border border-white/20">
              🏷️ White Label
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
              {t.whiteLabelTitle}
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-10">
              {t.whiteLabelSub}
            </p>
            <a
              href={`https://wa.me/919712989498?text=Hi+Nosh7!+I+am+interested+in+the+White+Label+partnership+option.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all shadow-lg shadow-[#25D366]/30"
            >
              {t.whiteLabelBtn}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-colors"
              >
                <div className="text-3xl mb-4">{p.emoji}</div>
                <p className="text-sm font-semibold text-gray-200 leading-relaxed">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
