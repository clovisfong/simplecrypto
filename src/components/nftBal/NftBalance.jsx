import MultiselectCheckBox from "../tools/MultiselectCheckBox"
import { Button } from '@mui/material';
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PageTracker from "../tools/PageTracker";
import { Box, Grid } from '@mui/material';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

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
                    <MultiselectCheckBox handleClick={handleTokens} sortOptions={uniqueTokenNamesObj} />
                </Grid>
            </Grid>
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>ID</th>
                        <th>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {walletNftBalance?.slice((pageNum * 20) - 20, pageNum * 20)?.map((token) =>
                        <tr key={token.name + token.data.token_id}>
                            <td>{token.name}</td>
                            <td>{token.data.token_id}</td>
                            <td><a href={`https://opensea.io/assets/ethereum/${token.contract_address}/${token.data.token_id}`}><Button>View</Button></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
            {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tokens<MultiselectCheckBox handleClick={handleTokens} sortOptions={uniqueTokenNamesObj} /></TableCell>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Link</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {walletNftBalance.map((token) =>
                        <TableRow
                            key={token.name + token.data.token_id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {token.name}
                            </TableCell>
                            <TableCell align="right">{token.data.token_id}</TableCell>
                            <TableCell align="right"><a href={`https://opensea.io/assets/ethereum/${token.contract_address}/${token.data.token_id}`}><Button>View</Button></a></TableCell>

                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer> */}
        </Box>
    )
}

export default NftBalance