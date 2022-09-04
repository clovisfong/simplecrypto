import { Box, Grid, Typography, Link } from '@mui/material';

const TxFlowByAdd = ({ defaultTx, address }) => {


    const fromAddresses = defaultTx?.filter((tx) => ((tx?.to === address.toLowerCase() && tx?.from !== '0x0000000000000000000000000000000000000000') && tx.from))
        .map((tx) => tx?.from)

    const toAddresses = defaultTx?.filter((tx) => ((tx?.from === address.toLowerCase() && tx?.to !== '0x0000000000000000000000000000000000000000') && tx.to))
        .map((tx) => tx?.to)


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
                        <Grid container key={index}>
                            <Grid item xs={4}> {token.name.substring(2, 8)}</Grid>
                            <Grid item xs={3}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>
                            <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                            <Grid item xs={1}> <Typography variant="body2">{token.count}</Typography></Grid>
                        </Grid>

                    )
                } else {

                    return (

                        <Grid container key={index} >
                            <Grid item xs={4}>{token.name.substring(2, 8)}</Grid>
                            <Grid item xs={3}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>
                            <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                            <Grid item xs={1}> <Typography variant="body2">{token.count}</Typography></Grid>
                        </Grid>

                    )
                }
            } else {
                return (
                    <Grid container key={index} >
                        <Grid item xs={4}>
                            <Link href={`/wallet-transactions/${address}/transaction-history/${token.name}`} underline="none">
                                {token.name.substring(2, 8)}</Link>
                        </Grid>
                        <Grid item xs={3}> <Typography variant="body2">{NumOfTxPerToAdd[token.name] || 0} </Typography></Grid>
                        <Grid item xs={3}><Typography variant="body2">{NumOfTxPerFromAdd[token.name] || 0}</Typography></Grid>
                        <Grid item xs={1}> <Typography variant="body2">{token.count}</Typography></Grid>
                    </Grid>


                )
            }
        })


    return (
        <Box>
            <Grid container  >
                <Grid item xs={4} ></Grid>
                <Grid item xs={3} > <Typography variant="h6">Inflow</Typography></Grid>
                <Grid item xs={3} > <Typography variant="h6">OutFlow</Typography></Grid>
                <Grid item xs={1} > <Typography variant="h6">Total</Typography></Grid>
            </Grid>
            {displaytopFiveAdd}



        </Box>
    )
}

export default TxFlowByAdd