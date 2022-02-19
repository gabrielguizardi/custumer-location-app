import { Box, Button, TextField  } from '@mui/material'

import { LoginForm } from './components'
import { PublicTemplate } from '../../../templates'

import useStyles from './styles'
import lawnGuruLogo from '../../../assets/images/lawn-guru-logo.png'

const Login = () => {
  const classes = useStyles()

  return (
    <PublicTemplate>
      <img src={lawnGuruLogo} alt="LawnGuru Logo" className={classes.logo}/>

      <h1 className={classes.title}>Login</h1>
      
      <Box maxWidth={400}>
        <LoginForm />
      </Box>
    </PublicTemplate>
  )
}

export default Login
