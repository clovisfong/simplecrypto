import NftTxCountByCollection from "./NftTxCountByCollection"
import NftTxFlowByAdd from "./NftTxFlowByAdd"
import NftHoldingPeriod from "./NftHoldingPeriod"
import NftMethodWeightage from "./NftMethodWeightage"
import { Grid } from '@mui/material';
const NftOverview = ({ defaultTx, address }) => {

    return (
        <Grid container spacing={0} sx={{ mb: 7 }}>
            <NftTxCountByCollection defaultTx={defaultTx} />
            <NftMethodWeightage defaultTx={defaultTx} address={address} />
            <NftTxFlowByAdd defaultTx={defaultTx} address={address} />
            <NftHoldingPeriod defaultTx={defaultTx} address={address} />
        </Grid>
    )
}

export default NftOverview