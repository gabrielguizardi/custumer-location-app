import { makeStyles } from '@mui/styles'

export default makeStyles((theme) =>({
  customer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 20px 8px 20px',
    marginBottom: '10px',
    border: '1px solid #D6D6D6',
    borderRadius: 4,
    backgroundColor: '#FFF'
  },
  customerNameBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  customerName: {
    marginLeft: '40px !important',
    fontWeight: '500 !important'
  }
}))
