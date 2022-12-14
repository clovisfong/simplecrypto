import { Grid, Typography } from '@mui/material';
const NormalTxTotalFlow = ({ defaultTx, address }) => {


    const totalEthFlow = (flow) => {
        const flowWallets = defaultTx.filter((tx) => tx[flow] === address.toLowerCase() && tx.isError == 0)
        const ethFlow = (flowWallets.reduce((acc, tx) => acc + Number(tx.value), 0) / 1000000000000000000).toFixed(2)
        return ethFlow
    }


    return (
        <Grid
            item xs={12}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                pl: { xs: '2rem', sm: '3rem' },
                pr: { xs: '2rem', sm: '3rem' },
                borderRadius: '0.75rem'
            }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Total Successful Transactions Flow</Typography>
            <Typography variant="body1">Total Inflow: {totalEthFlow('to')} ETH</Typography>
            <Typography variant="body1">Total Outflow: {totalEthFlow('from')} ETH</Typography>

        </Grid >
    )
}

export default NormalTxTotalFlow