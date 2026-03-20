import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, CheckCircle2, Gift, TrendingUp, HeadphonesIcon, Utensils } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function PromoCode() {
  const [clinicName, setClinicName] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = () => {
    if (!clinicName.trim()) {
      toast({
        title: "Input Required",
        description: "Please enter your clinic or practice name.",
        variant: "destructive"
      });
      return;
    }

    const words = clinicName.trim().split(/\s+/);
    let part1 = "", part2 = "";

    if (words.length >= 2) {
      part1 = words[0].substring(0, 3).toUpperCase();
      part2 = words[1].substring(0, 3).toUpperCase();
    } else {
      const word = words[0];
      part1 = word.substring(0, 3).toUpperCase();
      part2 = word.substring(3, 6).toUpperCase();
      if (part2.length === 0) part2 = "X7X";
    }

    part1 = part1.padEnd(3, 'X');
    part2 = part2.padEnd(3, 'X');
    
    const randomNum = Math.floor(10 + Math.random() * 90);
    const code = `${part1}_${part2}_${randomNum}`;
    
    setGeneratedCode(code);
    setIsCopied(false);
  };

  const handleCopy = () => {
    if (!generatedCode) return;
    navigator.clipboard.writeText(generatedCode);
    setIsCopied(true);
    toast({
      title: "Code Copied!",
      description: "You can now share this code with your clients.",
    });
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <section id="promo-code" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/pattern-mesh.png`} 
          alt="Background Pattern" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-primary/95" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-16 text-center">
          <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mx-auto mb-8">
            <Gift size={40} />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Generate Your Partner Code
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Enter your clinic or practice name to instantly generate a unique promo code. Give this to your clients so they get a discount, and you get a commission.
          </p>

          <div className="max-w-xl mx-auto space-y-6">
            {!generatedCode ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="e.g. Dr. Neha Sharma or City Diet Clinic"
                  value={clinicName}
                  onChange={(e) => setClinicName(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-2 border-border text-lg focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all text-center placeholder:text-gray-400"
                  onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
                />
                <button
                  onClick={handleGenerate}
                  className="w-full px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/25 hover:-translate-y-1 transition-all"
                >
                  Generate Code
                </button>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }} 
                animate={{ scale: 1, opacity: 1 }}
                className="space-y-8"
              >
                <div className="bg-green-50 border-2 border-primary border-dashed rounded-3xl p-8 relative">
                  <span className="text-sm font-bold text-primary uppercase tracking-wider mb-2 block">Your Unique Code</span>
                  <div className="text-5xl md:text-6xl font-display font-black text-foreground tracking-widest break-all">
                    {generatedCode}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="text-accent"><Utensils size={24} /></div>
                    <span className="font-semibold">20% discount for clients</span>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl">
                    <div className="text-primary"><TrendingUp size={24} /></div>
                    <span className="font-semibold">10-15% commission for you</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    onClick={handleCopy}
                    className={`flex-1 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg ${
                      isCopied 
                        ? 'bg-green-500 text-white shadow-green-500/25' 
                        : 'bg-primary text-white shadow-primary/25 hover:-translate-y-1'
                    }`}
                  >
                    {isCopied ? <><CheckCircle2 size={24} /> Copied!</> : <><Copy size={24} /> Copy to Clipboard</>}
                  </button>
                  <button
                    onClick={() => {
                      setGeneratedCode("");
                      setClinicName("");
                    }}
                    className="px-8 py-4 rounded-2xl bg-white border-2 border-border text-foreground font-bold hover:border-gray-300 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
