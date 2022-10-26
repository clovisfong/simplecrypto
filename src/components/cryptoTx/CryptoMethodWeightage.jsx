import cryptoSortOptions from "../../data/cryptoSortOptions"
import TxMethodWeightage from "../tools/TxMethodWeightage"
import { Grid, Typography } from '@mui/material';


const CryptoMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? cryptoSortOptions.method[0].key :
                txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? cryptoSortOptions.method[1].key : cryptoSortOptions.method[2].key
        )
    }

    return (
        <Grid
            item xs={12}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                pl: { xs: '2rem', sm: '3rem' },
                pr: { xs: '2rem', sm: '3rem' },
                borderRadius: '0.75rem'


            }}>
            <Typography variant="h5" sx={{ mb: 3 }} >Method By Transactions Count</Typography>
            <TxMethodWeightage
                defaultTx={defaultTx}
                assignTxMethod={assignTxMethod} />
        </Grid>
    )
}

export default CryptoMethodWeightage