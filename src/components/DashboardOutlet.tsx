import { Container, Row } from "react-bootstrap"
import Navigation from "./Navigation"
import { Outlet } from "react-router-dom"

const DashboardOutlet = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}

export default DashboardOutlet