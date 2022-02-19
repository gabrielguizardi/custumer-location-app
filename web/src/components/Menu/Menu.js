import { useState } from 'react'
import { Button, IconButton, Menu } from '@mui/material'
import { KeyboardArrowDown, MoreVert } from '@mui/icons-material'

const MenuComponent = ({ optionButton = false, moreVert = false, children }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return(
    <>
      {optionButton && (
        <Button variant="contained"  onClick={handleClick} endIcon={<KeyboardArrowDown />}>
          Options
        </Button>
      )}

      {moreVert && (
        <IconButton onClick={handleClick}>
          <MoreVert />
        </IconButton>
      )}

      <Menu
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
      >
        {children}
      </Menu>
    </>
  )
}

export default MenuComponent
