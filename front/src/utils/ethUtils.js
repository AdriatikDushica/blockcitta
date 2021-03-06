import BigNumber from 'bignumber.js';

export function formatEth(inWei) {
  return inWei.dividedBy(oneEthInWei()).toString();
}

export function oneEthInWei() {
  return new BigNumber(1e18);
}

export function formatToken(inWei, dec = 0) {
  if (dec === 0)
    return inWei.toString();
  return inWei.dividedBy((new BigNumber(10)).toPower(dec)).toString();
}

