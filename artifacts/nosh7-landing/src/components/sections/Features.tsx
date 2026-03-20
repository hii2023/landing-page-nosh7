import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Clock, ShieldCheck, HeartHandshake, Leaf, Scale, CheckSquare } from "lucide-react";

export function Features() {
  const comparison = [
    { challenge: "Clients can't maintain meal plans", solution: "Fresh cooked meals delivered daily" },
    { challenge: "Clients struggle with portion control", solution: "Nutritionist-calibrated portions" },
    { challenge: "Cultural dietary needs ignored", solution: "100% pure veg, Jain options available" },
    { challenge: "Hard to track client compliance", solution: "Easy WhatsApp ordering, daily delivery" },
    { challenge: "No tangible partner benefits", solution: "Earn 10-15% commission on every order" },
  ];

  const qualityCommitments = [
    { icon: <Clock />, title: "Seasonal Fresh Ingredients", desc: "We use what nature offers this season — peak nutrition, better taste, maximum freshness." },
    { icon: <ShieldCheck />, title: "Jain Friendly", desc: "Jain Dairy original paneer. No onion, no garlic, no root vegetables on request." },
    { icon: <CheckSquare />, title: "0 Preservatives. Ever.", desc: "Zero artificial additives or colors. Always natural ingredients, always real food." },
    { icon: <Scale />, title: "Health Goal Focused", desc: "Custom meals for Weight Loss, Diabetes, Thyroid, PCOD, and High Protein goals." },
    { icon: <Leaf />, title: "Cloud Kitchen Fresh", desc: "Every order freshly prepared — never pre-made, never frozen, always today's batch." },
    { icon: <HeartHandshake />, title: "Salads + Drinks + Seeds", desc: "Complete nutrition: fresh salads, health drinks, and seeds in every meal plan." },
  ];

  const batches = [
    { time: "9:30 AM – 11:30 AM", label: "Morning Batch", prep: "Prep starts 8:30 AM", emoji: "🌅", color: "bg-amber-100 text-amber-800" },
    { time: "11:30 AM – 1:30 PM", label: "Lunch Batch", prep: "Prep starts 10:30 AM", emoji: "☀️", color: "bg-orange-100 text-orange-800" },
    { time: "4:30 PM – 6:30 PM", label: "Evening Batch", prep: "Prep starts 3:30 PM", emoji: "🌤️", color: "bg-rose-100 text-rose-800" },
    { time: "6:30 PM – 8:30 PM", label: "Dinner Batch", prep: "Prep starts 5:30 PM", emoji: "🌙", color: "bg-indigo-100 text-indigo-800" },
  ];

  return (
    <section id="benefits" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        
        {/* Why Partner Comparison */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Why Partner With Us?</h2>
            <p className="text-lg text-muted-foreground">We solve the biggest roadblock in diet plans: execution. When clients don't have to cook, they actually follow your advice.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border">
            {/* Challenges */}
            <div className="bg-gray-50 p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                  <XCircle size={24} />
                </span>
                The Challenge
              </h3>
              <ul className="space-y-6">
                {comparison.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="text-red-400 mt-1 shrink-0" size={20} />
                    <span className="text-gray-600 font-medium text-lg">{item.challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Solutions */}
            <div className="bg-primary p-8 md:p-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
                  <CheckCircle2 size={24} />
                </span>
                Nosh7 Solution
              </h3>
              <ul className="space-y-6">
                {comparison.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="text-white mt-1 shrink-0" size={20} />
                    <span className="text-primary-foreground font-medium text-lg">{item.solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Quality Commitments */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">Our Quality Promise</h2>
            <p className="text-lg text-muted-foreground">Food you can confidently recommend to your most discerning clients.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityCommitments.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-border shadow-lg shadow-black/5 hover:border-primary/50 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Delivery Batches */}
        <div className="bg-green-50 rounded-3xl p-8 md:p-16 border border-green-100">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">4 Fresh Delivery Batches</h2>
            <p className="text-lg text-muted-foreground">We don't cook once for the whole day. Meals are prepared just hours before consumption.</p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {batches.map((batch, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-border text-center shadow-sm">
                <div className="text-3xl mb-3">{batch.emoji}</div>
                <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${batch.color}`}>
                  {batch.label}
                </div>
                <div className="text-lg font-bold text-foreground">{batch.time}</div>
                <div className="text-xs text-muted-foreground mt-2">{batch.prep}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
