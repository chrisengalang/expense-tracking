import { AccountTypeEnum } from "./AccountTypeEnum"

export class Account {
  id: string
  userId: string
  name: string
  balance: number
  type: AccountTypeEnum

  constructor(id: string, userId: string, name: string, balance: number, type: AccountTypeEnum) {
    this.id = id
    this.userId = userId
    this.name = name
    this.balance = balance
    this.type = type
  }
}