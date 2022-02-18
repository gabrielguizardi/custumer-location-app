import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    color: theme.palette.primary.main,
    fontSize: 21,
    fontWeight: 500
  },
  logo: {
    maxWidth: 291,
    width: '100%'
  }
}))
