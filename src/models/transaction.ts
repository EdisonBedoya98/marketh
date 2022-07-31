import { Schema, model, models } from 'mongoose'

const TransactionSchema = new Schema({
  buyer: String,
  farm: String,
  description: String,
  value: Number,
  indexPurchase: Number
})
export default models.Transaction || model('Transaction', TransactionSchema)
