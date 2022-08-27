import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MultiselectCheckBox from "./MultiselectCheckBox"
import SingleSelect from "./SingleSelect"




const NftDataList = ({ nftTx, updateNftTx, defaultTx, address }) => {


    const tokenNamesData = defaultTx.map((tx) => tx.tokenName)
    const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
    const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
        return {
            key: token
        }
    })

    const convertTime = (timestamp) => {
        const num = Number(timestamp) * 1000
        const date = new Date(num)

        const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
        return (formattedDate)
    }

    const handleWalletAdd = (wallet) => () => {
        navigator.clipboard.writeText(wallet)
    }


    const sortOptions = {
        time: [{ key: 'Earliest' }, { key: 'Latest' }, { key: 'Default' }],
        value: [{ key: 'Low-High' }, { key: 'High-Low' }, { key: 'Default' }],
        status: [{ key: 'Success' }, { key: 'Fail' }, { key: 'Default' }],
    }



    const handleTime = (event) => {

        if (event[0].key === sortOptions.time[0].key) {
            const sortArrByEarliest = [...nftTx]
            sortArrByEarliest.sort((a, b) => a?.timeStamp - b?.timeStamp)
            updateNftTx(sortArrByEarliest)

        } else if (event[0].key === sortOptions.time[1].key) {
            const sortArrByLatest = [...nftTx]
            sortArrByLatest.sort((a, b) => b?.timeStamp - a?.timeStamp)
            updateNftTx(sortArrByLatest)
        } else {
            updateNftTx(defaultTx)

        }
    }



    const handleSelect = (event) => {
        const selectedTokens = event.map((token) => token.key)

        if (selectedTokens.length === 0) {
            updateNftTx(defaultTx)
        } else {
            updateNftTx(defaultTx.filter((tx) =>
                selectedTokens.some(
                    (token) => token === tx?.tokenName)))
        }

    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Token<MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} /></th>
                        <th>ID</th>
                        <th>Time<SingleSelect handleClick={handleTime} sortOptions={sortOptions.time} /></th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {nftTx?.map(tx => {
                        return (
                            <tr key={tx.hash + tx.tokenID}>
                                <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
                                <td>{tx.tokenName}</td>
                                <td>{tx.tokenID}</td>
                                <td>{convertTime(tx.timeStamp)}</td>
                                <td onClick={handleWalletAdd(tx.from)} style={{ cursor: 'pointer' }}>
                                    {tx.from === address.toLowerCase() ? "My Wallet" : tx.from.substring(2, 8)}
                                </td>
                                <td onClick={handleWalletAdd(tx.to)} style={{ cursor: 'pointer' }}>
                                    {tx.to === address.toLowerCase() ? "My Wallet" : tx.to.substring(2, 8)}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default NftDataList