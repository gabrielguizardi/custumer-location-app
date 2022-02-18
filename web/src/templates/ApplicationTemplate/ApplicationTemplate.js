import { Box } from '@mui/material'

import { AppBar, SideBar } from './components'

import useStyles from './styles'

function PublicTemplate({ children }) {
  const classes = useStyles()

  return (
    <>
      <Box className={classes.root}>
        <AppBar />
        <Box className={classes.application}>
          <SideBar />
          <Box className={classes.content}>
            {children}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default PublicTemplate
