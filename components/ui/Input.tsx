import { FC } from "react";

export interface InputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}

const Input: FC<InputProps> = ({ name, type, placeholder, value }) => {
  return (
    <>
      <input
        className="w-full p-2 border border-gray-200"
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
      />
    </>
  );
};

export default Input;
