// import MultiselectCheckBox from "../tools/MultiselectCheckBox"
// import SingleSelect from "../tools/SingleSelect"
// import cryptoSortOptions from "../../data/cryptoSortOptions"
// import CopyOnClick from "../tools/CopyOnClick"
// import convertTimeStamp from "../tools/ConvertTimeStamp"

// const CryptoDataList = ({ cryptoTx, updateCryptoTx, defaultTx, address }) => {

//     const tokenNamesData = defaultTx.map((tx) => tx.tokenName)
//     const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
//     const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
//         return {
//             key: token
//         }
//     })



//     const assignTxMethod = (txFrom, txTo) => {
//         return (
//             txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? cryptoSortOptions.method[0].key :
//                 txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? cryptoSortOptions.method[1].key : cryptoSortOptions.method[2].key
//         )
//     }

//     const handleSelect = (event) => {
//         const selectedTokens = event.map((token) => token.key)

//         if (selectedTokens.length === 0) {
//             updateCryptoTx(defaultTx)
//         } else {
//             updateCryptoTx(defaultTx.filter((tx) =>
//                 selectedTokens.some(
//                     (token) => token === tx?.tokenName)))
//         }
//     }


//     const handleTime = (event) => {

//         if (event[0].key === cryptoSortOptions.time[0].key) {
//             const sortArrByEarliest = [...cryptoTx]
//             sortArrByEarliest.sort((a, b) => a?.timeStamp - b?.timeStamp)
//             updateCryptoTx(sortArrByEarliest)

//         } else if (event[0].key === cryptoSortOptions.time[1].key) {
//             const sortArrByLatest = [...cryptoTx]
//             sortArrByLatest.sort((a, b) => b?.timeStamp - a?.timeStamp)
//             updateCryptoTx(sortArrByLatest)
//         } else {
//             updateCryptoTx(defaultTx)

//         }
//     }

//     const handleMethod = (event) => {
//         if (event[0].key !== cryptoSortOptions.method[3].key) { //array num diff from NFTData
//             updateCryptoTx(defaultTx.filter((tx) =>
//                 assignTxMethod(tx.from, tx.to) === event[0].key))
//         } else {
//             updateCryptoTx(defaultTx)
//         }
//     }



//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Hash</th>
//                         <th>Token<MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} /></th>
//                         <th>Value</th>
//                         <th>Time<SingleSelect handleClick={handleTime} sortOptions={cryptoSortOptions.time} /></th>
//                         <th>Method<SingleSelect handleClick={handleMethod} sortOptions={cryptoSortOptions.method} /></th>
//                         <th>From</th>
//                         <th>To</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cryptoTx?.map(tx => {
//                         return (
//                             <tr key={tx.hash + tx.tokenID + tx.tokenName}>
//                                 <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
//                                 <td>{tx.tokenName}</td>
//                                 <td>{(tx.value / 1000000000000000000).toFixed(2)} {tx.tokenSymbol}</td>
//                                 <td>{convertTimeStamp(tx.timeStamp)}</td>
//                                 <td>
//                                     {assignTxMethod(tx.from, tx.to)}
//                                 </td>
//                                 <td onClick={CopyOnClick(tx.from)} style={{ cursor: 'pointer' }}>
//                                     {tx.from === address.toLowerCase() ? "My Wallet" : tx.from.substring(2, 8)}
//                                 </td>
//                                 <td onClick={CopyOnClick(tx.to)} style={{ cursor: 'pointer' }}>
//                                     {tx.to === address.toLowerCase() ? "My Wallet" : tx.to.substring(2, 8)}
//                                 </td>
//                             </tr>
//                         )
//                     })}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default CryptoDataList