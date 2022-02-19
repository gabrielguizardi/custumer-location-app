import { Controller } from 'react-hook-form'
import { TextField } from '@mui/material'

function TextFieldComponent({
  control,
  name,
  mode = 'onBlur',
  ...rest
}) {
  return (
    <Controller
      render={({
        field: { onChange, onBlur, value, ref },
      }) =>
        <TextField
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          inputRef={ref}
          {...rest}
        />
      }
      control={control}
      name={name}
      mode={mode}
    />
  )
}

export default TextFieldComponent
