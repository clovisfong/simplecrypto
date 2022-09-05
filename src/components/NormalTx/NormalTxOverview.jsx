import NormalTxTotalFlow from "./NormalTxTotalFlow"
import NormalTxTotalValueByAdd from "./NormalTxTotalValueByAdd"
import NormalTxFlowByAdd from "./NormalTxFlowByAdd"
import { Box, Grid } from '@mui/material';
const NormalTxOverview = ({ defaultTx, address }) => {

    return (
        <Grid container
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                columnGap: '2rem',
                rowGap: '2rem',
                mb: 7
            }}
        >
            <Grid item >
                <Grid container
                    sx={{
                        rowGap: '2rem'
                    }}
                >
                    <NormalTxTotalFlow defaultTx={defaultTx} address={address} />
                    <NormalTxFlowByAdd defaultTx={defaultTx} address={address} />
                </Grid>
            </Grid>

            <NormalTxTotalValueByAdd defaultTx={defaultTx} address={address} />


        </Grid>
    )
}

export default NormalTxOverview