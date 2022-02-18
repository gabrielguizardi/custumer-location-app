import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { Login, Register } from './views/public'
import { CustomerList } from './views/restrict'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={defaultRoutes.login.route} element={defaultRoutes.login.view} />
        <Route path={defaultRoutes.register.route} element={defaultRoutes.register.view} />
        <Route path={defaultRoutes.application.customers.route} element={defaultRoutes.application.customers.view} />
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
      route: 'application/customers',
      view: <CustomerList />
    }
  },
}

export default Routes
