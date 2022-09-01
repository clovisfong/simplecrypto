import TxFlowByAdd from "../tools/TxFlowByAdd"
import { Grid, Typography } from '@mui/material';
const NftTxFlowByAdd = ({ defaultTx, address }) => {


    return (
        <Grid
            item xs={6}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem',
                mr: 3


            }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 Transacted Wallet For NFTs</Typography>

            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />


        </Grid>
    )
}

export default NftTxFlowByAdd