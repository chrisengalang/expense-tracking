import { useState } from "react";
import { signIn } from "../service/AuthenticationService";
import { LoginDto } from "../model/dto/LoginDto";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const loginDto : LoginDto = {
      username: username,
      password: password
    }
    signIn(loginDto);
  }

  return (
    <div>
      <h1>Login</h1>
      <form>
        <input type="text" id='username' onChange={(e) => setUsername(e.target.value)} />
        <input type="password" id='password' onChange={(e) => setPassword(e.target.value)} />
        <a href='/registration'>Registration</a>
        <input type="submit" onClick={handleSignIn} />
      </form>
    </div>
  )

}

export default Login