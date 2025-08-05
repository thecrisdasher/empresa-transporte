"use client"

import { MessageCircle, Phone, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { generateWhatsAppUrl } from "@/lib/utils"
import { useState } from "react"

interface WhatsAppFloatProps {
  phone?: string
  message?: string
  className?: string
}

export function WhatsAppFloat({ 
  phone = "573207277421", 
  message = "Hola, estoy interesado en los servicios de Transporte Nacional G6G.",
  className = ""
}: WhatsAppFloatProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = () => {
    const url = generateWhatsAppUrl(phone, message)
    window.open(url, "_blank")
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Tooltip */}
      <AnimatePresence>
        {(isHovered || showTooltip) && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute right-20 bottom-2 mb-2"
          >
            <div className="glass-card px-4 py-3 rounded-2xl border border-white/20 shadow-xl">
              <div className="flex items-center gap-3 whitespace-nowrap">
                <Zap size={16} className="text-green-500" />
                <span className="text-sm font-medium text-gray-700">
                  ¡Escríbenos ahora!
                </span>
              </div>
              {/* Arrow */}
              <div className="absolute right-[-8px] top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-white/80 border-t-8 border-t-transparent border-b-8 border-b-transparent" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 2
        }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 rounded-full bg-green-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Pulse Rings */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400/30"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-green-400/20"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0, 0.2],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>

        {/* Main Button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300 group-hover:from-green-500 group-hover:to-green-700">
          <motion.div
            animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }}
            transition={{ duration: 0.5 }}
          >
            <MessageCircle size={24} className="text-white" />
          </motion.div>
          
          {/* Notification Badge */}
          <motion.div
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-xs font-bold text-white">!</span>
          </motion.div>
        </div>
      </motion.button>

      {/* Auto tooltip after delay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        onAnimationComplete={() => {
          setTimeout(() => setShowTooltip(true), 500)
          setTimeout(() => setShowTooltip(false), 3000)
        }}
      />
    </div>
  )
}