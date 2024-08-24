import { useState } from "react";
import { signIn } from "../../service/AuthenticationService";
import { useNavigate } from "react-router-dom";
import { Login } from "../../model/Login";

const LoginComponent = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const login : Login = {
      email: email,
      password: password
    }
    const error = await signIn(login)

    if (!error) {
      navigate('/home')
    }
  }
  
  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
        <a href='/registration'>Registration</a>
        <input type="submit" onClick={handleSignIn} />
      </form>
    </div>
  )

}

export default LoginComponent