import React from "react";
import type { UseFormRegister } from "react-hook-form";
import type { FieldErrors } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean | string;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  placeholder,
  required,
  register,
  errors,
  className = "",
}) => {
    const validationRules =
    label === "Phone Number"
    ? { 
        required: "Phone number is required", 
        minLength: { value: 10, message: "Enter 10 digits only" }, 
        maxLength: { value: 10, message: "Enter 10 digits only" }, 
        pattern: { value: /^\d{10}$/, message: "Only numbers allowed" } 
      }
    : { required };


  return (
    <div className="relative mb-8">
      <label
        className={`block text-sm font-medium text-purple-600 mb-1 absolute bg-white text-center bottom-7 left-3 pl-1`}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type={type}
        {...register(name, { ...validationRules })}
        placeholder={placeholder}
        className={`w-full border lg:text-md text-sm border-gray-300 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 ${className}`}
      />

      {errors[name] && (
        <p className="text-red-500 lg:text-sm text-xs absolute right-2 top-3">

          {errors[name]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
