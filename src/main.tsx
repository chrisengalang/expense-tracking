import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import PrivateRoutes from './routes/PrivateRoutes'
import RegistrationComponent from './components/authentication/RegistrationComponent'
import LoginComponent from './components/authentication/LoginComponent'
import HomeComponent from './components/home/HomeComponent'
import DashboardComponent from './components/home/DashboardComponent'
import AccountsComponent from './components/accounts/AccountsComponent'
import AccountListComponent from './components/accounts/AccountListComponent'
import AddAccountComponent from './components/accounts/AddAccountComponent'
import EditAccountComponent from './components/accounts/EditAccountComponent'
import AccountComponent from './components/accounts/AccountComponent'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthContextProvider>
      <Routes>
        <Route element = { <PrivateRoutes /> }>
          {" "}
          <Route path = 'home' element = { <HomeComponent /> }>
            <Route index element = { <DashboardComponent /> } />
            <Route path = 'dashboard' element = { <DashboardComponent /> } />
            <Route path = 'accounts' element = { <AccountsComponent /> }>
              <Route index element = { <AccountListComponent /> } />
              <Route path = 'add' element = { <AddAccountComponent /> } />
              <Route path = ':id' element = { <AccountComponent /> } />
              <Route path = ':id/edit' element = { <EditAccountComponent /> } />
            </Route>
          </Route>
        </Route>
        <Route index element = { <LoginComponent/> } />
        <Route path = 'registration' element = { <RegistrationComponent/> } />
      </Routes>
    </AuthContextProvider>
  </Router>
)
