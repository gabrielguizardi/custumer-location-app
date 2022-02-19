import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

import { TextField } from '../../../../../components'

import useStyles from './styles'

function Form() {
  const navigate = useNavigate()
  const classes = useStyles()

  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      console.log(data)
      navigate('/customers')
    } catch (error) {
      console.log(error?.response?.status === 401)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="E-mail"
        type="email"
        color="primary"
        variant="filled"
        margin="normal"
        error={!!errors?.email}
        helperText={errors?.email?.message}
        fullWidth
        control={control}
        name="email"
        className={classes.textField}
      />
      <TextField
        label="Password"
        type="password"
        variant="filled"
        margin="normal"
        error={!!errors?.password}
        helperText={errors?.password?.message}
        fullWidth
        control={control}
        name="password"
        className={classes.textField}
      />
      <Box mt={2} display="flex">
        <Button color="primary" 
          type="submit" 
          variant="contained" 
          className={classes.submitButton}
          startIcon={<LoginIcon />}
        >
          Sign in
        </Button>
        <Button color="secondary" 
          variant="outlined" 
          onClick={() => navigate('/register')}
        >
          Sign up
        </Button>
      </Box>
    </form>
  )
}

export default Form
