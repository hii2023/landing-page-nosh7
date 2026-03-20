import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CustomPlans } from "@/components/sections/CustomPlans";
import { ConditionSpecific } from "@/components/sections/ConditionSpecific";
import { Testimonials } from "@/components/sections/Testimonials";
import { PartnerForm } from "@/components/sections/PartnerForm";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFAB } from "@/components/WhatsAppFAB";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <CustomPlans />
        <ConditionSpecific />
        <Testimonials />
        <PartnerForm />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
