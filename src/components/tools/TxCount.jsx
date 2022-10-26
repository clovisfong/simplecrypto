import { Box, Grid, Typography } from '@mui/material';
const TxCount = ({ defaultTx }) => {

    const numOfTxPerToken = {}
    const tokenNamesArr = defaultTx.map((token) => token.tokenName)
    tokenNamesArr.forEach((token) => numOfTxPerToken[token] = (numOfTxPerToken[token] || 0) + 1)
    const tokenRankings = Object.entries(numOfTxPerToken) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[1] - a[1])
        .map((token) => ({ ['name']: token[0], ['count']: token[1] })) //turn arr of arrs into an arr of objects


    const topFiveTransactedNft = tokenRankings.slice(0, 5)

    const displayTopFiveNft =
        topFiveTransactedNft.map((token, index) => {
            return (
                <Grid container key={index} >
                    <Grid item xs={7} md={9}>{token.name} </Grid>
                    <Grid item xs={5} md={3}>{token.count}</Grid>
                </Grid>


            )
        })




    return (
        <>
            <Grid container >
                <Grid item xs={7} md={9}><Typography variant="h6" >Collection Name</Typography></Grid>
                <Grid item xs={5} md={3}> <Typography variant="h6">Count</Typography></Grid>
            </Grid >


            {displayTopFiveNft}

        </>

    )
}

export default TxCount