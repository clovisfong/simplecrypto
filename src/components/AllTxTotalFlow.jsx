const AllTxTotalFlow = ({ defaultTx, address }) => {

    const outflowWallets = defaultTx.filter((tx) => tx.from === address.toLowerCase() && tx.isError == 0)
    const totalEthOutflow = (outflowWallets.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)


    const inflowWallets = defaultTx.filter((tx) => tx.to === address.toLowerCase() && tx.isError == 0)
    console.log(inflowWallets)
    const totalEthInflow = (inflowWallets.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)



    return (
        <div>
            <h4>Total Successful Transactions Flow</h4>
            <ul>
                <li>Total Outflow: {totalEthOutflow} ETH</li>
                <li>Total Inflow: {totalEthInflow} ETH</li>
            </ul>
        </div>
    )
}

export default AllTxTotalFlow