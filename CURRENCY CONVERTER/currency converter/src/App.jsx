import { useState } from "react";
import "./index.css";

import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
function App() {

  const [form, setForm] = useState("bdt");
  const [to, setTo] = useState("usd");

  const [amount,setAmount]=useState(0);
  const [convertedAmount,setConvertedAmount]=useState(0);

  const  allCurrency=useCurrencyInfo(form)
  const currencyOptions=Object.keys(allCurrency);

  const converted =()=>{
    setConvertedAmount(amount*allCurrency[to])
  }

  const swap =()=>{
    setForm(to)
    setTo(form)

    converted()
  }


  return (
    <div className="flex flex-wrap justify-center items-center h-screen w-full flex-col " style={{ backgroundImage:`url("./images/currency.jpg")`,backgroundSize:'cover' }}>
      <h1 className="bg-black text-white font-bold m-3 text-center p-3 text-3xl rounded-lg">
        Currency Converter
      </h1>

      <div className=" px-[25px] py-[10px] rounded-lg border border-red-500 flex flex-col justify-center bg-white">
        <InputBox label={"From"} chooseCurrency={setForm} currentCurrency={form} amount={amount} setAmount={setAmount} currencyOptions={currencyOptions}/>

        <button className="px-3 py-1 bg-blue-400 mx-auto text-white" onClick={swap}>
          swap
        </button>

        <InputBox label={"To"} chooseCurrency={setTo} currentCurrency={to} amount={convertedAmount} setAmount={setConvertedAmount} currencyOptions={currencyOptions} readonly/>

        <button className="px-3 py-1 bg-blue-400  text-white" onClick={converted}>
          Convert usd to inr
        </button>
      </div>
    </div>
  );
}

export default App;
