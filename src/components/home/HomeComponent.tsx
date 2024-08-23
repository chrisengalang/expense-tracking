import { Outlet } from "react-router-dom"
import NavigationComponent from "./NavigationComponent"


const HomeComponent = () => {


  return (
    <div>
      <NavigationComponent />
      <Outlet />
    </div>
  )
}

export default HomeComponent