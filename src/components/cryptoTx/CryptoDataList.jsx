import cryptoSortOptions from "../../data/cryptoSortOptions"
import TxDataTable from "../tools/TxDataTable"
import { Box, Container, Grid } from '@mui/material';


const CryptoDataList = ({ cryptoTx, updateCryptoTx, defaultTx, address }) => {



    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? cryptoSortOptions.method[0].key :
                txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? cryptoSortOptions.method[1].key : cryptoSortOptions.method[2].key
        )
    }


    return (
        <Box>
            <TxDataTable
                dataTx={cryptoTx}
                updateState={updateCryptoTx}
                defaultTx={defaultTx}
                address={address}
                assignTxMethod={assignTxMethod}
                earlyTime={cryptoSortOptions.time[0].key}
                lateTime={cryptoSortOptions.time[1].key}
                method={cryptoSortOptions.method[3].key}
                sortTime={cryptoSortOptions.time}
                sortMethod={cryptoSortOptions.method}
                idOrValue={'value'}
            />
        </Box>
    )
}

export default CryptoDataList