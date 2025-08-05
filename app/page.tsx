import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { BenefitsSection } from "@/components/sections/benefits"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { ContactSection } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="inicio">
        <HeroSection />
      </section>

      {/* Services Section */}
      <section id="servicios">
        <ServicesSection />
      </section>

      {/* Benefits Section */}
      <section id="beneficios">
        <BenefitsSection />
      </section>

      {/* Testimonials Section */}
      <section id="testimonios">
        <TestimonialsSection />
      </section>

      {/* Contact Section */}
      <section id="contacto">
        <ContactSection />
      </section>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Float Button */}
      <WhatsAppFloat />
    </div>
  )
}