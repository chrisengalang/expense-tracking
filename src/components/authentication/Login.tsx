import { Button, Container, Form, Row } from 'react-bootstrap'

const Login = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <h1 className="text-center mb-3 display-6">Expense Tracking</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Text>
              Don't have an account yet? Register <a href='/registration'>here</a>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Login