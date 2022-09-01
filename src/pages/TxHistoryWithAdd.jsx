import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import allTxMethodReplaceTable from "../data/allTxMethodReplaceTable"
import convertTimeStamp from "../components/tools/ConvertTimeStamp"
import NavBar from "../components/NavBar/NavBar"
import { Grid, Box, Container, Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const TxHistoryWithAdd = () => {

    const [walletTx, setWalletTx] = useState([])

    const { wallet } = useParams()
    const { address } = useParams()
    const navigateToTransactions = useNavigate()

    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    useEffect(() => {
        fetch(walletTxUrl)
            .then((response) => response.json())
            .then((data) => setWalletTx(data.result))
    }, [])


    const outflowTx = walletTx.filter(tx => tx.to === wallet && tx.isError == 0)
    const inflowTx = walletTx.filter(tx => tx.from === wallet && tx.isError == 0)



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


    const handleSwitchPage = () => {
        navigateToTransactions(`/wallet-transactions/${address}/all?page=1`)
    }


    const totalInflow = (inflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
    const totalOutflow = (outflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)


    return (
        <>
            <NavBar />
            <Container>
                <Grid container spacing={0}>
                    <Grid
                        item xs={6}
                        sx={{
                            backgroundColor: '#F4F5F7',
                            p: '2.5rem',
                            borderRadius: '0.75rem'


                        }}>
                        <Typography variant="h5">Transactions History </Typography>
                        <Typography variant="h6">Transacted With: {wallet}</Typography>
                        <Button
                            variant="contained"
                            sx={{ mt: 3 }}
                            onClick={handleSwitchPage}
                        >Back to Transactions
                        </Button>


                    </Grid>
                </Grid>

                <Box sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2rem',
                    borderRadius: '0.75rem',
                    mt: 5,
                    mb: 3


                }}>
                    <Typography variant="h5">Total Inflow: {totalInflow}</Typography>
                </Box>


                <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Hash</TableCell>
                                <TableCell align="right">Method</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">Status</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {inflowTx.map((tx) =>
                                <TableRow
                                    key={tx.hash}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a>
                                    </TableCell>
                                    <TableCell align="right">{groupMethod(tx.functionName)}</TableCell>
                                    <TableCell align="right">{convertTimeStamp(tx.timeStamp)}</TableCell>
                                    <TableCell align="right">{(tx.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                    <TableCell align="right">{tx.isError === '0' ? 'Success' : 'Fail'}</TableCell>


                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Box sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2rem',
                    borderRadius: '0.75rem',
                    mt: 5,
                    mb: 3
                }}>
                    <Typography variant="h5">Total Outflow: {totalOutflow}</Typography>
                </Box>


                <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                    <Table sx={{ minWidth: 500 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Hash</TableCell>
                                <TableCell align="right">Method</TableCell>
                                <TableCell align="right">Time</TableCell>
                                <TableCell align="right">Value</TableCell>
                                <TableCell align="right">Status</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {outflowTx.map((tx) =>
                                <TableRow
                                    key={tx.hash}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <a href={`https://etherscan.io/tx/${tx.hash}`}>{tx.hash.substring(2, 8)}...</a>
                                    </TableCell>
                                    <TableCell align="right">{groupMethod(tx.functionName)}</TableCell>
                                    <TableCell align="right">{convertTimeStamp(tx.timeStamp)}</TableCell>
                                    <TableCell align="right">{(tx.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                    <TableCell align="right">{tx.isError === '0' ? 'Success' : 'Fail'}</TableCell>


                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

export default TxHistoryWithAdd