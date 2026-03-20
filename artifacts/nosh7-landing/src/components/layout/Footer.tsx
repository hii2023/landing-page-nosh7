import logoImg from "/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <img src={logoImg} alt="Nosh7 Logo" className="h-10 w-10 rounded-full object-cover" />
            <span className="font-display font-bold text-2xl tracking-tight">
              Nosh<span className="text-accent">7</span>
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
            <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Partner Program</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          
          {/* Location */}
          <div className="text-gray-400 flex items-center gap-2">
            📍 Satellite, Ahmedabad, Gujarat 🇮🇳
          </div>
        </div>
        
        <div className="h-px bg-gray-800 mb-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Nosh7. All rights reserved.</p>
          <p className="flex items-center gap-1">Pure Veg Always 🌱</p>
        </div>
      </div>
    </footer>
  );
}
