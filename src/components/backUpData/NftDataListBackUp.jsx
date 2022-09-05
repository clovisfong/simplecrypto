// import MultiselectCheckBox from "../tools/MultiselectCheckBox"
// import SingleSelect from "../tools/SingleSelect"
// import nftSortOptions from "../../data/nftSortOptions"
// import CopyOnClick from "../tools/CopyOnClick"
// import convertTimeStamp from "../tools/ConvertTimeStamp"



// const NftDataListBackUp = ({ nftTx, updateNftTx, defaultTx, address }) => {


//     const tokenNamesData = defaultTx.map((tx) => tx.tokenName)
//     const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
//     const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
//         return {
//             key: token
//         }
//     })




//     const assignTxMethod = (txFrom, txTo) => {
//         return (
//             txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
//                 txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
//                     txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
//         )
//     }

//     const handleFilter = (event, header, type) => {

//         if (event[0].key === nftSortOptions[header][0].key) {
//             const sortArrByEarliest = nftTx.sort((a, b) => a?.[type] - b?.[type])
//             updateNftTx([...sortArrByEarliest])

//         } else if (event[0].key === nftSortOptions[header][1].key) {
//             const sortArrByLatest = nftTx.sort((a, b) => b?.[type] - a?.[type])
//             updateNftTx([...sortArrByLatest])
//         } else {
//             updateNftTx(defaultTx)
//         }
//     }


//     const handleSelect = (event) => {
//         const selectedTokens = event.map((token) => token.key)

//         if (selectedTokens.length === 0) {
//             updateNftTx(defaultTx)
//         } else {
//             updateNftTx(defaultTx.filter((tx) =>
//                 selectedTokens.some(
//                     (token) => token === tx?.tokenName)))
//         }
//     }

//     const handleTime = (event) => {

//         if (event[0].key === nftSortOptions.time[0].key) {
//             const sortArrByEarliest = [...nftTx]
//             sortArrByEarliest.sort((a, b) => a?.timeStamp - b?.timeStamp)
//             updateNftTx(sortArrByEarliest)

//         } else if (event[0].key === nftSortOptions.time[1].key) {
//             const sortArrByLatest = [...nftTx]
//             sortArrByLatest.sort((a, b) => b?.timeStamp - a?.timeStamp)
//             updateNftTx(sortArrByLatest)
//         } else {
//             updateNftTx(defaultTx)

//         }
//     }

//     const handleMethod = (event) => {
//         if (event[0].key !== nftSortOptions.method[4].key) {
//             updateNftTx(defaultTx.filter((tx) =>
//                 assignTxMethod(tx.from, tx.to) === event[0].key))
//         } else {
//             updateNftTx(defaultTx)
//         }
//     }




//     return (
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Hash</th>
//                         <th>Token<MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} /></th>
//                         <th>ID</th>
//                         <th>Time<SingleSelect handleClick={handleTime} sortOptions={nftSortOptions.time} /></th>
//                         <th>Method<SingleSelect handleClick={handleMethod} sortOptions={nftSortOptions.method} /></th>
//                         <th>From</th>
//                         <th>To</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {nftTx?.map(tx => {
//                         return (
//                             <tr key={tx.hash + tx.tokenID}>
//                                 <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
//                                 <td>{tx.tokenName}</td>
//                                 <td>{tx.tokenID}</td>
//                                 <td>{convertTimeStamp(tx.timeStamp)}</td>
//                                 <td>{assignTxMethod(tx.from, tx.to)}
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

// export default NftDataListBackUp