import React, { TextareaHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  variant?: "default" | "outlined" | "filled";
  inputSize?: "sm" | "md" | "lg";
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      className = "",
      containerClassName = "",
      labelClassName = "",
      errorClassName = "",
      variant = "default",
      inputSize = "md",
      disabled,
      ...props
    },
    ref
  ) => {
    const getVariantClasses = () => {
      switch (variant) {
        case "outlined":
          return "border border-gray-300 bg-transparent focus:border-blue-500";
        case "filled":
          return "border border-transparent bg-gray-100 focus:bg-transparent focus:border-blue-500";
        default:
          return "border border-gray-300 bg-white focus:border-blue-500";
      }
    };

    const getSizeClasses = () => {
      switch (inputSize) {
        case "sm":
          return "px-2 py-1 text-sm";
        case "lg":
          return "px-4 py-3 text-lg";
        default:
          return "px-3 py-2 text-base";
      }
    };

    const textareaClasses = twMerge(
      "w-full rounded-md outline-none transition-colors resize-y min-h-[100px]",
      getVariantClasses(),
      getSizeClasses(),
      disabled ? "opacity-60 cursor-not-allowed" : "",
      error ? "border-red-500 focus:border-red-500" : "",
      className
    );

    return (
      <div className={`flex flex-col space-y-1 ${containerClassName}`}>
        {label && (
          <label
            className={twMerge(
              "text-sm font-medium text-gray-700",
              disabled ? "opacity-60" : "",
              labelClassName
            )}
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={textareaClasses}
          disabled={disabled}
          {...props}
        />
        {error && (
          <p className={twMerge("text-sm text-red-500", errorClassName)}>
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
