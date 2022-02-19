import { Container, Paper, Box, Typography, MenuItem, Grid } from '@mui/material'

import { ApplicationTemplate } from '../../../../templates'
import { PageHeader } from '../../../../components'
import { CustomerForm } from '../components'

import useStyles from './styles'

const CustomerEdit = () => {
  const classes = useStyles()
  const customer = {
    address: {
      country: "Brazil",
      state: "SP",
      city: "Marília",
      street: "Amélia volta laplechade",
      zipCode: 17511801
    },
    _id: "620d865fb90f3663801300d4",
    name: "Gabriel Guizardi",
    email: "gabrielguicar55@gmail.com",
    user: "62092a3db2edbdcce15046a5",
    deleted: false,
    created_at: "2022-02-16T23:18:55.431Z",
    updated_at: "2022-02-16T23:30:58.519Z",
    __v: 0
  }



  return (
    <ApplicationTemplate>
      <Container>
        <PageHeader title="Customer edit" />
        <Paper className={classes.formPaper}>
          <CustomerForm customer={customer} />
        </Paper>
      </Container>
    </ApplicationTemplate>
  )
}

export default CustomerEdit
