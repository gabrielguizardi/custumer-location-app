import { AppBar, Container, Toolbar, Box } from '@mui/material'

import { Avatar } from '../../../../components'

import useStyles from './styles'
import lawnGuruLogo from '../../../../assets/images/lawn-guru-logo.png'

function AppBarComponent() {
  const classes = useStyles()

  return(
    <AppBar position="static" color="default" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.toolbar}>
          <img src={lawnGuruLogo} alt="LawnGuru Logo" className={classes.logo}/>

          <Box>
            <Avatar />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default AppBarComponent
