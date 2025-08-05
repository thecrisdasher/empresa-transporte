"use client"

import { motion } from "framer-motion"
import {
  Truck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react"
import { generateWhatsAppUrl } from "@/lib/utils"
import { Logo } from "@/components/logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsAppClick = () => {
    const url = generateWhatsAppUrl("573207277421", "Hola, me interesa conocer más sobre sus servicios.")
    window.open(url, "_blank")
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="p-0 bg-transparent rounded-lg">
                <Logo size="md" />
              </div>
              <h3 className="text-xl font-bold">Transporte Nacional G&G</h3>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tu empresa de confianza para servicios de transporte seguro,
              puntual y profesional en toda Colombia.
            </p>

            <div className="flex gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Transporte Personal
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Carga y Paquetes
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicio Empresarial
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Rutas Programadas
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Transporte Seguro
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Cobertura Nacional
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <button
                  onClick={handleWhatsAppClick}
                  className="hover:text-white transition-colors text-left"
                >
                  WhatsApp
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Políticas de Privacidad
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-blue-400" />
                <span>+57 320 727 7421</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-blue-400" />
                <span>info@transportenacionalg&g.com</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-400 mt-1" />
                <div>
                  <p>Calle Principal #123</p>
                  <p>Ciudad, Colombia</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-2">Disponible 24/7</p>
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                <Phone size={16} />
                Contactar Ahora
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Transporte Nacional G6G. Todos los derechos reservados.
            </p>
            <p className="text-gray-400 text-sm text-center">
              <a
                href="https://portafolio-mejorllamaacris.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Mejor Llama A Cris
              </a>
            </p>

            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}