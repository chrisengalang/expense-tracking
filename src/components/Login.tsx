import { useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap'
import { signInUser } from "../service/AuthenticationService";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hasError, setHasError] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e:React.FormEvent) => {
    e.preventDefault()
    setHasError(false)
    signInUser(email, password).then((user) => {
      if (user) {
        console.log(user)
        navigate('/dashboard')
      } else {
        console.log('User not found')
        setHasError(true)
      }
    })
  }

  return (
    <Container className="d-flex align-items-center justify-content-center">
      <Row>
        <h1 className="text-center mb-3 display-6">Expense Tracking</h1>
        <Form>
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
                Login failed. Please try again.
              </Form.Text>
            </Form.Group>
          }
          <Form.Group className="mb-3">
            <Form.Text>
              Don't have an account yet? Register <a href='/registration'>here</a>.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSignIn}>
            Submit
          </Button>
        </Form>
      </Row>
    </Container>
  )
}

export default Login