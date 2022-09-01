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
                <Grid container spacing={0} key={index} >
                    <Grid item xs={6}>{token.name} </Grid>
                    <Grid item xs={6}>{token.count}</Grid>
                </Grid>


            )
        })




    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={6}><Typography variant="h6" sx={{ mt: 2 }}>Collection Name</Typography></Grid>
                <Grid item xs={6}> <Typography variant="h6" sx={{ mt: 2 }}>Count</Typography></Grid>
            </Grid >
            <Grid container spacing={0}>

                {displayTopFiveNft}
            </Grid>
        </Box>

    )
}

export default TxCount