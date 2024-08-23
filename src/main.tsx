import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import PrivateRoutes from './routes/PrivateRoutes'
import Home from './components/home/Home'
import Dashboard from './components/home/Dashboard'
import Accounts from './components/accounts/Accounts'
import AccountList from './components/accounts/AccountList'
import AddAccount from './components/accounts/AddAccount'
import EditAccount from './components/accounts/EditAccount'
import RegistrationComponent from './components/authentication/RegistrationComponent'
import LoginComponent from './components/authentication/LoginComponent'
import AccountComponent from './components/accounts/AccountComponent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthContextProvider>
      <Routes>
        <Route element = { <PrivateRoutes /> }>
          {" "}
          <Route path = 'home' element = { <Home /> }>
            <Route index element = { <Dashboard /> } />
            <Route path = 'dashboard' element = { <Dashboard /> } />
            <Route path = 'accounts' element = { <Accounts /> }>
              <Route index element = { <AccountList /> } />
              <Route path = 'add' element = { <AddAccount /> } />
              <Route path = ':id/edit' element = { <EditAccount /> } />
            </Route>
          </Route>
        </Route>
        <Route index element = { <LoginComponent/> } />
        <Route path = 'registration' element = { <RegistrationComponent/> } />
      </Routes>
    </AuthContextProvider>
  </Router>
)
