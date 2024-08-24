import { useLocation } from "react-router-dom"

const AccountComponent = () => {

  const { state } = useLocation()

  return (
    <div>
      <h1>{state.account.name}</h1>
      <p>{state.account.balance}</p>
    </div>
  ) 
}

export default AccountComponent