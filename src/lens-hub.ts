import { ethers } from 'ethers';
import { LENS_HUB_ABI, LENS_HUB_CONTRACT } from './config';
import { getTheSigner } from './ethers.service'

export const lensHub = new ethers.Contract(
  LENS_HUB_CONTRACT,
  LENS_HUB_ABI,
  getTheSigner()
);