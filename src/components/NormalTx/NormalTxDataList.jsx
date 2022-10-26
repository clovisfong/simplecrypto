import MultiselectCheckBox from "../tools/MultiselectCheckBox"
import allTxMethodReplaceTable from "../../data/allTxMethodReplaceTable"
import { useSearchParams } from "react-router-dom"
import CopyOnClick from "../tools/CopyOnClick"
import convertTimeStamp from "../tools/ConvertTimeStamp"
import allTxSortOptions from "../../data/allTXSortOptions"
import { useState } from "react"
import PageTracker from "../tools/PageTracker"
import { Container, Box, Grid, Typography, Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DropDownMenu from "../tools/DropDownMenu"




const NormalTxDataList = ({ walletTx, updateWalletTx, defaultTx, address }) => {

    const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))


    const handleSelectMethod = (event) => {
        setSearchParams({ page: 1 })
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



    // const handleFilter = (event, header, type) => {
    //     setSearchParams({ page: 1 })

    //     if (event[0].key === allTxSortOptions[header][0].key) {
    //         const sortArrByEarliest = walletTx.sort((a, b) => a?.[type] - b?.[type])
    //         updateWalletTx([...sortArrByEarliest])

    //     } else if (event[0].key === allTxSortOptions[header][1].key) {
    //         const sortArrByLatest = walletTx.sort((a, b) => b?.[type] - a?.[type])
    //         updateWalletTx([...sortArrByLatest])
    //     } else {
    //         updateWalletTx(defaultTx)
    //     }
    // }



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

    const totalPages = Math.ceil(walletTx.length / 20)


    const green = {
        backgroundColor: '#92E0A3',
        fontSize: '0.75rem',
        fontWeight: 'regular',
        borderRadius: 2,
        p: '0.5rem',
        pr: '1rem',
        pl: '1rem',
        textAlign: 'center',
        display: 'inline-flex',
    }

    const red = {
        backgroundColor: '#F68383',
        fontSize: '0.75rem',
        fontWeight: 'regular',
        borderRadius: 2,
        p: '0.5rem',
        pr: '1rem',
        pl: '1rem',
        textAlign: 'center',
        display: 'inline-flex',
    }




    const handleTime = (item) => {
        setSearchParams({ page: 1 })

        if (item === allTxSortOptions.time[0].key) {
            const sortArrByEarliest = walletTx.sort((a, b) => a?.timeStamp - b?.timeStamp)
            updateWalletTx([...sortArrByEarliest])

        } else if (item === allTxSortOptions.time[1].key) {
            const sortArrByLatest = walletTx.sort((a, b) => b?.timeStamp - a?.timeStamp)
            updateWalletTx([...sortArrByLatest])
        } else {
            updateWalletTx(defaultTx)
        }
    }

    const handleValue = (item) => {
        setSearchParams({ page: 1 })

        if (item === allTxSortOptions.value[0].key) {
            const sortArrByEarliest = walletTx.sort((a, b) => a?.value - b?.value)
            updateWalletTx([...sortArrByEarliest])

        } else if (item === allTxSortOptions.value[1].key) {
            const sortArrByLatest = walletTx.sort((a, b) => b?.value - a?.value)
            updateWalletTx([...sortArrByLatest])
        } else {
            updateWalletTx(defaultTx)
        }
    }


    const handleStatus = (item) => {
        setSearchParams({ page: 1 })

        if (item === allTxSortOptions.status[0].key) {
            const sortArrByEarliest = walletTx.sort((a, b) => a?.isError - b?.isError)
            updateWalletTx([...sortArrByEarliest])

        } else if (item === allTxSortOptions.status[1].key) {
            const sortArrByLatest = walletTx.sort((a, b) => b?.isError - a?.isError)
            updateWalletTx([...sortArrByLatest])
        } else {
            updateWalletTx(defaultTx)
        }
    }



    return (
        <Box >
            <Grid container spacing={0} sx={{ mb: 4, }}>
                <Grid item xs={12} md={9}>
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
                    }}>Number of transactions: {walletTx.length} </Typography>
                    <MultiselectCheckBox handleClick={handleSelectMethod} sortOptions={allTxSortOptions.method} />
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Hash</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Method</TableCell>



                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Time
                                    <DropDownMenu handleData={handleTime} sortOptions={allTxSortOptions.time} />
                                </Box>
                            </TableCell>

                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Value
                                    <DropDownMenu handleData={handleValue} sortOptions={allTxSortOptions.value} />
                                </Box>
                            </TableCell>

                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Status
                                    <DropDownMenu handleData={handleStatus} sortOptions={allTxSortOptions.status} />
                                </Box>
                            </TableCell>

                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>From</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>To</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {walletTx.slice((pageNum * 20) - 20, pageNum * 20).map((trans, i) =>
                            <TableRow
                                key={trans.hash + i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link href={`https://etherscan.io/tx/${trans.hash}`} underline="none">{trans.hash.substring(2, 8)}...</Link>
                                </TableCell>
                                <TableCell align="center">{groupMethod(trans.functionName)}</TableCell>
                                <TableCell align="center">{convertTimeStamp(trans.timeStamp)}</TableCell>
                                <TableCell align="center">{(trans.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                <TableCell align="center">{trans.isError === '0' ?
                                    <Typography sx={green} >Success</Typography> :
                                    <Typography sx={red} >Fail</Typography>}</TableCell>
                                <TableCell align="center" onClick={CopyOnClick(trans.from)} style={{ cursor: 'pointer' }}>
                                    {trans.from === address.toLowerCase() ? "Wallet" : trans.from.substring(2, 8)}</TableCell>
                                <TableCell align="center" onClick={CopyOnClick(trans.to)} style={{ cursor: 'pointer' }}>
                                    {trans.to === address.toLowerCase() ? 'Wallet' : trans.to.substring(2, 8)}</TableCell>


                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )




}

export default NormalTxDataList