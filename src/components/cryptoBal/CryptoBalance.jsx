import SingleSelect from "../tools/SingleSelect"
import cryptoBalSortOptions from "../../data/cryptoBalSortOptions"
import { Grid, Typography, Button } from '@mui/material';
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PageTracker from "../tools/PageTracker";
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const CryptoBalance = ({ walletBalance, defaultBal, updateWalletBalance }) => {

    const [searchParams, setSearchParams] = useSearchParams(1);
    const [pageStart, setPageStart] = useState(0)

    const pageNum = Number(searchParams.get('page'))

    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)


    const handleType = (event) => {
        setSearchParams({ page: 1 })
        if (event[0].key !== cryptoBalSortOptions.type[3].key) {
            updateWalletBalance(defaultBal.filter((token) =>
                token.type === event[0].key))
        } else {
            updateWalletBalance(defaultBal)
        }
    }

    const handleGeneral = (event, select, data) => {
        setSearchParams({ page: 1 })
        if (event[0].key === cryptoBalSortOptions[select][0].key) {
            const sortArrByLowest = walletBalance.sort((a, b) => Number(a?.[data]) - Number(b?.[data]))
            updateWalletBalance([...sortArrByLowest])

        } else if (event[0].key === cryptoBalSortOptions[select][1].key) {
            const sortArrByHighest = walletBalance.sort((a, b) => Number(b?.[data]) - Number(a?.[data]))
            updateWalletBalance([...sortArrByHighest])

        } else {
            updateWalletBalance(defaultBal)

        }


    }

    const totalPages = Math.ceil(walletBalance.length / 20)


    return (
        <div>
            <PageTracker
                setSearchParams={setSearchParams}
                pageStart={pageStart}
                setPageStart={setPageStart}
                pageNum={pageNum}
                totalPages={totalPages} />
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>Type<SingleSelect handleClick={handleType} sortOptions={cryptoBalSortOptions.type} /></th>
                        <th>Quantity<SingleSelect handleClick={(event) => handleGeneral(event, 'quantity', 'balance')} sortOptions={cryptoBalSortOptions.quantity} /></th>
                        <th>Total Value<SingleSelect handleClick={(event) => handleGeneral(event, 'value', 'quote_rate')} sortOptions={cryptoBalSortOptions.value} /></th>
                    </tr>
                </thead>

                <tbody>
                    {quantifiableTokens?.slice((pageNum * 20) - 20, pageNum * 20)?.map((token) =>
                        <tr key={token.contract_name + token.contract_address}>
                            <td>{token.contract_name}</td>
                            <td>{token.type}</td>
                            <td>{(token.balance / 1000000000000000000).toFixed(2)}</td>
                            <td>${(token.balance * token.quote_rate / 1000000000000000000).toFixed(2)}</td>
                        </tr>
                    )}

                </tbody>
            </table>
            {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 500 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Tokens</TableCell>
                        <TableCell align="right">Type<SingleSelect handleClick={handleType} sortOptions={cryptoBalSortOptions.type} /></TableCell>
                        <TableCell align="right">Quantity<SingleSelect handleClick={(event) => handleGeneral(event, 'quantity', 'balance')} sortOptions={cryptoBalSortOptions.quantity} /></TableCell>
                        <TableCell align="right">Total Value<SingleSelect handleClick={(event) => handleGeneral(event, 'value', 'quote_rate')} sortOptions={cryptoBalSortOptions.value} /></TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {quantifiableTokens.map((token) =>
                        <TableRow
                            key={token.contract_name + token.contract_address}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {token.contract_name}
                            </TableCell>
                            <TableCell align="right">{token.type}</TableCell>
                            <TableCell align="right">{(token.balance / 1000000000000000000).toFixed(2)}</TableCell>
                            <TableCell align="right">${(token.balance * token.quote_rate / 1000000000000000000).toFixed(2)}</TableCell>

                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer> */}

        </div>
    )
}

export default CryptoBalance