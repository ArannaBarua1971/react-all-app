import React, { forwardRef } from "react";
import { useId } from "react";

const Input = forwardRef(function (
  { type = "text", label, placeholder = "", className = "", ...props },
  ref
) {

    const Id=useId()
  return (
    <div>
      {label && <label htmlFor={Id}>{label}</label>}
      <input
        id={Id}
        type={type}
        placeholder={placeholder}
        {...props}
        className={`${className}`}
        ref={ref}
      />
    </div>
  );
});

export default Input;
