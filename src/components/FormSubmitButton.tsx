"use client";

import { ComponentProps } from "react";

// Add type (can use interface)
type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({ children, className }: FormSubmitButtonProps) => {
  return <button>{children}</button>;
};

export default FormSubmitButton;
