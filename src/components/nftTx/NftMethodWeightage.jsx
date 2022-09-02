import nftSortOptions from "../../data/nftSortOptions"
import TxMethodWeightage from "../tools/TxMethodWeightage"
import { Grid, Typography } from '@mui/material';

const NftMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
                txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
                    txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
        )
    }

    return (
        <Grid
            item xs={5}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem',
                mb: 3


            }}>
            <Typography variant="h5" >Method By Transactions Count</Typography>
            <TxMethodWeightage
                defaultTx={defaultTx}
                assignTxMethod={assignTxMethod} />
        </Grid>
    )
}

export default NftMethodWeightage