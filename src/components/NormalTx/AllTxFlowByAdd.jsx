import TxFlowByAdd from "../tools/TxFlowByAdd"
import { Grid, Typography } from '@mui/material';

const AllTxFlowByAdd = ({ defaultTx, address }) => {



    return (
        <Grid
            item xs={12}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem',
                mt: 3


            }}>
            <Typography variant="h5">Top 5 Addresses By Transactions Count</Typography>
            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />


        </Grid>
    )
}

export default AllTxFlowByAdd