"use client"

import { forwardRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormErrors } from "./form-errors";

interface FormInputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>
  className?: string;
  defaultValue?: string;
  onBlur?: () => void;
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({
  id,
  label,
  type,
  placeholder,
  required,
  disabled,
  errors,
  className,
  defaultValue = " ",
  onBlur,
  value,
  onChange
}, ref) => {
  const { pending } = useFormStatus();



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e); // Pasa el evento al manejador onChange proporcionado por el usuario
    }
  };

  return (
    <div className="space-y-2 ">
      <div className="space-y-1">
        {label ? (
          <Label
            htmlFor={id}
            className="text-sm font-msembold text-white"
          >
            {label}
          </Label>
        ) : null}
        <Input
          onBlur={onBlur}
          value={value} // Utiliza la prop value para controlar el valor del input
          ref={ref}
          required={required}
          name={id}
          id={id}
          placeholder={placeholder}
          type={type}
          disabled={pending || disabled}
          onChange={handleChange}
          className={cn(
            "text-sm px-2 py-1 h-7 ",
            className
          )}
          aria-describedby={`${id}-error`}
        />
      </div>
      <FormErrors
        id={id}
        errors={errors}
      />
    </div>
  )
});

FormInput.displayName = "FomInput"