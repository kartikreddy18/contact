import { ChangeEvent } from "react";

interface Props {
  id: string;
  label: string;
  required?: boolean;
  value: any;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextField({ id, required, label, value, handleChange }: Props) {
  return (
    <div className="relative">
      <input
        id={id}
        type="text"
        required={required}
        value={value}
        onChange={handleChange}
        className={`
          peer
          border-2
          p-3
          rounded
          placeholder:opacity-100
          transition
          placeholder:select-none
          focus:placeholder:opacity-0
        `}
        placeholder={label}
      />
      <label
        htmlFor={id}
        className={`
          transition
          duration-300
          opacity-0
          absolute
          font-light
          text-gray-300
          translate-y-3
          text-sm
          bg-white
          rounded
          p-1
          left-3.5
          peer-focus:-translate-y-3
          peer-focus:opacity-100
          peer-focus:text-black
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default TextField;
