import { Container, Paper, Box, Typography, MenuItem, Grid } from '@mui/material'

import { ApplicationTemplate } from '../../../../templates'
import { PageHeader, Avatar, Menu } from '../../../../components'
import { CustomerForm } from '../components'

import useStyles from './styles'

const CustomerCreate = () => {
  const classes = useStyles()

  return (
    <ApplicationTemplate>
      <Container>
        <PageHeader title="Customer create" />
        <Paper className={classes.formPaper}>
          <CustomerForm />
        </Paper>
      </Container>
    </ApplicationTemplate>
  )
}

export default CustomerCreate
