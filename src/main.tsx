import ReactDOM from 'react-dom/client'
import { Route, BrowserRouter as Router, Routes, createBrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext'
import Login from './components/Login'
import Registration from './components/Registration'
import PrivateRoutes from './routes/PrivateRoutes'
import Dashboard from './components/Dashboard'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Router>
    <AuthContextProvider>
      <Routes>
        <Route element = { <PrivateRoutes /> }>
          {" "}
          <Route path = '/dashboard' element = { <Dashboard /> } />
        </Route>
        <Route path = '/' element = { <Login/> } />
        <Route path = '/registration' element = { <Registration/> } />
      </Routes>
    </AuthContextProvider>
  </Router>
)
