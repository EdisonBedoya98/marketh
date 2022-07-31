import type { NextApiRequest, NextApiResponse } from 'next'
import Transaction from '../../src/models/transaction'
import dbConnect from '../../src/commons/connect'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await dbConnect()
  const transactions = await Transaction.find({})
  res.status(200).json(transactions)
}
