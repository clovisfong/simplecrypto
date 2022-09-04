import cryptoBalSortOptions from "../../data/cryptoBalSortOptions"
import { Box, Grid, Typography, Button } from '@mui/material';
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PageTracker from "../tools/PageTracker";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DropDownMenu from "../tools/DropDownMenu";

const CryptoBalance = ({ walletBalance, defaultBal, updateWalletBalance }) => {

    const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))

    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)


    const handleType = (item) => {
        setSearchParams({ page: 1 })
        if (item !== cryptoBalSortOptions.type[3].key) {
            updateWalletBalance(defaultBal.filter((token) =>
                token.type === item.toLowerCase()))
        } else {
            updateWalletBalance(defaultBal)
        }
    }

    const handleQuantity = (item) => {
        setSearchParams({ page: 1 })
        if (item === cryptoBalSortOptions.quantity[0].key) {
            const sortArrByLowest = walletBalance.sort((a, b) => Number(a?.balance) - Number(b?.balance))
            updateWalletBalance([...sortArrByLowest])

        } else if (item === cryptoBalSortOptions.quantity[1].key) {
            const sortArrByHighest = walletBalance.sort((a, b) => Number(b?.balance) - Number(a?.balance))
            updateWalletBalance([...sortArrByHighest])

        } else {
            updateWalletBalance(defaultBal)

        }
    }

    const handleValue = (item) => {
        setSearchParams({ page: 1 })
        if (item === cryptoBalSortOptions.value[0].key) {
            const sortArrByLowest = walletBalance.sort((a, b) => Number(a?.[quote_rate]) - Number(b?.[quote_rate]))
            updateWalletBalance([...sortArrByLowest])

        } else if (item === cryptoBalSortOptions.value[1].key) {
            const sortArrByHighest = walletBalance.sort((a, b) => Number(b?.[quote_rate]) - Number(a?.[quote_rate]))
            updateWalletBalance([...sortArrByHighest])

        } else {
            updateWalletBalance(defaultBal)

        }
    }

    // const handleGeneral = (event, select, data) => {
    //     setSearchParams({ page: 1 })
    //     if (event[0].key === cryptoBalSortOptions[select][0].key) {
    //         const sortArrByLowest = walletBalance.sort((a, b) => Number(a?.[data]) - Number(b?.[data]))
    //         updateWalletBalance([...sortArrByLowest])

    //     } else if (event[0].key === cryptoBalSortOptions[select][1].key) {
    //         const sortArrByHighest = walletBalance.sort((a, b) => Number(b?.[data]) - Number(a?.[data]))
    //         updateWalletBalance([...sortArrByHighest])

    //     } else {
    //         updateWalletBalance(defaultBal)

    //     }
    // }

    const totalPages = Math.ceil(quantifiableTokens.length / 20)

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

    const yellow = {
        backgroundColor: '#F1C88A',
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
                    }}>Number of tokens: {quantifiableTokens.length} </Typography>
                </Grid>
            </Grid>

            <TableContainer component={Paper} sx={{ borderRadius: 0.5 }}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>Tokens</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Type
                                    <DropDownMenu handleData={handleType} sortOptions={cryptoBalSortOptions.type} />
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Quantity
                                    <DropDownMenu handleData={handleQuantity} sortOptions={cryptoBalSortOptions.quantity} />
                                </Box>
                            </TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }} >Total Value
                                    <DropDownMenu handleData={handleValue} sortOptions={cryptoBalSortOptions.value} />
                                </Box>
                            </TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {quantifiableTokens.slice((pageNum * 20) - 20, pageNum * 20).map((token) =>
                            <TableRow
                                key={token.contract_name + token.contract_address}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {token.contract_name}
                                </TableCell>
                                <TableCell align="center" >{token.type === 'cryptocurrency' ?
                                    <Typography sx={green} >Cryptocurrency</Typography> :
                                    token.type === 'stablecoin' ?
                                        <Typography sx={yellow} >Stablecoin</Typography> :
                                        <Typography sx={red} >Dust</Typography>



                                }</TableCell>
                                <TableCell align="center">{(token.balance / 1000000000000000000).toFixed(2)}</TableCell>
                                <TableCell align="center">${(token.balance * token.quote_rate / 1000000000000000000).toFixed(2)}</TableCell>

                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    )
}

export default CryptoBalance