import MultiselectCheckBox from "./MultiselectCheckBox"
import SingleSelect from "./SingleSelect"
import convertTimeStamp from "./ConvertTimeStamp"
import CopyOnClick from "./CopyOnClick"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import PageTracker from "./PageTracker"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TxDataTable = ({ dataTx, updateState, defaultTx, address, assignTxMethod, earlyTime, lateTime, method, sortTime, sortMethod, idOrValue }) => {


    const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))

    const tokenNamesData = defaultTx.map((tx) => tx.tokenName)
    const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
    const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
        return {
            key: token
        }
    })


    const handleSelect = (event) => {
        const selectedTokens = event.map((token) => token.key)
        setSearchParams({ page: 1 })
        if (selectedTokens.length === 0) {
            updateState(defaultTx)
        } else {
            updateState(defaultTx.filter((tx) =>
                selectedTokens.some(
                    (token) => token === tx?.tokenName)))
        }
    }


    const handleTime = (event) => {
        setSearchParams({ page: 1 })
        if (event[0].key === earlyTime) {
            const sortArrByEarliest = dataTx.sort((a, b) => a?.timeStamp - b?.timeStamp)
            updateState([...sortArrByEarliest])

        } else if (event[0].key === lateTime) {
            const sortArrByLatest = dataTx.sort((a, b) => b?.timeStamp - a?.timeStamp)
            updateState([...sortArrByLatest])
        } else {
            updateState(defaultTx)

        }
    }

    const handleMethod = (event) => {
        setSearchParams({ page: 1 })
        if (event[0].key !== method) { //array num diff from NFTData
            updateState(defaultTx.filter((tx) =>
                assignTxMethod(tx.from, tx.to) === event[0].key))
        } else {
            updateState(defaultTx)
        }
    }


    const tableData = dataTx?.slice((pageNum * 20) - 20, pageNum * 20)?.map(tx => {
        return (
            // <tr key={tx.hash + tx.tokenID + tx.tokenName}>
            //     <td><a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a></td>
            //     <td>{tx.tokenName}</td>
            //     <td>{idOrValue === 'tokenID' ? (tx[idOrValue]) : (tx[idOrValue] / 1000000000000000000).toFixed(2) + ' ' + tx.tokenSymbol}</td>
            //     <td>{convertTimeStamp(tx.timeStamp)}</td>
            //     <td>
            //         {assignTxMethod(tx.from, tx.to)}
            //     </td>
            //     <td onClick={CopyOnClick(tx.from)} style={{ cursor: 'pointer' }}>
            //         {tx.from === address.toLowerCase() ? "My Wallet" : tx.from.substring(2, 8)}
            //     </td>
            //     <td onClick={CopyOnClick(tx.to)} style={{ cursor: 'pointer' }}>
            //         {tx.to === address.toLowerCase() ? "My Wallet" : tx.to.substring(2, 8)}
            //     </td>
            // </tr>


            <TableRow
                key={tx.hash + tx.tokenID + tx.tokenName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a>
                </TableCell>
                <TableCell align="right">{tx.tokenName}</TableCell>
                <TableCell align="right">{idOrValue === 'tokenID' ? (tx[idOrValue]) : (tx[idOrValue] / 1000000000000000000).toFixed(2) + ' ' + tx.tokenSymbol}</TableCell>
                <TableCell align="right">{convertTimeStamp(tx.timeStamp)}</TableCell>
                <TableCell align="right">{assignTxMethod(tx.from, tx.to)}</TableCell>
                <TableCell align="right" onClick={CopyOnClick(tx.from)} style={{ cursor: 'pointer' }}>{tx.from === address.toLowerCase() ? "My Wallet" : tx.from.substring(2, 8)}</TableCell>
                <TableCell align="right" onClick={CopyOnClick(tx.to)} style={{ cursor: 'pointer' }}>{tx.to === address.toLowerCase() ? "My Wallet" : tx.to.substring(2, 8)}</TableCell>


            </TableRow>


        )
    })




    const totalPages = Math.ceil(defaultTx.length / 20)


    return (
        <div>
            <PageTracker
                setSearchParams={setSearchParams}
                pageStart={pageStart}
                setPageStart={setPageStart}
                pageNum={pageNum}
                totalPages={totalPages} />
            {/* <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Token<MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} /></th>
                        <th>{idOrValue === 'tokenID' ? 'ID' : 'Value'}</th>
                        <th>Time<SingleSelect handleClick={handleTime} sortOptions={sortTime} /></th>
                        <th>Method<SingleSelect handleClick={handleMethod} sortOptions={sortMethod} /></th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData}
                </tbody>
            </table> */}

            <MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} />
            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hash</TableCell>
                            <TableCell align="right">Token</TableCell>
                            <TableCell align="right">{idOrValue === 'tokenID' ? 'ID' : 'Value'}</TableCell>
                            <TableCell align="right">Time<SingleSelect handleClick={handleTime} sortOptions={sortTime} /></TableCell>
                            <TableCell align="right">Method<SingleSelect handleClick={handleMethod} sortOptions={sortMethod} /></TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default TxDataTable