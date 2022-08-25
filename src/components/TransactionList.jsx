import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Multiselect from "multiselect-react-dropdown"

const TransactionList = () => {
    const [walletTx, setWalletTx] = useState([])
    const [defaultTx, setDefaultTx] = useState([])

    const { address } = useParams()
    const walletAdd = address
    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAdd}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


    useEffect(() => {
        fetch(walletTxUrl)
            .then((response) => response.json())
            .then((data) => {
                return (
                    setWalletTx(data.result),
                    setDefaultTx(data.result)
                )
            })
    }, [])



    const nft = 'atomicMatch_(address[14] addrs, uint256[18] uints, uint8[8] feeMethodsSidesKindsHowToCalls, bytes calldataBuy, bytes calldataSell, bytes replacementPatternBuy, bytes replacementPatternSell, bytes staticExtradataBuy, bytes staticExtradataSell, uint8[2] vs, bytes32[5] rssMetadata)'
    const ethTransfer = ''
    const otherErc20Transfer = 'transfer(address _to, uint256 _value)'

    const handleWalletAdd = (wallet) => () => {
        navigator.clipboard.writeText(wallet)
    }

    const convertTime = (timestamp) => {
        const num = Number(timestamp) * 1000
        const date = new Date(num)

        const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
        return (formattedDate)
    }



    const handleValue = (event) => {

        if (event[0].key === 'Low-High') {
            const sortArrByLowestVal = [...walletTx]
            sortArrByLowestVal.sort((a, b) => a?.value - b?.value)
            setWalletTx(sortArrByLowestVal)

        } else if (event[0].key === 'High-Low') {
            const sortArrByHighestVal = [...walletTx]
            sortArrByHighestVal.sort((a, b) => b?.value - a?.value)
            setWalletTx(sortArrByHighestVal)
        } else {
            setWalletTx(defaultTx)

        }
    }

    return (
        <div>
            <Multiselect
                displayValue="key"
                onKeyPressFn={function noRefCheck() { }}
                // onRemove={(event) => { console.log('hi') }}
                // onSearch={(event) => console.log(event)}
                onSelect={handleValue}
                options={[
                    { key: 'Low-High' },
                    { key: 'High-Low' },
                    { key: 'Default' }
                ]}
                singleSelect
                style={{
                    searchBox: {
                        width: '100px',
                    },
                    optionContainer: {
                        width: '100px'
                    }


                }}

            />
            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method</th>
                        <th>Time</th>
                        <th>Value<button onClick={handleValue}>?</button></th>
                        <th>Status</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {walletTx.map(trans =>
                        <tr key={trans.hash}>
                            <td><a href={`https://etherscan.io/tx/${trans.hash}`}>{trans.hash.substring(0, 8)}...</a></td>
                            <td>{trans.functionName === ethTransfer ? 'ETH Transfer' :
                                trans.functionName === nft ? 'Opensea Purchase' :
                                    trans.functionName.toLowerCase().includes('mint') ? 'Mint' :
                                        trans.functionName.toLowerCase().includes('approv') ? 'Approval' :
                                            trans.functionName.toLowerCase().includes('multicall') ? 'Crypto Swap' :
                                                trans.functionName.toLowerCase().includes('swap') ? 'Crypto Swap' :
                                                    trans.functionName.toLowerCase().includes('transferfrom') ? 'NFT Transfer' :
                                                        trans.functionName.toLowerCase().includes('stake') ? 'Stake' :
                                                            trans.functionName.toLowerCase().includes('claim') ? 'Claim' :
                                                                trans.functionName.toLowerCase().includes('deposit') ? 'Desposit' :
                                                                    trans.functionName === otherErc20Transfer ? 'Other ERC20 Transfer' :
                                                                        trans.functionName.toLowerCase().includes('cancelorder') ? 'Opensea Order Cancelled' :
                                                                            'Other Transactions'}</td>
                            <td>{convertTime(trans.timeStamp)}</td>

                            <td>{(trans.value / 1000000000000000000).toFixed(2)} ETH</td>
                            <td>{trans.isError === '0' ? 'Success' : 'Fail'}</td>
                            <td onClick={handleWalletAdd(trans.from)} style={{ cursor: 'pointer' }}>
                                {trans.from === walletAdd.toLowerCase() ? "My Wallet" : trans.from.substring(0, 8)}
                            </td>
                            <td onClick={handleWalletAdd(trans.to)} style={{ cursor: 'pointer' }}>
                                {trans.to === walletAdd.toLowerCase() ? 'My Wallet' : trans.to.substring(0, 8)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>

    )
}

export default TransactionList