import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'unset !important'
  },
  toolbar: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    width: '100%',
    maxWidth: 200
  },
  avatar: {
    backgroundColor: `#E5FED0 !important`
  }
}))
