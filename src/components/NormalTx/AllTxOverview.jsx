import AllTxTotalFlow from "./AllTxTotalFlow"
import AllTxTotalValueByAdd from "./AllTxTotalValueByAdd"
import AllTxFlowByAdd from "./AllTxFlowByAdd"
import { Box, Grid } from '@mui/material';
const AllTxOverview = ({ defaultTx, address }) => {

    return (
        <Grid container spacing={0} sx={{ mb: 7 }}>
            <Box sx={{ mr: 3 }}>
                <AllTxTotalFlow defaultTx={defaultTx} address={address} />
                <AllTxFlowByAdd defaultTx={defaultTx} address={address} />
            </Box>
            <AllTxTotalValueByAdd defaultTx={defaultTx} address={address} />


        </Grid>
    )
}

export default AllTxOverview