import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WHATSAPP_URL =
  "https://wa.me/919712989498?text=Hi+Team+Nosh7!+I+am+interested+in+the+partner+program.";

export function WhatsAppFAB() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:shadow-xl hover:shadow-[#25D366]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <FaWhatsapp size={30} />
    </motion.a>
  );
}
