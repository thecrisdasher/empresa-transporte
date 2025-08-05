  "use client"

  import { useState, useEffect } from "react"
  import { motion, AnimatePresence } from "framer-motion"
  import { Menu, X } from "lucide-react"
  import { Button } from "@/components/ui/button"
  import { Logo } from "@/components/logo"
  import { generateWhatsAppUrl } from "@/lib/utils"

  interface NavItem {
    name: string
    href: string
    label: string
  }

  const navItems: NavItem[] = [
    { name: "Inicio", href: "#inicio", label: "Inicio" },
    { name: "Servicios", href: "#servicios", label: "Servicios" },
    { name: "Nosotros", href: "#beneficios", label: "¿Por qué elegirnos?" },
    { name: "Testimonios", href: "#testimonios", label: "Testimonios" },
    { name: "Contacto", href: "#contacto", label: "Contacto" }
  ]

  export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("inicio")

    // Handle scroll effect
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY
        setScrolled(scrollPosition > 50)

        // Detect active section
        const sections = navItems.map(item => item.href.substring(1))
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(section)
              break
            }
          }
        }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const handleNavClick = (href: string) => {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      
      if (element) {
        const offsetTop = element.offsetTop - 80 // Account for navbar height
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth"
        })
      }
      
      setIsOpen(false)
    }

    const handleWhatsAppClick = () => {
      const url = generateWhatsAppUrl("573207277421", "Hola, estoy interesado en los servicios de Transporte Nacional G&G.")
      window.open(url, "_blank")
    }

    return (
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
                 className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent"
      >
        <div className="container mx-auto px-4 bg-transparent">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* Logo and Company Name */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Logo Component - Edita components/logo.tsx para cambiar el logo */}
              <Logo size="md" />
              
              <div className="flex flex-col">
                <h1 className={`text-lg lg:text-xl font-bold transition-colors ${
                  scrolled ? "text-gray-900" : "text-gray-900"
                }`}>
                  Transporte Nacional G&G
                </h1>
                <p className={`text-xs lg:text-sm transition-colors ${
                  scrolled ? "text-blue-600" : "text-blue-600"
                }`}>
                  Conectando destinos
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:scale-105 ${
                        activeSection === item.href.substring(1)
                          ? scrolled 
                            ? "text-blue-600" 
                            : "text-blue-600"
                          : scrolled 
                            ? "text-gray-700 hover:text-blue-600" 
                            : "text-gray-700 hover:text-blue-600"
                      }`}
                    >
                      {item.name}
                      {/* Active indicator */}
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          layoutId="activeSection"
                          className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                            scrolled ? "bg-blue-600" : "bg-blue-600"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleWhatsAppClick}
                className={`${
                  scrolled 
                    ? "bg-blue-600 hover:bg-blue-700 text-white" 
                    : "bg-white text-blue-600 hover:bg-gray-100"
                } transition-all duration-300 hover:scale-105`}
              >
                Contactar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors ${
                scrolled ? "text-gray-900 hover:bg-gray-100" : "text-gray-900 hover:bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                                 className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-lg"
              >
                <div className="py-4 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-4 py-3 text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors font-medium ${
                        activeSection === item.href.substring(1) 
                          ? "bg-blue-50 text-blue-600 border-r-2 border-blue-600" 
                          : ""
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                  
                  <div className="px-4 py-2">
                    <Button
                      onClick={handleWhatsAppClick}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Contactar por WhatsApp
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    )
  }