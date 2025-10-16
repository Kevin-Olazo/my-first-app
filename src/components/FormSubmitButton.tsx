"use client";

import { ComponentProps } from "react";
import { useFormStatus } from "react-dom";

// Add type (can use interface)
type FormSubmitButtonProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"button">;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      className={`btn btn-accent ${className}`}
      type="submit"
      disabled={pending}
    >
      {/* If pending show loading  */}
      {pending && <span className="loading loading-spinner" />}
      {children}
    </button>
  );
};

export default FormSubmitButton;
