import mongoose from 'mongoose'
const MONGODB_URI = process.env.MONGODB_URI || ''
var connect = 0

export default async function dbConnect() {
  if (connect) return

  try {
    await mongoose.connect(MONGODB_URI)
    connect = 1
  } catch (e) {
    connect = 0
    console.log(e)
  }
}
