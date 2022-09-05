import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import allTxMethodReplaceTable from "../data/allTxMethodReplaceTable"
import convertTimeStamp from "../components/tools/ConvertTimeStamp"
import NavBar from "../components/NavBar/NavBar"
import { Grid, Box, Container, Button, Typography, Divider, Link } from '@mui/material';
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
        navigateToTransactions(`/wallet-transactions/${address}/transactions?page=1`)
    }


    const totalInflow = (inflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
    const totalOutflow = (outflowTx.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)



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


    return (

        <Container>
            <NavBar />
            <Grid container
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                    columnGap: '2rem'
                }}
            >
                <Grid item
                    sx={{
                        backgroundColor: '#F4F5F7',
                        p: '2rem',
                        pl: '3rem',
                        pr: '3rem',
                        borderRadius: '0.75rem',
                    }} >

                    <Typography variant="h5">Transaction History </Typography>
                    <Typography variant="h6" sx={{ mb: '2rem' }}>Transacted With: {wallet}</Typography>
                    <Button
                        variant="contained"
                        onClick={handleSwitchPage}
                    >Back to Transactions
                    </Button>
                </Grid>

                <Grid item
                    sx={{
                        backgroundColor: '#F4F5F7',
                        p: '2rem',
                        pt: '1rem',
                        borderRadius: '0.75rem',
                        justifyContent: 'flex-end',
                        display: { xs: 'none', sm: 'grid' }
                    }}>
                    <Box >
                        <Typography sx={{
                            backgroundColor: '#38393C',
                            color: '#F3E9DF',
                            p: '0.5rem',
                            pr: '0.75rem',
                            pl: '0.75rem',
                            borderRadius: '1rem',
                            fontSize: '0.75rem',
                            fontWeight: 'normal '
                        }}>Ads</Typography>
                    </Box>
                </Grid>

            </Grid>



            <Divider sx={{
                mt: '3rem',
            }}>
            </Divider>
            <Box sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                borderRadius: '0.75rem',
                mt: '3rem',
                mb: '2rem'


            }}>
                <Typography variant="h5">Total Inflow: {totalInflow} ETH</Typography>
            </Box>


            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Hash</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Method</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Value</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {inflowTx.map((tx) =>
                            <TableRow
                                key={tx.hash}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link href={`https://etherscan.io/tx/${tx.hash}`} underline="none">{tx.hash.substring(2, 8)}...</Link>
                                </TableCell>
                                <TableCell align="center">{groupMethod(tx.functionName)}</TableCell>
                                <TableCell align="center">{convertTimeStamp(tx.timeStamp)}</TableCell>
                                <TableCell align="center">{(tx.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                <TableCell align="center">{tx.isError === '0' ?
                                    <Typography sx={green} >Success</Typography> :
                                    <Typography sx={red} >Fail</Typography>}</TableCell>


                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                borderRadius: '0.75rem',
                mt: '3rem',
                mb: '2rem'
            }}>
                <Typography variant="h5" >Total Outflow: {totalOutflow} ETH</Typography>
            </Box>


            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 500 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Hash</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Method</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Time</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Value</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Status</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {outflowTx.map((tx) =>
                            <TableRow
                                key={tx.hash}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Link href={`https://etherscan.io/tx/${tx.hash}`} underline="none">{tx.hash.substring(2, 8)}...</Link>
                                </TableCell>
                                <TableCell align="center">{groupMethod(tx.functionName)}</TableCell>
                                <TableCell align="center">{convertTimeStamp(tx.timeStamp)}</TableCell>
                                <TableCell align="center">{(tx.value / 1000000000000000000).toFixed(2)} ETH</TableCell>
                                <TableCell align="center">{tx.isError === '0' ?
                                    <Typography sx={green} >Success</Typography> :
                                    <Typography sx={red} >Fail</Typography>}</TableCell>


                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ m: '10rem' }}> </Box>
        </Container>

    )
}

export default TxHistoryWithAdd