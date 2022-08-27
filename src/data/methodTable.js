const methodTable = {
    ethTransfer: { contain: '', replace: 'ETH Transfer' },
    otherErc20Transfer: { contain: 'transfer(address _to, uint256 _value)', replace: 'Other ERC20 Transfer' },
    deposit: { contain: 'deposit', replace: 'Deposit' },
    multicall: { contain: 'multicall', replace: 'Crypto Swap' },
    swap: { contain: 'swap', replace: 'Crypto Swap' },
    mint: { contain: 'mint', replace: 'Mint' },
    nftTransfer: { contain: 'transferfrom', replace: 'NFT Transfer' },
    nftPurchase: { contain: 'atomicMatch_(address[14] addrs, uint256[18] uints, uint8[8] feeMethodsSidesKindsHowToCalls, bytes calldataBuy, bytes calldataSell, bytes replacementPatternBuy, bytes replacementPatternSell, bytes staticExtradataBuy, bytes staticExtradataSell, uint8[2] vs, bytes32[5] rssMetadata)', replace: 'Opensea Purchase' },
    cancelOrder: { contain: 'cancelorder', replace: 'Opensea Order Cancelled' },
    approval: { contain: 'approv', replace: 'Approval' },
    stake: { contain: 'stake', replace: 'Stake' },
    claim: { contain: 'claim', replace: 'Claim' },
    otherTransactions: { contain: 'Other Transactions', replace: 'Other Transactions' }
}

export default methodTable