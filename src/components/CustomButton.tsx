import { cn } from "@/lib/utils"
import Link from "next/link"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  href?: string
  className?: string
  bg?: string
}

export function CustomButton({ 
  children, 
  variant = 'primary', 
  href, 
  bg,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = "relative font-mono text-lg font-light tracking-tight leading-[130%] py-[17px] px-6 text-center inline-block transition-all duration-300 ease-out select-none transform-gpu preserve-3d"
  
  const variants = {
    primary: "bg-[#4027ff] border-2 border-[#4027ff] text-white hover:bg-white hover:text-black hover:border-black",
    secondary: "bg-transparent border-2 border-[#4027ff] text-[#4027ff]"
  }

  const buttonStyles = cn(
    baseStyles,
    variants[variant],
    className
  )

  const afterStylesWhite = "after:content-[''] after:block after:absolute after:inset-[-2px] after:border-2 after:border-white after:opacity-0 after:transition-all after:duration-300 after:ease-out after:translate-z-[-1px] hover:after:opacity-100"
  const afterStyleBlack = ""

  const afterStyles = bg === 'white'? afterStylesWhite : afterStyleBlack

  if (href) {
    return (
      <Link href={href} className={cn(buttonStyles, afterStyles)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={cn(buttonStyles, afterStyles)} {...props}>
      {children}
    </button>
  )
}

