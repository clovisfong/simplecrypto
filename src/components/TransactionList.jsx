import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import SortMethodByCheckbox from "./SortMethodByCheckbox"
import SortTransactions from "./SortTransactions"
import Multiselect from "multiselect-react-dropdown"

const TransactionList = () => {
    const [walletTx, setWalletTx] = useState([])
    const [defaultTx, setDefaultTx] = useState([])
    const [filteredMethods, setFilteredMethods] = useState([])

    const { address } = useParams()
    const walletAdd = address
    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAdd}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


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







    const handleWalletAdd = (wallet) => () => {
        navigator.clipboard.writeText(wallet)
    }

    const convertTime = (timestamp) => {
        const num = Number(timestamp) * 1000
        const date = new Date(num)

        const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
        return (formattedDate)
    }






    const sortOptions = {
        method: [
            { key: methodTable.ethTransfer.replace },
            { key: methodTable.otherErc20Transfer.replace },
            { key: methodTable.deposit.replace },
            { key: methodTable.multicall.replace },
            { key: methodTable.swap.replace },
            { key: methodTable.mint.replace },
            { key: methodTable.nftTransfer.replace },
            { key: methodTable.nftPurchase.replace },
            { key: methodTable.cancelOrder.replace },
            { key: methodTable.approval.replace },
            { key: methodTable.stake.replace },
            { key: methodTable.claim.replace },
            { key: methodTable.otherTransactions.replace }
        ],
        time: [{ key: 'Earliest' }, { key: 'Latest' }, { key: 'Default' }],
        value: [{ key: 'Low-High' }, { key: 'High-Low' }, { key: 'Default' }],
        status: [{ key: 'Success' }, { key: 'Fail' }, { key: 'Default' }],
    }

    const handleSelectMethod = (event) => {

        const selectedMethodsArr = event.map((item) => item.key)
        const methodDataArr = Object.values(methodTable)
        console.log(methodDataArr.map((test) => test.contain))
        const methodsToFilter = methodDataArr.filter((method) => selectedMethodsArr.some((select) => select === method.replace)).map(method => method.contain)
        if (methodsToFilter.length === 0) {
            setWalletTx(defaultTx)
        } else {
            setWalletTx(
                defaultTx.filter((tx) => methodsToFilter.some(
                    (methodType) => {
                        if (methodType !== methodTable.otherTransactions.contain) {
                            return (
                                tx.functionName === methodType ||
                                ((methodType !== methodTable.ethTransfer.contain) && tx.functionName.toLowerCase().includes(methodType))
                            )
                        } else if (methodType === methodTable.otherTransactions.contain) { //Other functions
                            return (
                                groupMethod(tx.functionName) === methodType
                            )
                        }
                    }

                )))

        }

    }








    const handleTime = (event) => {

        if (event[0].key === sortOptions.time[0].key) {
            const sortArrByEarliest = [...walletTx]
            sortArrByEarliest.sort((a, b) => a?.timeStamp - b?.timeStamp)
            setWalletTx(sortArrByEarliest)

        } else if (event[0].key === sortOptions.time[1].key) {
            const sortArrByLatest = [...walletTx]
            sortArrByLatest.sort((a, b) => b?.timeStamp - a?.timeStamp)
            setWalletTx(sortArrByLatest)
        } else {
            setWalletTx(defaultTx)

        }
    }


    const handleValue = (event) => {

        console.log(event[0])

        if (event[0].key === sortOptions.value[0].key) {
            const sortArrByLowestVal = [...walletTx]
            sortArrByLowestVal.sort((a, b) => a?.value - b?.value)
            setWalletTx(sortArrByLowestVal)

        } else if (event[0].key === sortOptions.value[1].key) {
            const sortArrByHighestVal = [...walletTx]
            sortArrByHighestVal.sort((a, b) => b?.value - a?.value)
            setWalletTx(sortArrByHighestVal)
        } else {
            setWalletTx(defaultTx)

        }
    }

    const handleStatus = (event) => {


        if (event[0].key === sortOptions.status[0].key) {
            const sortArrBySuccess = [...walletTx]
            sortArrBySuccess.sort((a, b) => a?.isError - b?.isError)
            setWalletTx(sortArrBySuccess)

        } else if (event[0].key === sortOptions.status[1].key) {
            const sortArrByFail = [...walletTx]
            sortArrByFail.sort((a, b) => b?.isError - a?.isError)
            setWalletTx(sortArrByFail)
        } else {
            setWalletTx(defaultTx)

        }
    }




    const groupMethod = (funcName) => {
        return (
            funcName === methodTable.ethTransfer.contain ? methodTable.ethTransfer.replace :
                funcName === methodTable.otherErc20Transfer.contain ? methodTable.otherErc20Transfer.replace :
                    funcName.toLowerCase().includes(methodTable.deposit.contain) ? methodTable.deposit.replace :
                        funcName.toLowerCase().includes(methodTable.multicall.contain) ? methodTable.multicall.replace :
                            funcName.toLowerCase().includes(methodTable.swap.contain) ? methodTable.swap.replace :
                                funcName.toLowerCase().includes(methodTable.mint.contain) ? methodTable.mint.replace :
                                    funcName.toLowerCase().includes(methodTable.nftTransfer.contain) ? methodTable.nftTransfer.replace :
                                        funcName === methodTable.nftPurchase.contain ? methodTable.nftPurchase.replace :
                                            funcName.toLowerCase().includes(methodTable.cancelOrder.contain) ? methodTable.cancelOrder.replace :
                                                funcName.toLowerCase().includes(methodTable.approval.contain) ? methodTable.approval.replace :
                                                    funcName.toLowerCase().includes(methodTable.stake.contain) ? methodTable.stake.replace :
                                                        funcName.toLowerCase().includes(methodTable.claim.contain) ? methodTable.claim.replace :
                                                            methodTable.otherTransactions.replace

        )
    }


    const handleRemoveMethod = (event) => {
        console.log(event)
    }



    return (
        <div>
            <Multiselect
                displayValue="key"
                onKeyPressFn={function noRefCheck() { }}
                onRemove={handleSelectMethod}
                onSearch={function noRefCheck() { }}
                onSelect={handleSelectMethod}
                options={[
                    { key: methodTable.ethTransfer.replace },
                    { key: methodTable.otherErc20Transfer.replace },
                    { key: methodTable.deposit.replace },
                    { key: methodTable.multicall.replace }, //same as methodTable.swap.replace
                    { key: methodTable.mint.replace },
                    { key: methodTable.nftTransfer.replace },
                    { key: methodTable.nftPurchase.replace },
                    { key: methodTable.cancelOrder.replace },
                    { key: methodTable.approval.replace },
                    { key: methodTable.stake.replace },
                    { key: methodTable.claim.replace },
                    { key: methodTable.otherTransactions.replace }





                ]}
                showCheckbox
            />



            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method<SortMethodByCheckbox handleClick={handleSelectMethod} sortOptions={sortOptions.method} /></th>
                        <th>Time<SortTransactions handleClick={handleTime} sortOptions={sortOptions.time} /></th>
                        <th>Value<SortTransactions handleClick={handleValue} sortOptions={sortOptions.value} /></th>
                        <th>Status<SortTransactions handleClick={handleStatus} sortOptions={sortOptions.status} /></th>
                        <th>From<select onChange={(e) => console.log(e.target.value)}>
                            <option value='Low-High'>Low to High</option>
                            <option value='High-Low'>High to Low</option>

                        </select></th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {walletTx.map(trans =>
                        <tr key={trans.hash}>
                            <td><a href={`https://etherscan.io/tx/${trans.hash}`}>{trans.hash.substring(0, 8)}...</a></td>
                            <td>{groupMethod(trans.functionName)}</td>
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