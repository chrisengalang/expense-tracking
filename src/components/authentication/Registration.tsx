import { useState } from "react"
import { Button, Container, Form, Row } from "react-bootstrap"
import { registerUser } from "../service/AuthenticationService";
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate()

  const handleRegistration = (e:React.FormEvent) => {
    e.preventDefault()
    registerUser(email, password).then((result) => {
      if (result) {
        setHasError(false)
        navigate('/')
      } else {
        setHasError(true)
      }
    })
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <h1 className="text-center mb-3 display-6">Registration</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          {
            hasError && 
            <Form.Group className="mb-3">
              <Form.Text className="text-danger">
                Registration failed. Please try again.
              </Form.Text>
            </Form.Group>
          }
          <Form.Group className="mb-3">
            <Form.Text>
              Already have an account? Sign in <a href='/'>here</a>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleRegistration}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
  
}

export default Registration