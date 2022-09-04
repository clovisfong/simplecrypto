import { Box, Grid, Typography } from '@mui/material';
const TxMethodWeightage = ({ defaultTx, assignTxMethod, }) => {


    const txMethods = defaultTx.map((token) => assignTxMethod(token.from, token.to))
    const methodCount = txMethods.reduce((acc, val) => { //trying out reduce instead of forEach method
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    const arrOfMethodCount = Object.entries(methodCount) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[0] - a[0])
        .map((method) => ({ ['name']: method[0], ['count']: method[1] }))


    const methodWeightage =
        arrOfMethodCount.map((method) => {
            return (

                <Grid container spacing={0} key={method.name} >
                    <Grid item xs={7} md={9}>{method.name} </Grid>
                    <Grid item xs={5} md={3}>{method.count}</Grid>
                </Grid>
            )
        })

    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={7} md={9}><Typography variant="h6" >Method</Typography></Grid>
                <Grid item xs={5} md={3}> <Typography variant="h6" >Count</Typography></Grid>
            </Grid >
            <Grid container spacing={0}>

                {methodWeightage}
            </Grid>
        </Box>

    )
}

export default TxMethodWeightage