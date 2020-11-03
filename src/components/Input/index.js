import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Input({ name, label, value, type = "text", setInputValue, handleInput }) {
  return (
    <TextField
      id="outlined-basic"
      name={name}
      type={type}
      label={label}
      variant="outlined"
      value={value}
      onChange={(event) => handleInput ? handleInput(event) : setInputValue(event.target.value)}
    />
  )
}
