import { motion } from "framer-motion";
import { UserPlus, Share2, Smartphone, Wallet } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { icon: <UserPlus size={32} />, title: "1. Register", desc: "Sign up as a partner and get your unique clinic code." },
    { icon: <Share2 size={32} />, title: "2. Share", desc: "Give the code to your clients alongside their diet plan." },
    { icon: <Smartphone size={32} />, title: "3. Order", desc: "Clients order via WhatsApp, applying your 20% discount code." },
    { icon: <Wallet size={32} />, title: "4. Earn", desc: "You automatically earn 10-15% commission on every single meal." },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">How The Partnership Works</h2>
          <p className="text-lg text-muted-foreground">Four simple steps to better client results and a new revenue stream for your practice.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop only) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border z-0"></div>
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-primary mb-6 shadow-xl shadow-primary/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
