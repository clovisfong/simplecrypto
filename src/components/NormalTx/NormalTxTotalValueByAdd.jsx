import { Box, Grid, Typography, Link } from '@mui/material';

const NormalTxTotalValueByAdd = ({ defaultTx, address }) => {


    const topFiveTransactedAdd = (owner, flow) => {

        const successfulTransactedAdd = defaultTx.filter((tx) => (tx[owner] === address.toLowerCase() && tx.isError == 0))

        const txPerToAdd = {}
        successfulTransactedAdd.forEach((add) => txPerToAdd[add[flow]] = (txPerToAdd[add[flow]] === undefined ? Number(add.value) : txPerToAdd[add[flow]] + Number(add.value)))

        const addRankings = Object.entries(txPerToAdd) //turn entire object of key-values into an array of key-value arrays
            .sort((a, b) => b[1] - a[1])
            .map((add) => ({ ['name']: add[0], ['value']: ((add[1] / 1000000000000000000).toFixed(2)) }))

        const topFiveAdd = addRankings.slice(0, 5)

        return displaytopFiveFromAdd(topFiveAdd)
    }



    const displaytopFiveFromAdd = (topFiveAdd) =>
        topFiveAdd.map((token, index) => {
            return (
                <Grid container key={index} >
                    <Grid item xs={6}>
                        <Link href={`/wallet-transactions/${address}/transaction-history/${token.name}`} underline="none">
                            {token.name.substring(2, 8)}</Link>
                    </Grid>
                    <Grid item xs={6}> <Typography variant="body2">{token.value} ETH</Typography></Grid>



                </Grid>


            )
        })




    return (

        <Grid sx={{
            backgroundColor: '#F4F5F7',
            p: { xs: '2rem', sm: '2.5rem' },
            borderRadius: '0.75rem'

        }}
        >
            <Typography variant="h5" >Top 5 Transacted Addresses By Total Value</Typography>

            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ mt: 3 }}>Inflow From</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ mt: 3 }}>Value</Typography>
                </Grid>
            </Grid>
            {topFiveTransactedAdd('to', 'from')}


            <Grid container>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ mt: 3 }}>Outflow To</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6" sx={{ mt: 3 }}>Value</Typography>
                </Grid>
            </Grid>

            {topFiveTransactedAdd('from', 'to')}



        </Grid>
    )
}

export default NormalTxTotalValueByAdd