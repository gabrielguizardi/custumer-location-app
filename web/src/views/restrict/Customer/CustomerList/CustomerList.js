
import { useNavigate } from 'react-router-dom'
import { Container, Box, Typography, MenuItem } from '@mui/material'

import { ApplicationTemplate } from '../../../../templates'
import { PageHeader, Avatar, Menu } from '../../../../components'

import useStyles from './styles'

const CustomerList = () => {
  const navigate = useNavigate()
  const classes = useStyles()

  const customers = [
    {
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
      createdAt: "2022-02-16T23:18:55.431Z",
      updatedAt: "2022-02-16T23:30:58.519Z",
      __v: 0
    }
  ]

  return (
    <ApplicationTemplate>
      <Container>
        <PageHeader title="Customers list">
          <Menu optionButton>
            <MenuItem onClick={() => navigate('/customers/create')}>CREATE</MenuItem>
            <MenuItem>DELETED CUSTOMERS</MenuItem>
          </Menu>
        </PageHeader>

        <Box className={classes.list}>
          {customers.map((customer) => (
            <Box className={classes.customer}>
              <Box className={classes.customerNameBox}>
                <Avatar />
                <Typography className={classes.customerName}>{customer.name}</Typography>
              </Box>

              <Menu moreVert>
                <MenuItem onClick={() => navigate(`/customers/${customer._id}/edit`)}>EDIT</MenuItem>
              </Menu>
            </Box>
          ))}
        </Box>
      </Container>
    </ApplicationTemplate>
  )
}

export default CustomerList
