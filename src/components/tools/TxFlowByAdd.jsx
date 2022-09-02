import { Link } from "react-router-dom"
import { Box, Grid, Typography } from '@mui/material';

const TxFlowByAdd = ({ defaultTx, address }) => {


    const fromAddresses = defaultTx.filter((tx) => ((tx.to === address.toLowerCase() && tx.from !== '0x0000000000000000000000000000000000000000') && tx.from))
        .map((tx) => tx.from)

    const toAddresses = defaultTx.filter((tx) => ((tx.from === address.toLowerCase() && tx.to !== '0x0000000000000000000000000000000000000000') && tx.to))
        .map((tx) => tx.to)


    const txPerAdd = {}
    const transactedAdd = fromAddresses.concat(toAddresses)
    transactedAdd.forEach((add) => txPerAdd[add] = (txPerAdd[add] || 0) + 1)

    const addressRankings = Object.entries(txPerAdd) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[1] - a[1])
        .map((add) => ({ ['name']: add[0], ['count']: add[1] }))


    const topFiveAddRankings = addressRankings.slice(0, 5)




    const fromTxOfTopFive = defaultTx.filter((tx) => topFiveAddRankings.some((add) => add.name === tx.from.toLowerCase())).map((tx) => tx.from)
    const NumOfTxPerFromAdd = {}
    fromTxOfTopFive.forEach((add) => NumOfTxPerFromAdd[add] = (NumOfTxPerFromAdd[add] || 0) + 1)


    const toTxOfTopFive = defaultTx.filter((tx) => topFiveAddRankings.some((add) => add.name === tx.to.toLowerCase())).map((tx) => tx.to)
    const NumOfTxPerToAdd = {}
    toTxOfTopFive.forEach((add) => NumOfTxPerToAdd[add] = (NumOfTxPerToAdd[add] || 0) + 1)






    const displaytopFiveAdd =
        topFiveAddRankings.map((token, index) => {
            if (defaultTx[0]?.isError === undefined) {
                if (defaultTx[0]?.value === undefined) {
                    return (
                        <Box key={index}>
                            <Grid container spacing={0} >
                                <Grid item xs={4}> {token.name.substring(2, 8)}

                                    {/* <Link to={`/wallet-transactions/${address}/nft-transaction-history/${token.name}`}>
                                    {token.name.substring(2, 8)}</Link> */}
                                </Grid>
                                <Grid item xs={3}> <Typography variant="body2">{token.count}</Typography></Grid>
                                <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                                <Grid item xs={2}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>


                            </Grid>

                        </Box>

                    )
                } else {

                    return (
                        <Box key={index}>
                            <Grid container spacing={0} >
                                <Grid item xs={4}>{token.name.substring(2, 8)}</Grid>
                                <Grid item xs={3}> <Typography variant="body2">{token.count}</Typography></Grid>
                                <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                                <Grid item xs={2}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>


                            </Grid>
                        </Box>
                    )
                }
            } else {
                return (
                    // <li key={index}>
                    //     <Link to={`/wallet-transactions/${address}/transaction-history/${token.name}`}>
                    //         {token.name}</Link>
                    //     - Total {token.count} - Outflow {NumOfTxPerFromAdd[token.name] || 0}
                    //     - Inflow {NumOfTxPerToAdd[token.name] || 0}  </li>
                    <Box key={index}>
                        <Grid container spacing={0} >
                            <Grid item xs={4}>
                                <Link to={`/wallet-transactions/${address}/transaction-history/${token.name}`}>
                                    {token.name.substring(2, 8)}</Link>
                            </Grid>
                            <Grid item xs={3}> <Typography variant="body2">{token.count}</Typography></Grid>
                            <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                            <Grid item xs={2}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>


                        </Grid>

                    </Box>
                )
            }
        })


    return (
        <Box>
            <Grid container spacing={0} sx={{ mt: 2 }} >
                <Grid item xs={4} ></Grid>
                <Grid item xs={3}> <Typography variant="h6">Total</Typography></Grid>
                <Grid item xs={3}> <Typography variant="h6">OutFlow</Typography></Grid>
                <Grid item xs={2}> <Typography variant="h6">Inflow</Typography></Grid>
            </Grid>
            {displaytopFiveAdd}



        </Box>
    )
}

export default TxFlowByAdd