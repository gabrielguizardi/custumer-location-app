import { Box, Typography } from '@mui/material'

import useStyles from './styles'

function PageHeader({ title, children }) {
  const classes = useStyles()

  return (
    <Box className={classes.pageHeader}>
      <Typography component="h1" className={classes.title}>{title}</Typography>
      <Box>{children}</Box>
    </Box>
  )
}

export default PageHeader
