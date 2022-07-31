// import type { NextApiRequest, NextApiResponse } from 'next'
// import Transaction from '../../src/models/transaction'
// import User from '../../src/models/user'
// import dbConnect from '../../src/commons/connect'
// import {
//   getBalance,
//   createPurchase,
//   getCurrentState,
//   setStateDelivered,
//   setStatePickUp,
//   setStateRejected,
// } from '../../src/commons/web3'
// import jwt from 'jsonwebtoken'
// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse,
// ) {
//   await dbConnect()
//   if (req.method == 'POST') {
//     const payload = jwt.decode(req.headers.authorization)
//     const userId = payload.user_id // idComprador
//     const data = req.body // se espera {farmId:idFarm, value:'valor de la compra', description:'descripción de la compra'}
//     const buyerData = await User.findOne(
//       { userId: userId },
//       { address: 1, privateKey: 1 },
//     ) // Obtenemos los datos del comprador
//     const farmData = await User.findOne({ userId: data.farmId }, { address: 1 }) // Obtenemos los datos del granjero
//     const transaction = await Transaction.create({
//       buyer: userId,
//       farm: data.farmId,
//       description: data.description,
//       value: data.value,
//     })
//     const data3 = await createPurchase(
//       transaction._id,
//       data.value,
//       farmData.address,
//       buyerData.address,
//       buyerData.privateKey,
//     )
//     await Transaction.updateOne(
//       { _id: transaction._id },
//       { $set: { indexPurchase: data3.indexPurchase } },
//     )
//     res.status(200).json({ id: transaction._id })
//   } else if (req.method == 'PUT') {
//     const data = req.body // {id:'transactionId', state:'1,2,3'}
//     const transactionCheck = await Transaction.findOne(
//       { _id: data.id },
//       { indexPurchase: 1 },
//     )
//     if (!transactionCheck) {
//       res.status(400).json({ message: 'TRANSACTION_ID NOT FOUND' })
//       return
//     }
//     if (data.state == 1) {
//       await setStatePickUp(data.id, transactionCheck.indexPurchase)
//     } else if (data.state == 2) {
//       await setStateDelivered(data.id, transactionCheck.indexPurchase)
//     } else if (data.state == 3) {
//       await setStateRejected(data.id)
//     }
//     const currenState = await getCurrentState(data.id)
//     res.status(200).json({ state: currenState })
//   } else {
//     if (req.query.id) {//GET with transaction id
//       const currenState = await getCurrentState(req.query.id.toString())
//       res.status(200).json({ state: currenState })
//     } else {//Get without  id
//       const transactions = await Transaction.find({})
//       const balance = await getBalance()
//       res.status(200).json({ transactions, balance })
//     }
//   }
// }
