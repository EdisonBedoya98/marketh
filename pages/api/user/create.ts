import type { NextApiRequest, NextApiResponse } from 'next'
import User from '../../../src/models/user'
import dbConnect from '../../../src/commons/connect'
import { createAccount } from '../../../src/commons/web3'
import jwt from 'jsonwebtoken'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' })
    return
  }
  await dbConnect()
  const payload = jwt.decode(req.headers.authorization)
  const userId = payload.user_id
  const userCheck = await User.countDocuments({ userId: userId })
  if (userCheck) {
    res.status(400).json({ message: 'USER_ID HAVE ACCOUNT' })
    return
  }
  const account3 = createAccount()
  await User.create({ ...account3, userId: userId })
  res.status(200).json({ address: account3.address })
}
