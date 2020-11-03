import React from 'react'
import TextField from '@material-ui/core/TextField';

export default function Input({ label, value, setInputValue, type = "text" }) {
  return (
    <TextField
      id="outlined-basic"
      type={type}
      label={label}
      variant="outlined"
      value={value}
      onChange={(event) => setInputValue(event.target.value)}
    />
  )
}
