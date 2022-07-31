import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema({
  userId: String,
  address: String,
  privateKey: String,
})
export default models.User || model('User', UserSchema)
