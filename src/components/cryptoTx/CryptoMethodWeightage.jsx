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
            item xs={4}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem',
                mb: 3


            }}>
            <Typography variant="h5" >Crypto Method Weightage</Typography>
            <TxMethodWeightage
                defaultTx={defaultTx}
                assignTxMethod={assignTxMethod} />
        </Grid>
    )
}

export default CryptoMethodWeightage