import TxCount from "../tools/TxCount"
import { Grid, Typography } from '@mui/material';

const NftTxCountByCollection = ({ defaultTx }) => {


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


            <Typography variant="h5" sx={{ mb: 2 }}>Top 5 NFT Collections By Transactions Count</Typography>
            <TxCount defaultTx={defaultTx} />

        </Grid>

    )
}

export default NftTxCountByCollection