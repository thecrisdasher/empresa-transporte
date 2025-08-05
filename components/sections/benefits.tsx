"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Headphones, 
  Award,
  Zap
} from "lucide-react"
import type { Benefit } from "@/types"

const benefits: Benefit[] = [
  {
    id: "puntualidad",
    title: "Puntualidad Garantizada",
    description: "Cumplimos con los horarios establecidos. Nuestro compromiso es llegar a tiempo, siempre.",
    icon: "Clock"
  },
  {
    id: "seguridad",
    title: "Máxima Seguridad",
    description: "Vehículos en perfectas condiciones y conductores certificados para tu tranquilidad total.",
    icon: "Shield"
  },
  {
    id: "atencion",
    title: "Atención 24/7",
    description: "Estamos disponibles las 24 horas del día, los 7 días de la semana para atenderte.",
    icon: "Headphones"
  },
  {
    id: "experiencia",
    title: "Años de Experiencia",
    description: "Más de 5 años brindando servicios de transporte con excelencia y profesionalismo.",
    icon: "Award"
  },
  {
    id: "tecnologia",
    title: "Tecnología Avanzada",
    description: "Sistemas de seguimiento GPS y aplicaciones móviles para mayor control y comunicación.",
    icon: "Zap"
  },
  {
    id: "confianza",
    title: "Confianza Total",
    description: "Miles de clientes satisfechos nos respaldan. Tu satisfacción es nuestra prioridad.",
    icon: "CheckCircle"
  }
]

const iconMap = {
  Clock,
  Shield,
  Headphones,
  Award,
  Zap,
  CheckCircle
}

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por Qué Elegirnos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia y la satisfacción del cliente
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon as keyof typeof iconMap]
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-6">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-fit group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                    <IconComponent size={40} className="text-blue-600" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Listo para viajar con nosotros?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Únete a miles de clientes que confían en nuestros servicios de transporte
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Sin costo de registro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Atención inmediata</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={20} />
              <span>Tarifas competitivas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}