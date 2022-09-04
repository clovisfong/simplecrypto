import CryptoMethodWeightage from "./CryptoMethodWeightage"
import CryptoTxCountByToken from "./CryptoTxCountByToken"
import CryptoTxFlowByAdd from "./CryptoTxFlowByAdd"
import { Grid } from '@mui/material';


const CryptoOverview = ({ defaultTx, address }) => {

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
            <CryptoTxCountByToken defaultTx={defaultTx} />
            <CryptoTxFlowByAdd defaultTx={defaultTx} address={address} />
            <CryptoMethodWeightage defaultTx={defaultTx} address={address} />

        </Grid >
    )
}

export default CryptoOverview