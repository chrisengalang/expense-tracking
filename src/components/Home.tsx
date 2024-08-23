import { Outlet } from "react-router-dom"
import Navigation from "./Navigation"


const Home = () => {


  return (
    <div>
      <Navigation />
      <Outlet />
    </div>
  )
}

export default Home