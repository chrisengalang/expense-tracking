import { useState } from "react";
import { signIn } from "../service/AuthenticationService";
import { LoginDto } from "../model/dto/LoginDto";

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const loginDto : LoginDto = {
      email: email,
      password: password
    }
    signIn(loginDto);
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

export default Login