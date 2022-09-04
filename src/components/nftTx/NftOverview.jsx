import NftTxCountByCollection from "./NftTxCountByCollection"
import NftTxFlowByAdd from "./NftTxFlowByAdd"
import NftHoldingPeriod from "./NftHoldingPeriod"
import NftMethodWeightage from "./NftMethodWeightage"
import { Grid } from '@mui/material';
const NftOverview = ({ defaultTx, address }) => {

    return (
        <Grid container spacing={0}
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '2fr 3fr' },
                columnGap: '2rem',
                rowGap: '2rem',
                mb: 7
            }}
        >
            <NftTxCountByCollection defaultTx={defaultTx} />
            <NftTxFlowByAdd defaultTx={defaultTx} address={address} />
            <NftMethodWeightage defaultTx={defaultTx} address={address} />
            <NftHoldingPeriod defaultTx={defaultTx} address={address} />
        </Grid>
    )
}

export default NftOverview