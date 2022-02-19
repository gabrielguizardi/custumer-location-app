import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { Login, Register } from './views/public'
import { CustomerList, CustomerCreate, CustomerEdit } from './views/restrict'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={defaultRoutes.login.route} element={defaultRoutes.login.view} />
        <Route path={defaultRoutes.register.route} element={defaultRoutes.register.view} />
        <Route path={defaultRoutes.application.customers.route} element={defaultRoutes.application.customers.view} />
        <Route path={defaultRoutes.application.customersCreate.route} element={defaultRoutes.application.customersCreate.view} />
        <Route path={defaultRoutes.application.customersEdit.route} element={defaultRoutes.application.customersEdit.view} />
      </Switch>
    </BrowserRouter>
  )
}

export const defaultRoutes = {
  login: {
    route: '/',
    view: <Login />
  },
  register: {
    route: 'register',
    view: <Register />
  },
  application: {
    customers: {
      route: 'customers',
      view: <CustomerList />
    },
    customersCreate: {
      route: 'customers/create',
      view: <CustomerCreate />
    },
    customersEdit: {
      route: 'customers/:id/edit',
      view: <CustomerEdit />
    }
  },
}

export default Routes
