import React, { useState, useEffect } from "react";
import InputBox from "./InputBox";


function InputBoxCurrencyconverter() {
  const[amount,setAmount]=useState(1);
  const[fromCurrency, setFromCurrency]=useState("USD");
  const[toCurrency, setToCurrency]=useState("INR");
  const[convertedAmount, setConvertedAmount]=useState(0);

  //List of available currencies
  const currencyOptions=["USD","INR","EUR","GBP"];

  //Hardcoded exchange rates(1 UsD= X currency)
  const exchangeRates={
    USD: { USD: 1, INR: 83.25, EUR: 0.92, GBP: 0.79 },
    INR: { USD: 0.012, INR: 1, EUR: 0.011, GBP: 0.0095 },
    EUR: { USD: 1.09, INR: 90.25, EUR: 1, GBP: 0.85 },
    GBP: { USD: 1.27, INR: 105, EUR: 1.18, GBP: 1 },
  };
  //update converted amount when input or currency changes
  useEffect(()=>{
    const rate=exchangeRates[fromCurrency][toCurrency];
    setConvertedAmount((amount*rate).toFixed(2));
  }, [amount, fromCurrency, toCurrency]);

  const swap=()=>{
    setAmount(convertedAmount);
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);

  }

  return(
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl shadow-xl-w-96">
        <h1 className="text-2xl font-bold text-center mb-6">
          Currency Converter
        </h1>
        {/* From Currency Input */}
        <InputBox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        onCurrencyChange={setFromCurrency}
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        />
        <div className="text-center my-4 text-2xl">⇅</div>
        <button className="bg-blue rounded-xl" onClick={(e)=>swap()}>Swap</button>

        {/* To Currency Input */}
        <InputBox
        label="To"
        amount={convertedAmount}
        onCurrencyChange={setToCurrency}
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        amountDisable={true}//Disable to input
        />
        <p className="text-center mt-4 text-gray-600">
          {amount} {fromCurrency}={convertedAmount} {toCurrency}
        </p>

      </div>
    </div>

  )




}

export default InputBoxCurrencyconverter;
