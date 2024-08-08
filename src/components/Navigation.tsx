import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="md">
      <Container>
      <Navbar.Brand href="#home">
        Expense Tracking
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/dashboard">Home</Nav.Link>
          <Nav.Link href="/dashboard/accounts">Accounts</Nav.Link>
          <Nav.Link href="/dashboard/profile">Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation