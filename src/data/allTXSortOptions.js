import allTxMethodReplaceTable from "./allTxMethodReplaceTable"

const allTxSortOptions = {
    method: [
        { key: allTxMethodReplaceTable.ethTransfer.replace },
        { key: allTxMethodReplaceTable.otherErc20Transfer.replace },
        { key: allTxMethodReplaceTable.deposit.replace },
        // { key: allTxMethodReplaceTable.multicall.replace },
        { key: allTxMethodReplaceTable.swap.replace },
        { key: allTxMethodReplaceTable.mint.replace },
        { key: allTxMethodReplaceTable.nftTransfer.replace },
        { key: allTxMethodReplaceTable.nftPurchase.replace },
        { key: allTxMethodReplaceTable.cancelOrder.replace },
        { key: allTxMethodReplaceTable.approval.replace },
        { key: allTxMethodReplaceTable.stake.replace },
        { key: allTxMethodReplaceTable.claim.replace },
        { key: allTxMethodReplaceTable.otherTransactions.replace }
    ],
    time: [{ key: 'Earliest' }, { key: 'Latest' }],
    value: [{ key: 'Low-High' }, { key: 'High-Low' }, { key: 'Default' }],
    status: [{ key: 'Success' }, { key: 'Fail' }, { key: 'Default' }],
}

export default allTxSortOptions