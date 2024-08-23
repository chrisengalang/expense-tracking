import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/Login'
import Registration from './components/Registration'
import PrivateRoutes from './routes/PrivateRoutes'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Accounts from './components/Accounts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthContextProvider>
      <Routes>
        <Route element = { <PrivateRoutes /> }>
          {" "}
          <Route path = 'home' element = { <Home /> }>
            <Route index element = { <Dashboard /> } />
            <Route path = 'dashboard' element = { <Dashboard /> } />
            <Route path = 'accounts' element = { <Accounts /> } />
          </Route>
        </Route>
        <Route index element = { <Login/> } />
        <Route path = 'registration' element = { <Registration/> } />
      </Routes>
    </AuthContextProvider>
  </Router>
)
