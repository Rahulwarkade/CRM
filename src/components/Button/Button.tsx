import React from "react";

interface ButtonProps {
    className?: string;
    type?: "button" | "submit" | "reset";
    textValue: string;
}

const Button: React.FC<ButtonProps> = ({ className, type = "submit", textValue }) => {
    return (
        <button
            type={type}
            className={`w-full h-full rounded-[28px] bg-blue-3e91ff text-white text-base font-semibold outline-none px-6 py-[18px] shadow-[0_4px_10px_#00000040] ${className}`}
        >
            {textValue}
        </button>
    );
};

export default Button;
