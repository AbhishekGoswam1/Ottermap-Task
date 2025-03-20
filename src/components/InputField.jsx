import React from "react";

const InputField = ({ label, type, name, value, onChange, placeholder }) => {
  return (
    <div className="w-md">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-xl px-3 py-2 border rounded-md bg-gray-100 outline-none mt-1 focus:border-blue-500"
        required
      />
    </div>
  );
};

export default InputField;
