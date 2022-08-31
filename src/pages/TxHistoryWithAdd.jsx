import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import allTxMethodReplaceTable from "../data/allTxMethodReplaceTable"

const TxHistoryWithAdd = () => {

    const [walletTx, setWalletTx] = useState([])

    const { wallet } = useParams()
    const { address } = useParams()
    const navigateToTransactions = useNavigate()

    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    useEffect(() => {
        fetch(walletTxUrl)
            .then((response) => response.json())
            .then((data) => setWalletTx(data.result))
    }, [])


    const outflowTx = walletTx.filter(tx => tx.to === wallet && tx.isError == 0)
    const inflowTx = walletTx.filter(tx => tx.from === wallet && tx.isError == 0)


    const convertTime = (timestamp) => {
        const num = Number(timestamp) * 1000
        const date = new Date(num)

        const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
        return (formattedDate)
    }

    const groupMethod = (funcName) => {
        return (
            funcName === allTxMethodReplaceTable.ethTransfer.contain ? allTxMethodReplaceTable.ethTransfer.replace :
                funcName === allTxMethodReplaceTable.otherErc20Transfer.contain ? allTxMethodReplaceTable.otherErc20Transfer.replace :
                    funcName.toLowerCase().includes(allTxMethodReplaceTable.deposit.contain) ? allTxMethodReplaceTable.deposit.replace :
                        funcName.toLowerCase().includes(allTxMethodReplaceTable.multicall.contain) ? allTxMethodReplaceTable.multicall.replace :
                            funcName.toLowerCase().includes(allTxMethodReplaceTable.swap.contain) ? allTxMethodReplaceTable.swap.replace :
                                funcName.toLowerCase().includes(allTxMethodReplaceTable.mint.contain) ? allTxMethodReplaceTable.mint.replace :
                                    funcName.toLowerCase().includes(allTxMethodReplaceTable.nftTransfer.contain) ? allTxMethodReplaceTable.nftTransfer.replace :
                                        funcName === allTxMethodReplaceTable.nftPurchase.contain ? allTxMethodReplaceTable.nftPurchase.replace :
                                            funcName.toLowerCase().includes(allTxMethodReplaceTable.cancelOrder.contain) ? allTxMethodReplaceTable.cancelOrder.replace :
                                                funcName.toLowerCase().includes(allTxMethodReplaceTable.approval.contain) ? allTxMethodReplaceTable.approval.replace :
                                                    funcName.toLowerCase().includes(allTxMethodReplaceTable.stake.contain) ? allTxMethodReplaceTable.stake.replace :
                                                        funcName.toLowerCase().includes(allTxMethodReplaceTable.claim.contain) ? allTxMethodReplaceTable.claim.replace :
                                                            allTxMethodReplaceTable.otherTransactions.replace

        )
    }


    const handleSwitchPage = () => {
        navigateToTransactions(`/wallet-transactions/${address}/all`)
    }


    const totalInflow = (inflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
    const totalOutflow = (outflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)


    return (
        <div>
            <h3>Transactions History</h3>
            <button onClick={handleSwitchPage}>Back to Transactions</button>
            <h4>Transacted With: {wallet}</h4>
            <h4>Total Inflow: {totalInflow}</h4>

            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method</th>
                        <th>Time</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {inflowTx.map(tx =>
                        <tr key={tx.hash}>
                            <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
                            <td>{groupMethod(tx.functionName)}</td>
                            <td>{convertTime(tx.timeStamp)}</td>
                            <td>{(tx.value / 1000000000000000000).toFixed(2)} ETH</td>
                            <td>{tx.isError === '0' ? 'Success' : 'Fail'}</td>
                        </tr>
                    )}

                </tbody>
            </table>
            <h4>Total Outflow: {totalOutflow}</h4>
            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method</th>
                        <th>Time</th>
                        <th>Value</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {outflowTx.map(tx =>
                        <tr key={tx.hash}>
                            <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
                            <td>{groupMethod(tx.functionName)}</td>
                            <td>{convertTime(tx.timeStamp)}</td>
                            <td>{(tx.value / 1000000000000000000).toFixed(2)} ETH</td>
                            <td>{tx.isError === '0' ? 'Success' : 'Fail'}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default TxHistoryWithAdd