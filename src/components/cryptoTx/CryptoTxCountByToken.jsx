import TxCount from "../tools/TxCount"
import { Grid, Typography } from '@mui/material';

const CryptoTxCountByToken = ({ defaultTx }) => {



    return (
        <Grid
            item xs={6}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem',
                mb: 3,
                mr: 3


            }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 Crypto By Transactions Count</Typography>

            <TxCount defaultTx={defaultTx} />

        </Grid>

    )
}

export default CryptoTxCountByToken