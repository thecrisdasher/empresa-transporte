"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Truck, 
  Users, 
  Package, 
  Clock,
  Shield,
  MapPin,
  ArrowRight,
  Star,
  Zap
} from "lucide-react"
import type { Service } from "@/types"
import { ScrollReveal, StaggeredReveal } from "@/components/effects/scroll-reveal"
import { MagneticButton } from "@/components/effects/magnetic-button"
import { useParallax } from "@/hooks/use-parallax"
import { fadeInUp, staggerContainer, staggerItem, cardHover } from "@/lib/animations"

const services: Service[] = [
  {
    id: "transporte-personal",
    title: "Transporte Personal",
    description: "Servicios de transporte cómodo y seguro para personas, con vehículos modernos y conductores experimentados.",
    icon: "Users",
    features: [
      "Vehículos con aire acondicionado",
      "Conductores certificados",
      "Servicio puerta a puerta",
      "Tarifas competitivas"
    ]
  },
  {
    id: "carga-paquetes",
    title: "Carga y Paquetes",
    description: "Transporte especializado para mercancías y paquetes con garantía de entrega puntual y segura.",
    icon: "Package",
    features: [
      "Seguimiento en tiempo real",
      "Embalaje especializado",
      "Seguro de mercancía",
      "Entrega programada"
    ]
  },
  {
    id: "servicio-empresarial",
    title: "Servicio Empresarial",
    description: "Soluciones de transporte corporativo para empresas con planes personalizados y atención preferencial.",
    icon: "Truck",
    features: [
      "Planes corporativos",
      "Facturación empresarial",
      "Servicio 24/7",
      "Gestión de rutas"
    ]
  },
  {
    id: "rutas-programadas",
    title: "Rutas Programadas",
    description: "Servicios regulares en rutas establecidas con horarios fijos y tarifas preferenciales.",
    icon: "Clock",
    features: [
      "Horarios establecidos",
      "Rutas optimizadas",
      "Descuentos por frecuencia",
      "Reservas anticipadas"
    ]
  },
  {
    id: "transporte-seguro",
    title: "Transporte Seguro",
    description: "Servicios especializados para cargas valiosas con medidas de seguridad adicionales.",
    icon: "Shield",
    features: [
      "Vigilancia especializada",
      "Vehículos blindados",
      "GPS y monitoreo",
      "Pólizas ampliadas"
    ]
  },
  {
    id: "cobertura-nacional",
    title: "Cobertura Nacional",
    description: "Servicios de transporte a nivel nacional con amplia red de distribución y aliados estratégicos.",
    icon: "MapPin",
    features: [
      "Red nacional",
      "Aliados estratégicos",
      "Logística integral",
      "Seguimiento completo"
    ]
  }
]

const serviceColors = [
  "from-blue-500 to-purple-600",
  "from-emerald-500 to-teal-600", 
  "from-orange-500 to-red-600",
  "from-purple-500 to-pink-600",
  "from-indigo-500 to-blue-600",
  "from-cyan-500 to-blue-600"
]

const iconMap = {
  Users,
  Package,
  Truck,
  Clock,
  Shield,
  MapPin
}

export function ServicesSection() {
  const { ref: parallaxRef, y } = useParallax({ speed: 0.3 })

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50/30">
      {/* Background Elements */}
            <motion.div
        ref={parallaxRef as any}
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-white/20 mb-4">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Servicios Premium</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-900">Nuestros</span>
              <span className="block text-gradient">Servicios</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Soluciones de transporte diseñadas para{" "}
              <span className="text-gradient-accent font-semibold">cada necesidad</span>,
              con la calidad y confiabilidad que esperas.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]
            const colorGradient = serviceColors[index % serviceColors.length]
            
            return (
              <ScrollReveal
                key={service.id}
                delay={index * 0.1}
                className="h-full"
              >
                <motion.div
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className="h-full group cursor-pointer"
                >
                  <div className="relative h-full glass-card rounded-3xl border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-500">
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                    
                    {/* Content */}
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* Icon */}
                      <div className="mb-6">
                        <motion.div 
                          className={`relative w-16 h-16 bg-gradient-to-br ${colorGradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: [0, -10, 10, 0] }}
                          transition={{ duration: 0.5 }}
                        >
                          <IconComponent size={28} className="text-white" />
                          
                          {/* Glow effect */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${colorGradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
                        </motion.div>
                      </div>

                      {/* Title & Description */}
                      <div className="mb-6 flex-grow">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gradient transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            className="flex items-center gap-3 text-sm"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 + featureIndex * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-r ${colorGradient} rounded-full flex-shrink-0`} />
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.div
                        className="mt-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <MagneticButton
                          className={`w-full flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r ${colorGradient} text-white rounded-xl font-semibold hover:shadow-lg transition-shadow duration-300`}
                        >
                          <span>Más información</span>
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </MagneticButton>
                      </motion.div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                      <IconComponent size={40} className="text-gray-400" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <ScrollReveal delay={0.6} className="mt-20 text-center">
          <div className="glass-card rounded-3xl p-12 border border-white/20">
            <motion.div
              className="max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem} className="mb-6">
                <Zap className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  ¿Necesitas un servicio personalizado?
                </h3>
                <p className="text-lg text-gray-600">
                  Contáctanos y diseñamos una solución de transporte específica para tus necesidades
                </p>
              </motion.div>

              <motion.div variants={staggerItem}>
                <MagneticButton className="bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl transition-shadow duration-300">
                  <span className="flex items-center gap-3">
                    <Zap size={20} />
                    Solicitar Cotización
                    <ArrowRight size={20} />
                  </span>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}