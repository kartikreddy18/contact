import { ChangeEvent } from "react";

interface Props {
  id: string;
  label: string;
  required?: boolean;
  checked?: boolean;
  type?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function RadioButton({
  id,
  required,
  label,
  checked,
  type = "radio",
  handleChange,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <input
        id={id}
        type={type}
        required={required}
        checked={checked}
        onChange={handleChange}
      />

      <label
        htmlFor={id}
        className={`
          font-medium
          text-sm
        `}
      >
        {label}
      </label>
    </div>
  );
}

export default RadioButton;
