"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  User,
  Building,
  Zap,
  ArrowRight,
  Shield,
  AlertCircle,
  Package
} from "lucide-react"
import { generateWhatsAppUrl } from "@/lib/utils"
import { ScrollReveal } from "@/components/effects/scroll-reveal"
import { MagneticButton } from "@/components/effects/magnetic-button"
import { useParallax } from "@/hooks/use-parallax"
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations"

const contactSchema = z.object({
  name: z.string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede exceder 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras y espacios"),
  email: z.string()
    .email("Email inválido")
    .min(5, "Email muy corto")
    .max(100, "Email muy largo"),
  phone: z.string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "Teléfono muy largo")
    .regex(/^[\d\s\-\+\(\)]+$/, "Formato de teléfono inválido"),
  service: z.string().min(1, "Selecciona un servicio"),
  message: z.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede exceder 500 caracteres")
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  { value: "transporte-personal", label: "Transporte Personal", icon: User },
  { value: "carga-paquetes", label: "Carga y Paquetes", icon: Package },
  { value: "servicio-empresarial", label: "Servicio Empresarial", icon: Building },
  { value: "rutas-programadas", label: "Rutas Programadas", icon: Clock },
  { value: "transporte-seguro", label: "Transporte Seguro", icon: Shield },
  { value: "cobertura-nacional", label: "Cobertura Nacional", icon: MapPin }
]

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    content: "+57 320 727 7421",
    subtitle: "Disponible 24/7",
    color: "text-blue-500",
    bgColor: "bg-blue-100"
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@transportenacionalg6g.com",
    subtitle: "Respuesta en 24 horas",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100"
  },
  {
    icon: MapPin,
    title: "Ubicación",
    content: "Calle Principal #123",
    subtitle: "Ciudad, Colombia",
    color: "text-purple-500",
    bgColor: "bg-purple-100"
  },
  {
    icon: Clock,
    title: "Horarios",
    content: "Lunes - Domingo",
    subtitle: "24 horas disponibles",
    color: "text-orange-500",
    bgColor: "bg-orange-100"
  }
]

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { ref: parallaxRef, y } = useParallax({ speed: 0.3 })

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    watch
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange"
  })

  const watchedFields = watch()

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Find selected service label
    const selectedService = services.find(s => s.value === data.service)?.label || data.service
    
    // Generate enhanced WhatsApp message
    const message = `🚛 *Solicitud de Servicio - Transporte Nacional G6G*

👤 *Datos del Cliente:*
• Nombre: ${data.name}
• Email: ${data.email}
• Teléfono: ${data.phone}

🚚 *Servicio Solicitado:*
• ${selectedService}

💬 *Mensaje:*
${data.message}

---
Enviado desde el sitio web oficial`

    const whatsappUrl = generateWhatsAppUrl("573207277421", message)
    window.open(whatsappUrl, "_blank")
    
    setIsSubmitted(true)
    setIsSubmitting(false)
    reset()
    
    // Reset success message after 8 seconds
    setTimeout(() => setIsSubmitted(false), 8000)
  }

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <motion.div 
        ref={parallaxRef}
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="section-container relative z-10">
        {/* Enhanced Header */}
        <ScrollReveal className="text-center mb-20">
          <motion.div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full border border-white/20 mb-4">
              <MessageSquare className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Contáctanos</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="block text-gray-900">Hablemos de Tu</span>
              <span className="block text-gradient">Proyecto</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte a encontrar la{" "}
              <span className="text-gradient-accent font-semibold">solución perfecta</span>{" "}
              para tus necesidades de transporte.
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Information */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Múltiples Formas de{" "}
                  <span className="text-gradient">Contactarnos</span>
                </h3>
                
                <motion.div 
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 gap-6"
                >
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      variants={staggerItem}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="glass-card rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                        <div className="flex items-start gap-4">
                          <div className={`p-3 ${item.bgColor} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon size={24} className={item.color} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                            <p className="text-gray-700 font-medium mb-1">{item.content}</p>
                            <p className="text-sm text-gray-500">{item.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Enhanced WhatsApp CTA */}
              <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="glass-card rounded-3xl p-8 border border-white/20 bg-gradient-to-br from-green-50 to-emerald-50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Zap size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      ¿Necesitas servicio inmediato?
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      Para servicios urgentes, contáctanos directamente por WhatsApp 
                      y te atenderemos al instante con prioridad.
                    </p>
                  </div>
                </div>

                <MagneticButton
                  onClick={() => {
                    const url = generateWhatsAppUrl("573207277421", "🚨 *SERVICIO URGENTE* - Hola, necesito un servicio de transporte inmediato.")
                    window.open(url, "_blank")
                  }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-3">
                    <MessageSquare size={20} />
                    WhatsApp Directo
                    <ArrowRight size={20} />
                  </span>
                </MagneticButton>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Enhanced Contact Form */}
          <ScrollReveal delay={0.4}>
            <Card className="glass-card border border-white/20 rounded-3xl overflow-hidden shadow-2xl">
              <CardHeader className="text-center bg-gradient-to-br from-blue-50 to-purple-50 pb-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Send size={28} className="text-white" />
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-gray-900">
                  Envíanos tu Consulta
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>
              </CardHeader>
              
              <CardContent className="p-8">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle size={40} className="text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        ¡Mensaje Enviado Exitosamente!
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        Te hemos redirigido a WhatsApp para continuar la conversación. 
                        Nuestro equipo te responderá a la brevedad.
                      </p>
                      
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <CheckCircle size={16} className="text-green-500" />
                        <span>Respuesta garantizada en menos de 2 horas</span>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 1 }}
                    >
                      {/* Form Progress Indicator */}
                      <div className="mb-8">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600">Progreso del formulario</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {Math.round(((Object.keys(watchedFields).filter(key => watchedFields[key as keyof typeof watchedFields]).length) / 5) * 100)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-primary h-2 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ 
                              width: `${((Object.keys(watchedFields).filter(key => watchedFields[key as keyof typeof watchedFields]).length) / 5) * 100}%` 
                            }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                      {/* Form Fields */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 }}
                        >
                          <Label 
                            htmlFor="name" 
                            className={`flex items-center gap-2 mb-2 transition-colors ${
                              focusedField === "name" ? "text-blue-600" : "text-gray-700"
                            }`}
                          >
                            <User size={16} />
                            Nombre Completo *
                          </Label>
                          <Input
                            id="name"
                            {...register("name")}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="Tu nombre completo"
                            className={`transition-all duration-300 ${
                              errors.name 
                                ? "border-red-500 bg-red-50" 
                                : focusedField === "name"
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-300 hover:border-gray-400"
                            }`}
                          />
                          <AnimatePresence>
                            {errors.name && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle size={14} />
                                {errors.name.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>

                        {/* Email Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Label 
                            htmlFor="email"
                            className={`flex items-center gap-2 mb-2 transition-colors ${
                              focusedField === "email" ? "text-blue-600" : "text-gray-700"
                            }`}
                          >
                            <Mail size={16} />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register("email")}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="tu@email.com"
                            className={`transition-all duration-300 ${
                              errors.email 
                                ? "border-red-500 bg-red-50" 
                                : focusedField === "email"
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-300 hover:border-gray-400"
                            }`}
                          />
                          <AnimatePresence>
                            {errors.email && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle size={14} />
                                {errors.email.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Phone Field */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Label 
                            htmlFor="phone"
                            className={`flex items-center gap-2 mb-2 transition-colors ${
                              focusedField === "phone" ? "text-blue-600" : "text-gray-700"
                            }`}
                          >
                            <Phone size={16} />
                            Teléfono *
                          </Label>
                          <Input
                            id="phone"
                            {...register("phone")}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            placeholder="320 123 4567"
                            className={`transition-all duration-300 ${
                              errors.phone 
                                ? "border-red-500 bg-red-50" 
                                : focusedField === "phone"
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-300 hover:border-gray-400"
                            }`}
                          />
                          <AnimatePresence>
                            {errors.phone && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle size={14} />
                                {errors.phone.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>

                        {/* Service Selector */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          <Label 
                            htmlFor="service"
                            className={`flex items-center gap-2 mb-2 transition-colors ${
                              focusedField === "service" ? "text-blue-600" : "text-gray-700"
                            }`}
                          >
                            <Building size={16} />
                            Servicio de Interés *
                          </Label>
                          <select
                            id="service"
                            {...register("service")}
                            onFocus={() => setFocusedField("service")}
                            onBlur={() => setFocusedField(null)}
                            className={`flex h-12 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all duration-300 ${
                              errors.service 
                                ? "border-red-500 bg-red-50" 
                                : focusedField === "service"
                                  ? "border-blue-500 bg-blue-50"
                                  : "border-gray-300 hover:border-gray-400"
                            }`}
                          >
                            <option value="">Selecciona un servicio</option>
                            {services.map((service) => (
                              <option key={service.value} value={service.value}>
                                {service.label}
                              </option>
                            ))}
                          </select>
                          <AnimatePresence>
                            {errors.service && (
                              <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-red-500 text-sm mt-1 flex items-center gap-1"
                              >
                                <AlertCircle size={14} />
                                {errors.service.message}
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>

                      {/* Message Field */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label 
                          htmlFor="message"
                          className={`flex items-center gap-2 mb-2 transition-colors ${
                            focusedField === "message" ? "text-blue-600" : "text-gray-700"
                          }`}
                        >
                          <MessageSquare size={16} />
                          Mensaje *
                          <span className="text-xs text-gray-500 ml-auto">
                            {watchedFields.message?.length || 0}/500
                          </span>
                        </Label>
                        <Textarea
                          id="message"
                          {...register("message")}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Cuéntanos sobre tu necesidad de transporte..."
                          rows={4}
                          className={`transition-all duration-300 resize-none ${
                            errors.message 
                              ? "border-red-500 bg-red-50" 
                              : focusedField === "message"
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-300 hover:border-gray-400"
                          }`}
                        />
                        <AnimatePresence>
                          {errors.message && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-sm mt-1 flex items-center gap-1"
                            >
                              <AlertCircle size={14} />
                              {errors.message.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      {/* Submit Button */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <MagneticButton
                          disabled={isSubmitting || !isValid}
                          className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${
                            isSubmitting || !isValid
                              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                              : "bg-gradient-primary text-white hover:shadow-xl"
                          }`}
                        >
                          <span className="flex items-center justify-center gap-3">
                            {isSubmitting ? (
                              <>
                                <motion.div
                                  animate={{ rotate: 360 }}
                                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                />
                                Enviando...
                              </>
                            ) : (
                              <>
                                <Send size={20} />
                                Enviar Consulta
                                <ArrowRight size={20} />
                              </>
                            )}
                          </span>
                        </MagneticButton>

                        <div className="mt-4 text-center">
                          <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                            <Shield size={14} />
                            Al enviar este formulario, serás redirigido a WhatsApp para continuar la conversación.
                          </p>
                        </div>
                      </motion.div>
                    </motion.form>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}