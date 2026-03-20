import { motion } from "framer-motion";
import { Users, Clock, Leaf, Star } from "lucide-react";

export function Stats() {
  const stats = [
    { icon: <Users size={28} />, value: "2000+", label: "Happy Customers in Ahmedabad", color: "text-blue-500", bg: "bg-blue-50" },
    { icon: <Leaf size={28} />, value: "100%", label: "Fresh, Never Frozen", color: "text-primary", bg: "bg-green-50" },
    { icon: <Clock size={28} />, value: "4 Batches", label: "Cooked Fresh Daily", color: "text-accent", bg: "bg-orange-50" },
    { icon: <Star size={28} />, value: "4.6 ★", label: "Average Customer Rating", color: "text-yellow-500", bg: "bg-yellow-50" },
  ];

  const ratings = [
    { platform: "Zomato", score: "4.3", icon: "🛵", color: "bg-red-500", href: "https://link.zomato.com/xqzv/rshare?id=4824355730563e1b" },
    { platform: "Swiggy", score: "4.8", icon: "🍔", color: "bg-orange-500", href: "https://www.swiggy.com/city/ahmedabad/nosh-7-vastrapur-rest1152457" },
    { platform: "nosh7.com", score: null, icon: "🥗", color: "bg-primary", href: "https://www.nosh7.com/order" },
    { platform: "Google", score: "4.6", icon: "⭐", color: "bg-blue-500", href: "https://g.page/r/CeuSXgSA4qXEEBE/review" },
  ];

  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-xl shadow-black/5 border border-border flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className={`p-4 rounded-full ${stat.bg} ${stat.color} mb-4`}>
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
              <p className="text-sm font-medium text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Ratings */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <p className="text-lg font-semibold text-muted-foreground">Order or rate us:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {ratings.map((rating, i) => (
              <motion.a 
                key={i}
                href={rating.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 bg-gray-50 px-5 py-3 rounded-full border border-gray-100 hover:border-primary/30 hover:bg-green-50 transition-colors no-underline"
              >
                <div className={`w-8 h-8 rounded-full ${rating.color} flex items-center justify-center text-white text-sm shadow-md`}>
                  {rating.icon}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-foreground font-bold">
                    {rating.platform}
                    {rating.score && (
                      <span className="flex items-center gap-0.5 text-yellow-500 ml-1">
                        <Star size={12} fill="currentColor" /> {rating.score}
                      </span>
                    )}
                  </div>
                  <div className="text-xs font-medium text-muted-foreground">
                    {rating.score ? "Rated by customers" : "Direct Order"}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
