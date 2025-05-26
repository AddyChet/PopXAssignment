import React from 'react'
import type { ButtonProps } from '../../utils/Interfaces';


const Button: React.FC<ButtonProps> = (props) => {
    const {type, text, variant, onClick, className} = props

     const variantClass =
    variant === "primary"
      ? "bg-button-600 text-white hover:bg-button-700 hover:shadow-lg transition-all duration-500 ease-in-out"
      : "bg-button-300 text-button-500 hover:bg-button-400 hover:text-button-600 hover:shadow-md transition-all duration-500 ease-in-out";

    // const sizeClass = 
    //     size === "sm" ? " py-2 px-4" : size === "md" ? : size === "lg" ? : ""
        
  return (
    <button type={type} onClick={onClick} className={`${variantClass} rounded-md ${className}`}>{text}</button>
  )
}

export default Button