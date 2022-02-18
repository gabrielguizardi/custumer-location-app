import { makeStyles } from '@mui/styles'
import backgroundPatternImage from '../../assets/images/background-pattern.png'

export default makeStyles(() => ({
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundPatternImage})`,
    padding: 8
  }
}))
