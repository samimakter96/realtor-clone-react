import React from 'react'

const ToggleButton = ({id, value, selectedValue, onClick, label}) => {

  const isSelected = selectedValue === value;

  return (
    <button
    type="button"
    id={id}
    value={value}
    onClick={() => onClick(id, value)}
    className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg transition duration-150 ease-in-out w-full ${
      isSelected
        ? "bg-white text-black"
        : "bg-slate-600 text-white"
    }`}
  >
    {label}
  </button>
  )
}

export default ToggleButton