import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, LANGUAGES, Language } from "@/contexts/LanguageContext";
import logoImg from "/logo.png";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = [
    { name: t.nav.benefits, href: "#benefits" },
    { name: t.nav.howItWorks, href: "#how-it-works" },
    { name: t.nav.customPlans, href: "#custom-plans" },
    { name: t.nav.testimonials, href: "#testimonials" },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img src={logoImg} alt="Nosh7 Logo" className="h-12 w-12 rounded-full object-cover" />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Language Selector */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.label}</span>
                <ChevronDown size={14} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-xl border border-border overflow-hidden z-50"
                  >
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => { setLang(l.code as Language); setLangOpen(false); }}
                        className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium hover:bg-green-50 hover:text-primary transition-colors text-left ${
                          lang === l.code ? "bg-green-50 text-primary" : "text-foreground"
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                        {lang === l.code && <span className="ml-auto text-primary text-xs">✓</span>}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col items-end text-right border-l border-border pl-3">
              <span className="text-xs font-bold text-primary">🌱 {t.nav.pureVeg}</span>
              <span className="text-xs font-bold text-yellow-600">⭐ {t.nav.tagline}</span>
            </div>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            >
              {t.nav.partnerNow}
            </a>
          </div>

          {/* Mobile: lang + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Language Selector */}
            <div className="relative" ref={undefined}>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value as Language)}
                className="text-sm border border-border rounded-lg px-2 py-1.5 bg-white font-medium appearance-none pr-6 cursor-pointer"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>{l.flag} {l.label}</option>
                ))}
              </select>
            </div>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-border overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-border my-2" />
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-lg"
              >
                {t.nav.partnerNow}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
