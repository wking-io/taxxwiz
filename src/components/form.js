import React from "react"

export const Field = ({ name, label, value, update, dark }) => (
  <div className={`flex flex-col mb-4 ${dark ? "" : "border border-black"}`}>
    <label className={dark ? "mb-2 text-white" : "my-2 mx-4"} htmlFor={name}>
      {label}
    </label>
    <input
      className={
        dark
          ? "bg-grey-600 text-white text-sm p-2"
          : "bg-transparent text-black px-4 pb-4"
      }
      name={name}
      value={value}
      onChange={({ target }) => update(target.value)}
    />
  </div>
)

export const Textarea = ({ name, label, value, update, dark }) => (
  <div className={`flex flex-col mb-4 ${dark ? "" : "border border-black"}`}>
    <label className={dark ? "mb-2 text-white" : "my-2 mx-4"} htmlFor={name}>
      {label}
    </label>
    <textarea
      className={
        dark
          ? "bg-grey-600 text-white text-sm p-2"
          : "bg-transparent text-black h-48 px-4 pb-4"
      }
      name={name}
      value={value}
      onChange={({ target }) => update(target.value)}
    />
  </div>
)
