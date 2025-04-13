import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ label, checked, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          {...props}
        />
        <div
          className={`h-4 w-4 rounded border ${
            checked
              ? "border-amber-300 bg-amber-200"
              : "border-amber-200 bg-amber-50"
          } flex items-center justify-center`}
        >
          {checked && (
            <svg
              className="h-4 w-4 text-amber-900"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              strokeWidth="4"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      {label && <span className="ml-2 text-sm text-amber-50">{label}</span>}
    </label>
  );
}
