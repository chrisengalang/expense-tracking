import { useState } from "react"
import { register } from "../../service/AuthenticationService"
import { useNavigate } from "react-router-dom"
import { Registration } from "../../model/entity/Registration"

const RegistrationComponent = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const registration : Registration = {
      email: email,
      password: password,
      name: name
    }

    const error = await register(registration)

    if (error) {
      setError(true)
    } else {
      setError(false)
      navigate('/')
    }
  }

  return (
    <div>
      <h1>Registration</h1>
      <form>
        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="name" id='name' onChange={(e) => setName(e.target.value)} />
        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
        {error && <p>Possibly email already exists, please sign in.</p>}
        <a href='/'>Login</a>
        <input type="submit" onClick={handleRegister} />
      </form>
    </div>
  )
}

export default RegistrationComponent