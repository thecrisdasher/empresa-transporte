import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format for WhatsApp (international format)
  if (cleaned.startsWith('57')) {
    return cleaned
  }
  
  if (cleaned.startsWith('3')) {
    return `57${cleaned}`
  }
  
  return `57${cleaned}`
}

export function generateWhatsAppUrl(phone: string, message: string): string {
  const formattedPhone = formatPhoneNumber(phone)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${formattedPhone}?text=${encodedMessage}`
}