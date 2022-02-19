import { makeStyles } from '@mui/styles'
import backgroundPatternImage from '../../assets/images/background-pattern.png'

export default makeStyles(() => ({
  application: {
    display: 'flex',
    flexDirection: 'row'
  },
  content: {
    minHeight: 'calc(100vh - 64px)',
    width: 'calc(100vw - 75px)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundImage: `url(${backgroundPatternImage})`,
    backgroundColor: '#EFFCF7',
    padding: '40px 16px 16px 16px'
  }
}))

