const AllTxTotalFlow = ({ defaultTx, address }) => {


    const totalEthFlow = (flow) => {
        const flowWallets = defaultTx.filter((tx) => tx[flow] === address.toLowerCase() && tx.isError == 0)
        const ethFlow = (flowWallets.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
        return ethFlow
    }


    return (
        <div>
            <h4>Total Successful Transactions Flow</h4>
            <ul>
                <li>Total Outflow: {totalEthFlow('from')} ETH</li>
                <li>Total Inflow: {totalEthFlow('to')} ETH</li>
            </ul>
        </div>
    )
}

export default AllTxTotalFlow