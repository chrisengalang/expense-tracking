import { TransactionTypeEnum } from "./TransactionTypeEnum"

export class Transaction {
  id: string
  transactionType: TransactionTypeEnum
  fromAccountId: string
  toAccountId: string
  category: string
  amount: number
  description: string
  date: Date

  constructor(id: string, transactionType: TransactionTypeEnum, fromAccountId: string, toAccountId: string, amount: number, description: string, date: Date) {
    this.id = id
    this.transactionType = transactionType
    this.fromAccountId = fromAccountId
    this.toAccountId = toAccountId
    this.amount = amount
    this.description = description
    this.date = date
  }
}