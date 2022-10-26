import MultiselectCheckBox from "./MultiselectCheckBox"
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
import { Container, Box, Grid, Typography, Link } from '@mui/material';
import DropDownMenu from "./DropDownMenu"

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


    const handleTime = (item) => {
        setSearchParams({ page: 1 })
        if (item === earlyTime) {
            const sortArrByEarliest = dataTx.sort((a, b) => a?.timeStamp - b?.timeStamp)
            updateState([...sortArrByEarliest])

        } else if (item === lateTime) {
            const sortArrByLatest = dataTx.sort((a, b) => b?.timeStamp - a?.timeStamp)
            updateState([...sortArrByLatest])
        } else {
            updateState(defaultTx)

        }
    }

    const handleMethod = (item) => {
        setSearchParams({ page: 1 })
        if (item !== method) { //array num diff from NFTData
            updateState(defaultTx.filter((tx) =>
                assignTxMethod(tx.from, tx.to) === item))
        } else {
            updateState(defaultTx)
        }
    }


    const tableData = dataTx?.slice((pageNum * 20) - 20, pageNum * 20)?.map((tx, i) => {
        return (

            <TableRow
                key={tx.hash + tx.tokenID + tx.tokenName + i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    <Link href={`https://etherscan.io/tx/${tx.hash}`} underline="none">{tx.hash.substring(2, 8)}...</Link>
                </TableCell>
                <TableCell align="center">{tx.tokenName}</TableCell>
                <TableCell align="center">{idOrValue === 'tokenID' ? (tx[idOrValue]) : (tx[idOrValue] / 1000000000000000000).toFixed(2) + ' ' + tx.tokenSymbol}</TableCell>
                <TableCell align="center">{convertTimeStamp(tx.timeStamp)}</TableCell>
                <TableCell align="center">{

                    assignTxMethod(tx.from, tx.to) === 'Purchase/Transfer In' ?
                        <Typography sx={{
                            backgroundColor: '#92E0A3',
                            fontSize: '0.75rem',
                            fontWeight: 'regular',
                            borderRadius: 2,
                            p: '0.5rem',
                            pr: '1rem',
                            pl: '1rem',
                            textAlign: 'center',
                            display: 'inline-flex',
                        }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                        assignTxMethod(tx.from, tx.to) === 'Receive/Purchase' ?
                            <Typography sx={{
                                backgroundColor: '#92E0A3',
                                fontSize: '0.75rem',
                                fontWeight: 'regular',
                                borderRadius: 2,
                                p: '0.5rem',
                                pr: '1rem',
                                pl: '1rem',
                                textAlign: 'center',
                                display: 'inline-flex',
                            }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                            assignTxMethod(tx.from, tx.to) === 'Sale/Transfer Out' ?
                                <Typography sx={{
                                    backgroundColor: '#F68383',
                                    fontSize: '0.75rem',
                                    fontWeight: 'regular',
                                    borderRadius: 2,
                                    p: '0.5rem',
                                    pr: '1rem',
                                    pl: '1rem',
                                    textAlign: 'center',
                                    display: 'inline-flex',
                                }} >{assignTxMethod(tx.from, tx.to)}</Typography> :

                                assignTxMethod(tx.from, tx.to) === 'Mint' ?
                                    <Typography sx={{
                                        backgroundColor: '#F1C88A',
                                        fontSize: '0.75rem',
                                        fontWeight: 'regular',
                                        borderRadius: 2,
                                        p: '0.5rem',
                                        pr: '1rem',
                                        pl: '1rem',
                                        textAlign: 'center',
                                        display: 'inline-flex',
                                    }}

                                    >{assignTxMethod(tx.from, tx.to)}</Typography> : null


                }</TableCell>
                <TableCell align="center" onClick={CopyOnClick(tx.from)} style={{ cursor: 'pointer' }}>{tx.from === address.toLowerCase() ? "Wallet" : tx.from.substring(2, 8)}</TableCell>
                <TableCell align="center" onClick={CopyOnClick(tx.to)} style={{ cursor: 'pointer' }}>{tx.to === address.toLowerCase() ? "Wallet" : tx.to.substring(2, 8)}</TableCell>


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
                <Grid item xs={12} md={3}>
                    <Typography variant="body1" sx={{
                        textAlign: { xs: 'left', md: 'right' },
                        mt: { xs: '1rem', md: '0' },
                        mb: '0.5rem'
                    }}>Number of transactions: {dataTx?.length} </Typography>
                    <MultiselectCheckBox handleClick={handleSelect} sortOptions={uniqueTokenNamesObj} />
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Hash</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Token</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>{idOrValue === 'tokenID' ? 'ID' : 'Value'}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Time
                                    <DropDownMenu handleData={handleTime} sortOptions={sortTime} />
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Method
                                    <DropDownMenu handleData={handleMethod} sortOptions={sortMethod} />
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>From</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>To</TableCell>

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