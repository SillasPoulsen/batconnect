import { TypedDataDomain, TypedDataField } from '@ethersproject/abstract-signer';
import { ethers, utils } from 'ethers';
import { MUMBAI_RPC_URL } from './config';
var omitDeep = require('omit-deep');

export const ethersProvider = new ethers.providers.JsonRpcProvider(MUMBAI_RPC_URL);

export const getTheSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner();
  return signer
}

export const signedTypeData = async (
  domain: TypedDataDomain,
  types: Record<string, TypedDataField[]>,
  value: Record<string, any>
) => {
  const signer = await getTheSigner();
  return signer._signTypedData(
    omitDeep(domain, '__typename'),
    omitDeep(types, '__typename'),
    omitDeep(value, '__typename')
  );
};

export const splitSignature = (signature: string) => {
  return utils.splitSignature(signature);
};

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