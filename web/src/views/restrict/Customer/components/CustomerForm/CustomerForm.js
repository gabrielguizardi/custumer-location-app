import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Box, Button, Grid, Typography } from '@mui/material'

import { TextField } from '../../../../../components'

import useStyles from './styles'

const Form = ({ customer = {} }) => {
  const navigate = useNavigate()
  const classes = useStyles()

  const editMode = JSON.stringify(customer) !== '{}'

  const { control, handleSubmit, errors } = useForm({
    defaultValues: {
      firstName: customer.name ?? '' ,
      lastName: customer.lastName ?? '' ,
      email: customer.email ?? '' ,
      street: customer.address?.street ?? '' ,
      city: customer.address?.city ?? '' ,
      state: customer.address?.state ?? '' ,
      country: customer.address?.country ?? '' ,
      zipCode: customer.address?.zipCode ?? '' 
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography className={classes.formTitle}>Customer</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="First name"
            type="text"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
            fullWidth
            control={control}
            name="firstName"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Last name"
            type="text"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.lastName}
            helperText={errors?.lastName?.message}
            fullWidth
            control={control}
            name="lastName"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="E-mail"
            type="email"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.email}
            helperText={errors?.email?.message}
            fullWidth
            control={control}
            disabled={!!editMode}
            name="email"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.formTitle}>Address</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Street"
            type="text"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.street}
            helperText={errors?.street?.message}
            fullWidth
            control={control}
            name="street"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="City"
            type="text"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.city}
            helperText={errors?.city?.message}
            fullWidth
            control={control}
            name="city"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="State"
            type="text"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.state}
            helperText={errors?.state?.message}
            fullWidth
            control={control}
            name="state"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Country"
            type="country"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.country}
            helperText={errors?.country?.message}
            fullWidth
            control={control}
            name="country"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Zip code"
            type="number"
            color="primary"
            variant="outlined"
            margin="dense"
            error={!!errors?.zipCode}
            helperText={errors?.zipCode?.message}
            fullWidth
            control={control}
            name="zipCode"
          />
        </Grid>
      </Grid>

      <Box mt={2} display="flex">
        <Button color="primary" 
          type="submit" 
          variant="contained" 
          className={classes.submitButton}
        >
          Create
        </Button>
        <Button color="secondary" 
          variant="outlined" 
          onClick={() => navigate('/customers')}
        >
          Back
        </Button>
      </Box>
    </form>
  )
}

export default Form
