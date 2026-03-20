import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Priya Mehta",
      role: "Clinical Nutritionist",
      quote: "Nosh7 has transformed my client compliance. My patients actually stick to their meal plans now because the food is fresh and delicious!",
      rating: 5
    },
    {
      name: "Ananya Sharma",
      role: "Registered Dietitian",
      quote: "The pure veg commitment and Jain options make it perfect for most of my clients. The portion control is incredibly accurate.",
      rating: 5
    },
    {
      name: "Ravi Patel",
      role: "Sports Nutritionist",
      quote: "Earning commission while genuinely helping clients is a win-win. Highly recommend Nosh7 to any serious practitioner.",
      rating: 5
    },
    {
      name: "Neha Gupta",
      role: "Wellness Coach",
      quote: "My clients love the fresh food and I love the partnership support from the Nosh7 team. It's totally seamless via WhatsApp.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Trusted by Professionals</h2>
          <p className="text-lg text-muted-foreground">See what other dietitians and nutritionists have to say about partnering with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-lg shadow-black/5 border border-border relative"
            >
              <Quote className="absolute top-8 right-8 text-secondary/50 w-16 h-16" />
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 italic mb-8 relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{t.name}</h4>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
