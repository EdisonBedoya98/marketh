import { Schema, model, models } from 'mongoose'

const TransactionSchema = new Schema({
  customer: String,
  farm: String,
})
export default  models.Transaction || model('Transaction', TransactionSchema)