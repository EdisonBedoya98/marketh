const oracle = {
  address: '0xe16A5A185D3dCc2178AcFB74B26c920F0860C30f',
  privateKey:
    '0xaf98511502ea6de4781e9d7913d2a467a86c251724cb49356edb60a9ec8515be',
}

const addressContract = '0x8106e3b9492740e8A5697B57f1d4Ec1aCdc0E39B'
import Web3 from 'web3'
const web3 = new Web3(
  'https://rinkeby.infura.io/v3/7eb53116056b45cb9a10c00370e3b072',
)
import Marketh from './Marketh.json'
const instance = new web3.eth.Contract(Marketh.abi, addressContract)

const typesArray = [
  { type: 'string', name: 'id' },
  { type: 'uint', name: 'indexPurchase' },
]

export function createAccount() {
  const account = web3.eth.accounts.create()
  console.log(account)
  return account
}

async function createTransaction(
  tx: any,
  address: string,
  privateKey: string,
  value: number = 0,
) {
  const data = tx.encodeABI()
  const gas = await tx.estimateGas({
    from: address,
  })
  const gasPrice = await web3.eth.getGasPrice()
  const nonce = await web3.eth.getTransactionCount(address, 'latest')
  const signedTx = await web3.eth.accounts.signTransaction(
    {
      to: addressContract,
      value: value,
      data: data,
      gas: gas,
      gasPrice: gasPrice,
      nonce: nonce,
    },
    privateKey,
  )
  return await web3.eth.sendSignedTransaction(signedTx.rawTransaction ?? '')
}

export async function getBalance() {
  const data = await instance.methods.getBalance().call()
  console.log(data)
  return data
}

export async function getCurrentState(id: string) {
  const data = await instance.methods.getCurrentState(id).call()
  console.log(data)
}

export async function setStatePickUp(id: string, indexPurchase: number) {
  const tx = instance.methods.setStatePickUp(id, indexPurchase)
  const receipt = await createTransaction(tx, oracle.address, oracle.privateKey)
  console.log(JSON.stringify(receipt))
}

export async function setStateDelivered(id: string, indexPurchase: number) {
  const tx = instance.methods.setStateDelivered(id, indexPurchase)
  const receipt = await createTransaction(tx, oracle.address, oracle.privateKey)
  console.log(JSON.stringify(receipt))
}

export async function setStateRejected(id: string) {
  const tx = instance.methods.setStateDelivered(id)
  const receipt = await createTransaction(tx, oracle.address, oracle.privateKey)
  console.log(JSON.stringify(receipt))
}

export async function createPurchase(
  id: string,
  value: number,
  farmAddress: string,
  buyerAddress: string,
  buyerPrivateKey: string,
) {
  const tx = instance.methods.createPurchase(id, farmAddress, value)
  const receipt = await createTransaction(
    tx,
    buyerAddress,
    buyerPrivateKey,
    value,
  )
  const decodedParameters = web3.eth.abi.decodeParameters(
    typesArray,
    receipt.logs[0].data,
  )
  const response = {
    id: decodedParameters.id,
    indexPurchase: decodedParameters.indexPurchase,
  }
  console.log(response)
  return response
}
