import { motion } from "framer-motion";
import { ArrowRight, UtensilsCrossed } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
          alt="Fresh Indian Vegetarian Food" 
          className="w-full h-full object-cover rounded-bl-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-6 border border-accent/20">
              <UtensilsCrossed size={16} />
              <span>🥗 Ahmedabad ka #1 Pure Veg Salad Cloud Kitchen</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Partner With Nosh7 —<br/>
              <span className="text-primary">Fuel Your Clients' Goals</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Join 2000+ satisfied clients across Ahmedabad. Help your patients stick to their meal plans with fresh, nutritionist-backed, 100% pure-veg salads — customised to their condition and your prescription.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300"
              >
                Become a Partner <ArrowRight size={20} />
              </a>
              <a
                href="https://wa.me/919712989498?text=Hi+Team+Nosh7!+I+am+a+nutritionist+and+want+to+partner+with+you."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-foreground font-semibold text-lg flex items-center justify-center gap-2 border-2 border-border hover:border-primary hover:text-primary transition-all duration-300"
              >
                💬 Request Free Sample
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
