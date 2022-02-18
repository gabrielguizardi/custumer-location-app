import { Controller } from 'react-hook-form'
import { TextField as MuiTextField } from '@mui/material'

function TextField({
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
        <MuiTextField
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

export default TextField
