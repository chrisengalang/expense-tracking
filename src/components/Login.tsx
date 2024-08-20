import { useState } from "react";
import { signIn } from "../service/AuthenticationService";

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    signIn(username, password);
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