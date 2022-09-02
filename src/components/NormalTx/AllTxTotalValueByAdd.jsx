import { Link } from "react-router-dom"
import { Box, Grid, Typography } from '@mui/material';

const AllTxTotalValueByAdd = ({ defaultTx, address }) => {


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
                // <li key={index}><Link to={`/wallet-transactions/${address}/transaction-history/${token.name}`}>
                //     {token.name.substring(2, 8)}</Link>  - {token.value} ETH

                // </li>
                <Box key={index}>
                    <Grid container spacing={0} >
                        <Grid item xs={6}>
                            <Link to={`/wallet-transactions/${address}/transaction-history/${token.name}`}>
                                {token.name.substring(2, 8)}</Link>
                        </Grid>
                        <Grid item xs={3}> <Typography variant="body2">{token.value} ETH</Typography></Grid>



                    </Grid>

                </Box>
            )
        })




    return (
        <Grid
            item xs={6}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem'


            }}>
            <Typography variant="h5" >Top 5 Transacted Addresses By Total Value</Typography>

            <Typography variant="h6" sx={{ mt: 3 }}>Outflow To</Typography>
            {topFiveTransactedAdd('to', 'from')}

            <Typography variant="h6" sx={{ mt: 3 }}>Outflow To</Typography>
            {topFiveTransactedAdd('from', 'to')}



        </Grid>
    )
}

export default AllTxTotalValueByAdd