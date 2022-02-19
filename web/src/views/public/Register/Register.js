import { Box, Button, TextField  } from '@mui/material'

import { RegisterForm } from './components'
import { PublicTemplate } from '../../../templates'

import useStyles from './styles'
import lawnGuruLogo from '../../../assets/images/lawn-guru-logo.png'

const Register = () => {
  const classes = useStyles()

  return (
    <PublicTemplate>
      <img src={lawnGuruLogo} alt="LawnGuru Logo" className={classes.logo}/>

      <h1 className={classes.title}>Register</h1>
      <Box maxWidth={400}>
        <RegisterForm />
      </Box>
    </PublicTemplate>
  )
}

export default Register
