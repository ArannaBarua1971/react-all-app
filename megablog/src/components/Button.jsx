import React from 'react'

function Button({
    children,
    type="button",
    bgColor="bg-blue",
    textColor="text-white",
    className="",
    ...props
}) {
  return (
    <button type={type} className={`${textColor,bgColor,className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
