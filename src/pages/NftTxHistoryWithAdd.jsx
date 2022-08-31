import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import convertTimeStamp from "../components/tools/ConvertTimeStamp"
//CAN"T FETCH URL

const NftTxHistoryWithAdd = ({ defaultTx }) => {

    // const [nftTx, setNftTx] = useState()

    const { wallet } = useParams()
    const { address } = useParams()
    const navigateToTransactions = useNavigate()

    // const nftTxUrl = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=27025780&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    // useEffect(() => {
    //     fetch(nftTxUrl)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setNftTxx(data?.result)
    //         });
    // }, [])

    console.log(defaultTx)
    // const outflowTx = nftTx.filter(tx => tx?.to === wallet)
    // const inflowTx = nftTx.filter(tx => tx?.from === wallet)



    // console.log(outflowTx)
    // console.log(inflowTx)
    // const assignTxMethod = (txFrom, txTo) => {
    //     return (
    //         txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
    //             txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
    //                 txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
    //     )
    // }


    const handleSwitchPage = () => {
        navigateToTransactions(`/wallet-transactions/${address}/nft`)
    }


    // const totalInflow = (inflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
    // const totalOutflow = (outflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)


    return (
        <div>
            <h1>test</h1>
            <h3>Transactions History</h3>
            <button onClick={handleSwitchPage}>Back to Transactions</button>
            <h4>Transacted With: {wallet}</h4>
            <h4>Total Inflow: </h4>

            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Token</th>
                        <th>ID</th>
                        <th>Time</th>
                        <th>Method</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {nftTx.map(tx =>
                        <tr key={tx.hash + tx.tokenID + tx.tokenName}>
                            <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
                            <td>{tx.tokenName}</td>
                            <td>{tx.tokenID}</td>
                            <td>{convertTimeStamp(tx.timeStamp)}</td>
                            <td>{assignTxMethod(tx.from, tx.to)}</td>
                        </tr>
                    )}

                </tbody> */}
            </table>
            {/* <h4>Total Outflow: {totalOutflow}</h4>
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
                            <td>{convertTimeStamp(tx.timeStamp)}</td>
                            <td>{(tx.value / 1000000000000000000).toFixed(2)} ETH</td>
                            <td>{tx.isError === '0' ? 'Success' : 'Fail'}</td>
                        </tr>
                    )}
                </tbody>
            </table> */}
        </div>
    )
}

export default NftTxHistoryWithAdd