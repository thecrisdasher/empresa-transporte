export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Benefit {
  id: string
  title: string
  description: string
  icon: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

export interface ContactInfo {
  phone: string
  email: string
  address: string
  whatsappMessage: string
}

export interface SectionProps {
  id?: string
  className?: string
  children?: React.ReactNode
}