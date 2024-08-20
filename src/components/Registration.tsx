import { useState } from "react"
import { register } from "../service/AuthenticationService"

const Registration = () => {
  
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleRegister = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    register(username, password, name)
  }

  return (
    <div>
      <h1>Registration</h1>
      <form>
        <input type="text" id='username' onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
        <input type="password" id='name' onChange={(e) => setName(e.target.value)} />
        <a href='/'>Login</a>
        <input type="submit" onClick={handleRegister} />
      </form>
    </div>
  )
}

export default Registration