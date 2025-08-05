import { Truck } from "lucide-react"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}


export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20 lg:w-20 lg:h-20", 
    lg: "w-12 h-14 lg:w-16 lg:h-16"
  }

  return (
    <div className={`flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <img 
        src="/logo1.png" 
        alt="Transporte Nacional G6G Logo" 
        className="w-full h-full object-contain"
        onError={(e) => {
          console.warn('Logo no encontrado en /public/logo1.png')
          e.currentTarget.style.display = 'none'
        }}
      />
    </div>
  )
}
