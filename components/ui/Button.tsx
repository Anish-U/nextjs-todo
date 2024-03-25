"use client";

import { FC, ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
}

const Button: FC<ButtonProps> = ({ type, children, onClick, actionButton }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={clsx(
          actionButton && "bg-orange-700 rounded-full p-2 text-white",
          "bg-orange-700 px-2 text-white"
        )}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
