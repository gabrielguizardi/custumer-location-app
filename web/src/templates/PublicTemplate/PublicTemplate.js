import { Box } from '@mui/material'

import useStyles from './styles'

function PublicTemplate({ children }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      {children}
    </Box>
  )
}

export default PublicTemplate
