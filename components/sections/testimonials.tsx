"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote, ArrowLeft, ArrowRight, Users, TrendingUp } from "lucide-react"
import type { Testimonial } from "@/types"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { useParallax } from "@/hooks/use-parallax"
import { useState, useEffect } from "react"
import { staggerContainer, staggerItem, cardHover } from "@/lib/animations"

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "María González",
    role: "Gerente de Ventas",
    company: "Comercial Del Valle",
    content: "Excelente servicio! Siempre puntuales y muy profesionales. Han sido nuestra empresa de transporte de confianza por más de 2 años.",
    rating: 5
  },
  {
    id: "2", 
    name: "Carlos Rodríguez",
    role: "Propietario",
    company: "Restaurante La Cocina",
    content: "El mejor servicio de transporte de la región. Muy responsables con las entregas y el personal siempre muy amable.",
    rating: 5
  },
  {
    id: "3",
    name: "Ana Martínez", 
    role: "Coordinadora Logística",
    company: "Distribuidora Central",
    content: "Confiabilidad total. Nunca hemos tenido problemas con los horarios y sus tarifas son muy competitivas.",
    rating: 5
  },
  {
    id: "4",
    name: "Roberto Silva",
    role: "Director",
    company: "Empresa Familiar",
    content: "Servicio personalizado y atención de primera. Recomiendo ampliamente sus servicios de transporte empresarial.",
    rating: 5
  },
  {
    id: "5",
    name: "Lucía Fernández",
    role: "Administradora",
    company: "Clínica San Rafael",
    content: "Transportan nuestros equipos médicos con el mayor cuidado. Excelente servicio especializado y muy confiables.",
    rating: 5
  },
  {
    id: "6",
    name: "Diego Herrera",
    role: "Coordinador",
    company: "Eventos y Más",
    content: "Perfectos para eventos corporativos. Siempre llegan a tiempo y su flota está en excelentes condiciones.",
    rating: 5
  }
]

function StarRating({ rating, size = "normal" }: { rating: number, size?: "small" | "normal" | "large" }) {
  const sizeClasses = {
    small: "w-3 h-3",
    normal: "w-4 h-4", 
    large: "w-6 h-6"
  }

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <motion.div
          key={star}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: star * 0.1, type: "spring", stiffness: 300 }}
        >
          <Star
            className={`${sizeClasses[size]} ${
              star <= rating 
                ? "fill-yellow-400 text-yellow-400" 
                : "text-gray-300"
            }`}
          />
        </motion.div>
      ))}
    </div>
  )
}

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const { ref: parallaxRef, y } = useParallax({ speed: 0.2 })

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % 3) // Show first 3 in carousel
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const featuredTestimonials = testimonials.slice(0, 3)
  const gridTestimonials = testimonials.slice(3)

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-blue-50/50">
      {/* Background Elements */}
            <motion.div
        ref={parallaxRef as any}
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-32 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-32 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-white/20 mb-4">
              <Users className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Testimonios</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-900">Lo Que Dicen</span>
              <span className="block text-gradient">Nuestros Clientes</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestro{" "}
              <span className="text-gradient-accent font-semibold">mayor logro</span>.
              Estas son sus experiencias reales.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Featured Testimonial Carousel */}
        <ScrollReveal delay={0.2} className="mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative glass-card rounded-3xl p-12 border border-white/20">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Quote Icon */}
                <motion.div 
                  className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-8"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote size={28} className="text-white" />
                </motion.div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <StarRating rating={featuredTestimonials[currentTestimonial].rating} size="large" />
                </div>

                {/* Content */}
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-8 leading-relaxed italic">
                  "{featuredTestimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author */}
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-gray-900">
                    {featuredTestimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-gray-600">
                    {featuredTestimonials[currentTestimonial].role} en{" "}
                    <span className="text-gradient-accent font-semibold">
                      {featuredTestimonials[currentTestimonial].company}
                    </span>
                  </p>
                </div>
              </motion.div>

              {/* Navigation */}
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + 3) % 3)}
                  className="w-12 h-12 bg-white/50 hover:bg-white/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ArrowLeft size={20} className="text-gray-600" />
                </button>
                
                <div className="flex gap-2 items-center">
                  {featuredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? "bg-gradient-primary" 
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % 3)}
                  className="w-12 h-12 bg-white/50 hover:bg-white/80 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <ArrowRight size={20} className="text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Additional Testimonials Grid */}
        <ScrollReveal delay={0.4}>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {gridTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="group cursor-pointer"
              >
                <div className="h-full glass-card rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300">
                  <div className="mb-4">
                    <Quote size={20} className="text-blue-500 opacity-60" />
                  </div>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gradient-accent font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                    
                    <StarRating rating={testimonial.rating} size="small" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Enhanced Trust indicators */}
        <ScrollReveal delay={0.6}>
          <div className="glass-card rounded-3xl p-12 border border-white/20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
            >
              {[
                { 
                  number: "1000+", 
                  label: "Clientes Satisfechos",
                  icon: Users,
                  color: "text-blue-500"
                },
                { 
                  number: "5.0", 
                  label: "Calificación Promedio",
                  icon: Star,
                  color: "text-yellow-500"
                },
                { 
                  number: "99.8%", 
                  label: "Puntualidad",
                  icon: TrendingUp,
                  color: "text-emerald-500"
                },
                { 
                  number: "24/7", 
                  label: "Servicio Disponible",
                  icon: Quote,
                  color: "text-purple-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-4">
                    <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}