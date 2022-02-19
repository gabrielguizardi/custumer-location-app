import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login'

import { TextField } from '../../../../../components'

import useStyles from './styles'

const Form = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    },
  })

  const onSubmit = async (data) => {
    try {
      console.log(data)
    } catch (error) {
      console.log(error?.response?.status === 401)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
          label="Username"
          type="text"
          color="primary"
          variant="filled"
          margin="normal"
          error={!!errors?.username}
          helperText={errors?.username?.message}
          fullWidth
          control={control}
          name="username"
          className={classes.textField}
        />
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
        <TextField
          label="Password confirmation"
          type="password"
          variant="filled"
          margin="normal"
          error={!!errors?.passwordConfirmation}
          helperText={errors?.passwordConfirmation?.message}
          fullWidth
          control={control}
          name="passwordConfirmation"
          className={classes.textField}
        />
        <Box mt={2} display="flex">
          <Button
            color="primary"
            type="submit"
            variant="contained"
            className={classes.submitButton}
            startIcon={<LoginIcon />}
          >
            Sign up
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            onClick={() => navigate('/')}
            >
              Back
            </Button>
        </Box>
      </form>
    </>
  )
}

export default Form
