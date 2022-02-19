import { makeStyles } from '@mui/styles'

export default makeStyles((theme) => ({
  sideBar: {
    display: 'block',
    height: 'calc(100vh - 64px)',
    backgroundColor: '#F5F5F5',
    width: 75,
    paddingTop: 20
  },
  boxButtons: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
}))
