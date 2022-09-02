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
import { Container, Box, Grid, Typography } from '@mui/material';

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
                <TableCell align="right">{

                    assignTxMethod(tx.from, tx.to) === 'Purchase/Transfer In' ?
                        <Typography sx={{
                            backgroundColor: '#92E0A3',
                            fontSize: '0.75rem',
                            fontWeight: 'regular',
                            borderRadius: 2,
                            pt: 1,
                            pb: 1,
                            textAlign: 'center'
                        }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                        assignTxMethod(tx.from, tx.to) === 'Receive/Purchase' ?
                            <Typography sx={{
                                backgroundColor: '#92E0A3',
                                fontSize: '0.75rem',
                                fontWeight: 'regular',
                                borderRadius: 2,
                                pt: 1,
                                pb: 1,
                                textAlign: 'center'
                            }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                            assignTxMethod(tx.from, tx.to) === 'Sale/Transfer Out' ?
                                <Typography sx={{
                                    backgroundColor: '#F68383',
                                    fontSize: '0.75rem',
                                    fontWeight: 'regular',
                                    borderRadius: 2,
                                    pt: 1,
                                    pb: 1,
                                    textAlign: 'center'
                                }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                                assignTxMethod(tx.from, tx.to) === 'Mint' ?
                                    <Typography sx={{
                                        backgroundColor: '#F1C88A',
                                        fontSize: '0.75rem',
                                        fontWeight: 'regular',
                                        borderRadius: 5,
                                        pt: 1,
                                        pb: 1,
                                        textAlign: 'center'
                                    }}

                                    >{assignTxMethod(tx.from, tx.to)}</Typography> : null


                }</TableCell>
                <TableCell align="right" onClick={CopyOnClick(tx.from)} style={{ cursor: 'pointer' }}>{tx.from === address.toLowerCase() ? "My Wallet" : tx.from.substring(2, 8)}</TableCell>
                <TableCell align="right" onClick={CopyOnClick(tx.to)} style={{ cursor: 'pointer' }}>{tx.to === address.toLowerCase() ? "My Wallet" : tx.to.substring(2, 8)}</TableCell>


            </TableRow>


        )
    })




    const totalPages = Math.ceil(dataTx?.length / 20)


    return (
        <Box>
            <Grid container spacing={0} sx={{ mb: 4 }}>
                <Grid item xs={9}>
                    <PageTracker
                        setSearchParams={setSearchParams}
                        pageStart={pageStart}
                        setPageStart={setPageStart}
                        pageNum={pageNum}
                        totalPages={totalPages} />
                </Grid>
                <Grid item xs={3}>
                    <MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} />
                </Grid>
            </Grid>
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

            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Hash</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>Token</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>{idOrValue === 'tokenID' ? 'ID' : 'Value'}</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}><Box sx={{ display: 'flex', justifyContent: 'end' }} >Time<SingleSelect handleClick={handleTime} sortOptions={sortTime} /></Box></TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}><Box sx={{ display: 'flex', justifyContent: 'end' }} >Method<SingleSelect handleClick={handleMethod} sortOptions={sortMethod} /></Box></TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>From</TableCell>
                            <TableCell align="right" sx={{ fontWeight: 'bold' }}>To</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TxDataTable