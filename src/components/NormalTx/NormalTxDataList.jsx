import MultiselectCheckBox from "../tools/MultiselectCheckBox"
import SingleSelect from "../tools/SingleSelect"
import allTxMethodReplaceTable from "../../data/allTxMethodReplaceTable"
import { useSearchParams } from "react-router-dom"
import CopyOnClick from "../tools/CopyOnClick"
import convertTimeStamp from "../tools/ConvertTimeStamp"
import allTxSortOptions from "../../data/allTXSortOptions"



const NormalTxDataList = ({ walletTx, updateWalletTx, defaultTx, address }) => {

    const [searchParams, setSearchParams] = useSearchParams(1);

    const pageNum = searchParams.get('page')



    const handleSelectMethod = (event) => {

        const selectedMethodsArr = event.map((item) => item.key)
        const methodDataArr = Object.values(allTxMethodReplaceTable)
        const methodsToFilter = methodDataArr.filter((method) => selectedMethodsArr.some((select) => select === method.replace)).map(method => method.contain)
        if (methodsToFilter.length === 0) {
            updateWalletTx(defaultTx)
        } else {
            updateWalletTx(
                defaultTx.filter((tx) => methodsToFilter.some(
                    (methodType) => {
                        if (methodType !== allTxMethodReplaceTable.otherTransactions.contain) {
                            return (
                                tx.functionName === methodType ||
                                ((methodType !== allTxMethodReplaceTable.ethTransfer.contain) && tx.functionName.toLowerCase().includes(methodType))
                            )
                        } else if (methodType === allTxMethodReplaceTable.otherTransactions.contain) {
                            return (
                                groupMethod(tx.functionName) === methodType
                            )
                        }
                    }

                )))

        }
    }



    const handleFilter = (event, header, type) => {

        if (event[0].key === allTxSortOptions[header][0].key) {
            const sortArrByEarliest = walletTx.sort((a, b) => a?.[type] - b?.[type])
            updateWalletTx([...sortArrByEarliest])

        } else if (event[0].key === allTxSortOptions[header][1].key) {
            const sortArrByLatest = walletTx.sort((a, b) => b?.[type] - a?.[type])
            updateWalletTx([...sortArrByLatest])
        } else {
            updateWalletTx(defaultTx)
        }
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



    const totalPages = Math.ceil(walletTx.length / 10)
    const pageNumArr = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumArr.push(i)
    }

    const handlePage = (event) => {

        setSearchParams({ page: event.target.value })

    }






    return (
        <div>

            {pageNumArr.map((page) =>
                <button onClick={handlePage} value={page} key={page}>{page}</button>)}
            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method<MultiselectCheckBox handleClick={handleSelectMethod} sortOptions={allTxSortOptions.method} /></th>
                        <th>Time<SingleSelect handleClick={(e) => handleFilter(e, 'time', 'timeStamp')} sortOptions={allTxSortOptions.time} /></th>
                        <th>Value<SingleSelect handleClick={(e) => handleFilter(e, 'value', 'value')} sortOptions={allTxSortOptions.value} /></th>
                        <th>Status<SingleSelect handleClick={(e) => handleFilter(e, 'status', 'isError')} sortOptions={allTxSortOptions.status} /></th>
                        <th>From<select onChange={(e) => console.log(e.target.value)}>
                            <option value='Low-High'>Low to High</option>
                            <option value='High-Low'>High to Low</option>

                        </select></th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {walletTx.slice((pageNum * 10) - 10, pageNum * 10).map(trans =>
                        <tr key={trans.hash}>
                            <td><a href={`https://etherscan.io/tx/${trans.hash}`}>{trans.hash.substring(2, 8)}...</a></td>
                            <td>{groupMethod(trans.functionName)}</td>
                            <td>{convertTimeStamp(trans.timeStamp)}</td>
                            <td>{(trans.value / 1000000000000000000).toFixed(2)} ETH</td>
                            <td>{trans.isError === '0' ? 'Success' : 'Fail'}</td>
                            <td onClick={CopyOnClick(trans.from)} style={{ cursor: 'pointer' }}>
                                {trans.from === address.toLowerCase() ? "My Wallet" : trans.from.substring(2, 8)}
                            </td>
                            <td onClick={CopyOnClick(trans.to)} style={{ cursor: 'pointer' }}>
                                {trans.to === address.toLowerCase() ? 'My Wallet' : trans.to.substring(2, 8)}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )




}

export default NormalTxDataList