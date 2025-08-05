"use client"

import { motion } from "framer-motion"
import { Truck, ArrowRight, CheckCircle, Play, Zap, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { generateWhatsAppUrl } from "@/lib/utils"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { MagneticButton } from "@/components/effects/magnetic-button"
import { FloatingParticles } from "@/components/effects/particle-field"

import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem } from "@/lib/animations"

export function HeroSection() {

  const handleContactClick = () => {
    const url = generateWhatsAppUrl("573207277421", "Hola, estoy interesado en los servicios de Transporte Nacional G6G.")
    window.open(url, "_blank")
  }

  const scrollToServices = () => {
    const serviciosElement = document.getElementById("servicios")
    if (serviciosElement) {
      const offsetTop = serviciosElement.offsetTop - 80 // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 mesh-gradient opacity-20" />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <motion.path
            d="M200,400 Q600,100 1000,400 T1600,400"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,200 Q400,500 800,200 T1200,200"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(219, 89%, 52%)" />
              <stop offset="100%" stopColor="hsl(266, 100%, 65%)" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(189, 94%, 55%)" />
              <stop offset="100%" stopColor="hsl(219, 89%, 52%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="section-container py-8 pt-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={staggerItem}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card glow-primary border border-white/20"
            >
              <div className="w-2 h-2 bg-gradient-primary rounded-full animate-pulse-slow" />
              <span className="text-sm font-medium text-gray-700">
                Empresa líder en transporte
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-6">
              <motion.h1
                variants={staggerItem}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
              >
                <span className="block text-gray-900">Transporte</span>
                <span className="block text-gradient">Nacional G&G</span>
              </motion.h1>

              <motion.p
                variants={staggerItem}
                className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              >
                Conectamos destinos con{" "}
                <span className="text-gradient-accent font-semibold">seguridad</span>,{" "}
                <span className="text-gradient-accent font-semibold">puntualidad</span> y el mejor servicio.
                <br />
                <span className="text-lg text-gray-500">
                  Tu tranquilidad es nuestro compromiso en cada viaje.
                </span>
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              variants={staggerItem}
              className="flex flex-col sm:flex-row gap-6"
            >
              <MagneticButton
                onClick={handleContactClick}
                className="group relative overflow-hidden bg-gradient-primary text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Zap size={20} />
                  Solicitar Servicio
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </MagneticButton>

              <motion.button
                onClick={scrollToServices}
                className="group flex items-center gap-3 px-8 py-4 rounded-2xl glass-card border border-white/20 hover:border-blue-200 transition-all duration-300 text-gray-700 font-semibold text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play size={18} className="text-blue-600" />
                Ver Servicios
              </motion.button>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              variants={staggerItem}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { 
                  number: "1000+", 
                  label: "Clientes Satisfechos",
                  icon: CheckCircle,
                  color: "text-emerald-500"
                },
                { 
                  number: "5+", 
                  label: "Años de Experiencia",
                  icon: Shield,
                  color: "text-blue-500"
                },
                { 
                  number: "24/7", 
                  label: "Servicio Disponible",
                  icon: Clock,
                  color: "text-purple-500"
                }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="mb-2">
                    <stat.icon className={`w-8 h-8 mx-auto ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Visual Section */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="relative lg:ml-8"
          >
            {/* Main Visual Card */}
            <div className="relative">
              {/* Main Content Card */}
              <motion.div 
                className="relative z-20 glass-card p-12 rounded-3xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative">
                  {/* Central Icon with Glow */}
                  <motion.div 
                    className="flex items-center justify-center h-64 bg-transparent rounded-2xl relative overflow-hidden mb-8"
                    animate={{ 
                      boxShadow: [
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                        "0 0 40px rgba(147, 51, 234, 0.4)",
                        "0 0 20px rgba(59, 130, 246, 0.3)",
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-4 border border-white/20 rounded-2xl"
                    />
                    <Image 
                      src="/logo1.png" 
                      alt="Transporte Nacional G6G Logo" 
                      width={260} 
                      height={260} 
                      className="relative z-10" 
                    />
                  </motion.div>

                  {/* Service Features */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Shield, label: "Seguro", color: "bg-emerald-500" },
                      { icon: Clock, label: "Puntual", color: "bg-blue-500" },
                      { icon: CheckCircle, label: "Confiable", color: "bg-purple-500" },
                      { icon: Zap, label: "Rápido", color: "bg-orange-500" }
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.label}
                        className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        <div className={`w-10 h-10 ${feature.color} rounded-lg flex items-center justify-center`}>
                          <feature.icon size={20} className="text-white" />
                        </div>
                        <span className="font-semibold text-gray-700">{feature.label}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center shadow-xl z-30"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <CheckCircle size={32} className="text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center shadow-xl z-30"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Zap size={24} className="text-white" />
              </motion.div>

              {/* Background Decoration */}
              <motion.div 
                className="absolute inset-0 bg-gradient-primary rounded-3xl transform translate-x-8 translate-y-8 opacity-20 z-10"
                animate={{ 
                  rotate: [0, 1, 0],
                  scale: [1, 1.02, 1] 
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}