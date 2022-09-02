import MultiselectCheckBox from "../tools/MultiselectCheckBox"
import SingleSelect from "../tools/SingleSelect"
import allTxMethodReplaceTable from "../../data/allTxMethodReplaceTable"
import { useSearchParams } from "react-router-dom"
import CopyOnClick from "../tools/CopyOnClick"
import convertTimeStamp from "../tools/ConvertTimeStamp"
import allTxSortOptions from "../../data/allTXSortOptions"
import { useState } from "react"
import PageTracker from "../tools/PageTracker"
import { Container, Box, Grid, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




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



    const handleFilter = (event, header, type) => {
        setSearchParams({ page: 1 })

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

    const totalPages = Math.ceil(walletTx.length / 20)


    const green = {
        backgroundColor: '#92E0A3',
        fontSize: '0.75rem',
        fontWeight: 'regular',
        borderRadius: 2,
        pt: 1,
        pb: 1,
        textAlign: 'center'
    }

    const red = {
        backgroundColor: '#F68383',
        fontSize: '0.75rem',
        fontWeight: 'regular',
        borderRadius: 5,
        pt: 1,
        pb: 1,
        textAlign: 'center'
    }

    return (
        <Box >
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
                        <th>Method<MultiselectCheckBox handleClick={handleSelectMethod} sortOptions={allTxSortOptions.method} /></th>
                        <th>Time<SingleSelect handleClick={(e) => handleFilter(e, 'time', 'timeStamp')} sortOptions={allTxSortOptions.time} /></th>
                        <th>Value<SingleSelect handleClick={(e) => handleFilter(e, 'value', 'value')} sortOptions={allTxSortOptions.value} /></th>
                        <th>Status<SingleSelect handleClick={(e) => handleFilter(e, 'status', 'isError')} sortOptions={allTxSortOptions.status} /></th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    {walletTx.slice((pageNum * 20) - 20, pageNum * 20).map(trans =>
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
            </table> */}
            <MultiselectCheckBox handleClick={handleSelectMethod} sortOptions={allTxSortOptions.method} />
            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Hash</TableCell>
                            <TableCell align="right">Method</TableCell>
                            <TableCell align="right">Time<SingleSelect handleClick={(e) => handleFilter(e, 'time', 'timeStamp')} sortOptions={allTxSortOptions.time} /></TableCell>
                            <TableCell align="right">Value<SingleSelect handleClick={(e) => handleFilter(e, 'value', 'value')} sortOptions={allTxSortOptions.value} /></TableCell>
                            <TableCell align="right">Status<SingleSelect handleClick={(e) => handleFilter(e, 'status', 'isError')} sortOptions={allTxSortOptions.status} /></TableCell>
                            <TableCell align="right">From</TableCell>
                            <TableCell align="right">To</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {walletTx.slice((pageNum * 20) - 20, pageNum * 20).map(trans =>
                            <TableRow
                                key={trans.hash}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <a href={`https://etherscan.io/tx/${trans.hash}`}>{trans.hash.substring(2, 8)}...</a>
                                </TableCell>
                                <TableCell align="right">{groupMethod(trans.functionName)}</TableCell>
                                <TableCell align="right">{convertTimeStamp(trans.timeStamp)}</TableCell>
                                <TableCell align="right">{(trans.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                <TableCell align="right">{trans.isError === '0' ?
                                    <Typography sx={green} >Success</Typography> :
                                    <Typography sx={red} >Fail</Typography>}</TableCell>
                                <TableCell align="right" onClick={CopyOnClick(trans.from)} style={{ cursor: 'pointer' }}>
                                    {trans.from === address.toLowerCase() ? "My Wallet" : trans.from.substring(2, 8)}</TableCell>
                                <TableCell align="right" onClick={CopyOnClick(trans.to)} style={{ cursor: 'pointer' }}>
                                    {trans.to === address.toLowerCase() ? 'My Wallet' : trans.to.substring(2, 8)}</TableCell>


                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )




}

export default NormalTxDataList