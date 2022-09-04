import MultiselectCheckBox from "../tools/MultiselectCheckBox"
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PageTracker from "../tools/PageTracker";
import { Box, Grid, Typography, Button, Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LaunchIcon from '@mui/icons-material/Launch';

const NftBalance = ({ walletNftBalance, defaultBal, setWalletNftBalance }) => {

    const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))

    const tokenNamesData = defaultBal.map((token) => token?.name)
    const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
    const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
        return {
            key: token
        }
    })



    const handleTokens = (event) => {
        setSearchParams({ page: 1 })
        const selectedTokens = event.map((token) => token.key)

        if (selectedTokens.length === 0) {
            setWalletNftBalance(defaultBal)
        } else {
            setWalletNftBalance(defaultBal.filter((tx) =>
                selectedTokens.some(
                    (token) => token === tx?.name)))
        }
    }


    const totalPages = Math.ceil(walletNftBalance.length / 20)

    return (
        <Box>
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
                    }}>Number of tokens: {walletNftBalance.length} </Typography>
                    <MultiselectCheckBox handleClick={handleTokens} sortOptions={uniqueTokenNamesObj} />
                </Grid>
            </Grid>


            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Tokens</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>ID</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>Link</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {walletNftBalance.slice((pageNum * 20) - 20, pageNum * 20).map((token) =>
                            <TableRow
                                key={token.name + token.data.token_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {token.name}
                                </TableCell>
                                <TableCell align="center">{token.data.token_id}</TableCell>
                                <TableCell align="center"><Link href={`https://opensea.io/assets/ethereum/${token.contract_address}/${token.data.token_id}`}><Button><LaunchIcon></LaunchIcon></Button></Link></TableCell>

                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default NftBalance