import TxFlowByAdd from "../tools/TxFlowByAdd"
import { Grid, Typography } from '@mui/material';

const CryptoTxFlowByAdd = ({ defaultTx, address }) => {


    return (
        <Grid
            item xs={6}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem'


            }}>

            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 Addresses By Transactions Count</Typography>

            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />

        </Grid>
    )
}

export default CryptoTxFlowByAdd