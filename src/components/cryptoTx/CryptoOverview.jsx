import CryptoMethodWeightage from "./CryptoMethodWeightage"
import CryptoTxCountByToken from "./CryptoTxCountByToken"
import CryptoTxFlowByAdd from "./CryptoTxFlowByAdd"
import { Grid } from '@mui/material';


const CryptoOverview = ({ defaultTx, address }) => {

    return (
        <Grid container spacing={0} sx={{ mb: 7 }} >
            <CryptoTxCountByToken defaultTx={defaultTx} />
            <CryptoMethodWeightage defaultTx={defaultTx} address={address} />
            <CryptoTxFlowByAdd defaultTx={defaultTx} address={address} />

        </Grid >
    )
}

export default CryptoOverview