import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg text-sm flex">
      <div className="w-1/2">
        <label className="text-gray-500 mb-2 inline-block">{label}</label>
        <input
          type="number"
          className="w-full outline-none bg-transparent py-1.5 border-b-2 border-gray-300 focus:border-blue-500"
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
        />
      </div>
      <div className="w-1/2 flex justify-end">
        <select
          className="rounded-lg px-2 py-1 bg-gray-200 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) =>
            onCurrencyChange && onCurrencyChange(e.target.value)
          }
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
