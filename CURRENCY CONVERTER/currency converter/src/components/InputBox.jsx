import React from "react";

function InputBox({
  label,
  currentCurrency,
  chooseCurrency,
  amount,
  setAmount,
  currencyOptions = [],
  readonly = false,
}) {
  return (
    <>
      <div className="flex justify-center  items-center bg-slate-600 p-3 my-3">
        <div className="input_part flex flex-col m-3">
          <label htmlFor="" className="my-2 text-xl text-white">
            {label}
          </label>
          <input
            readOnly={readonly}
            type="number"
            min={0}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>
        <div className="currency m-3">
          <h1 className="my-2 text-xl text-white">Currency</h1>
          <select name="currency" id="" value={currentCurrency} onChange={(e)=> chooseCurrency(e.target.value)}>
            {currencyOptions.map((value) => (
              <option value={value}>{value}</option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
