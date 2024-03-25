"use client";

import { FC, useRef, ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  onSubmit?: () => void;
  className?: string;
}

const Form: FC<FormProps> = ({ children, className, onSubmit, action }) => {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form
      className={className}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData: FormData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
};

export default Form;
