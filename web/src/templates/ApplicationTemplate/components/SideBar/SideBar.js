import { IconButton, Box } from '@mui/material'

import { PersonOutline, LocationSearching } from '@mui/icons-material'
import useStyles from './styles'
const Sidebar = () => {
  const classes = useStyles()

  return (
    <Box className={classes.sideBar}>
      <Box className={classes.boxButtons}>
        <IconButton color="inherit" >
          <PersonOutline />
        </IconButton>
        <IconButton color="inherit" >
          <LocationSearching />
        </IconButton>
      </Box>
    </Box> 
  )
}

export default Sidebar
