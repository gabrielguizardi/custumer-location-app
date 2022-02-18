import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5ba62b',
    },
    secondary: {
      main: '#0076f5',
    },
  },
})

export default responsiveFontSizes(theme)
