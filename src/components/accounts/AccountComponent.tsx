import { Account } from "../../model/entity/Account"

type Props = {
  account: Account
}

const AccountComponent = ({account}: Props) => {

  return (
    <tr>
      <td>{account.name}</td>
      <td>{account.balance}</td>
    </tr>
  ) 
}

export default AccountComponent