import React , { useId ,forwardRef } from 'react'

function Select({
    options,
    label,
    className="",
    ...props
},ref) {

    const Id =useId()
  return (
    <div>
        {label && <label htmlFor={Id}>{label}</label>}

        <select name="" id={Id} className={`${className}`} {...props} ref={ref}>
            {
                options.map(option=>(
                    <option value={option} key={option}>{option}</option>
                ))
            }
        </select>
    </div>
  )
}

export default forwardRef(Select)
