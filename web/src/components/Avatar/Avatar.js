import { Avatar } from '@mui/material'
import { PersonOutline } from '@mui/icons-material'

import useStyles from './styles'

function AvatarComponent(props) {
  const classes = useStyles()

  return(
    <Avatar className={classes.avatar} {...props}>
      <PersonOutline color="primary" />
    </Avatar>
  )
}

export default AvatarComponent
