import TxCount from "../tools/TxCount"
import { Grid, Typography } from '@mui/material';

const NftTxCountByCollection = ({ defaultTx }) => {


    return (
        <Grid
            item xs={12}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                pl: '3rem',
                pr: '3rem',
                borderRadius: '0.75rem'


            }}>

            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 NFT Collections By Transactions Count</Typography>
            <TxCount defaultTx={defaultTx} />

        </Grid>

    )
}

export default NftTxCountByCollection