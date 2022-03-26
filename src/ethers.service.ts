import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { ethers, utils, Wallet } from 'ethers';
import { MUMBAI_RPC_URL, PK } from './config';
var omitDeep = require('omit-deep');

export const ethersProvider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL);

export const signedTypeData = async (
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  value: Record<string, any>
) => {
  if(!window.ethereum)
    throw new Error("No crypto wallet found, please instal Metamask")
  await window.ethereum.send("eth_requestAccounts");
    
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  return signer._signTypedData(
    omitDeep(domain, '__typename'),
    omitDeep(types, '__typename'),
    omitDeep(value, '__typename')
  );
};

export const splitSignature = (signature: string) => {
  return utils.splitSignature(signature);
};

// export const sendTx = (
//   transaction: ethers.utils.Deferrable<ethers.providers.TransactionRequest>
// ) => {
//   const signer = getSigner();
//   return signer.sendTransaction(transaction);
// };

export const signText = async (text: string) => {
  
  try {

    if(!window.ethereum)
      throw new Error("No crypto wallet found, please instal Metamask")
    await window.ethereum.send("eth_requestAccounts");
    
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner();
    const signature = await signer.signMessage(text);
    
    return signature

  } catch (err) {
    console.error(err)
  }
};