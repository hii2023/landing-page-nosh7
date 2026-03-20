import { motion } from "framer-motion";
import { Phone, Mail, Globe, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Banner */}
        <div className="bg-gradient-to-br from-primary to-[#1e5c35] rounded-3xl p-10 md:p-16 text-center text-white mb-24 shadow-2xl shadow-primary/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-accent/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to Partner with Nosh7?</h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10">
              Get a free sample salad box delivered to your clinic in Ahmedabad. Taste the quality yourself before recommending it to clients. No strings attached.
            </p>
            <a 
              href="https://wa.me/919712989498?text=Hi+Team+Nosh7!+I+am+a+nutritionist+and+want+a+free+sample+to+try." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 rounded-full bg-accent text-white font-bold text-lg hover:bg-[#e06612] hover:scale-105 transition-all shadow-xl shadow-accent/30"
            >
              💬 Request Free Sample on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold text-foreground mb-4">Get in Touch</h3>
          <p className="text-muted-foreground">Our partner success team is ready to help you get started.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
          <a href="tel:+919712989498" className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-primary/30 border border-transparent transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Phone size={24} />
            </div>
            <span className="font-bold text-foreground">+91 9712989498</span>
            <span className="text-sm text-muted-foreground mt-1">Call us directly</span>
          </a>
          
          <a href="https://www.nosh7.com/order" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-primary/30 border border-transparent transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <span className="font-bold text-foreground">nosh7.com/order</span>
            <span className="text-sm text-muted-foreground mt-1">Place orders online</span>
          </a>
          
          <a href="https://nosh7.in" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-8 bg-gray-50 rounded-2xl hover:bg-green-50 hover:border-primary/30 border border-transparent transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
              <Globe size={24} />
            </div>
            <span className="font-bold text-foreground">nosh7.in</span>
            <span className="text-sm text-muted-foreground mt-1">Visit our website</span>
          </a>
        </div>

        {/* Platform Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <a href="https://link.zomato.com/xqzv/rshare?id=4824355730563e1b" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-red-50 text-red-600 border border-red-100 font-semibold text-sm hover:bg-red-100 transition-colors">
            🔴 Order on Zomato
          </a>
          <a href="https://www.swiggy.com/city/ahmedabad/nosh-7-vastrapur-rest1152457" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-orange-50 text-orange-600 border border-orange-100 font-semibold text-sm hover:bg-orange-100 transition-colors">
            🟠 Order on Swiggy
          </a>
          <a href="https://g.page/r/CeuSXgSA4qXEEBE/review" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 font-semibold text-sm hover:bg-blue-100 transition-colors">
            ⭐ Leave Google Review
          </a>
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/919712989498?text=Hi+Team+Nosh7" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all shadow-lg shadow-[#25D366]/30"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
