import nftSortOptions from "../../data/nftSortOptions"
import TxDataTable from "../tools/TxDataTable"
import { Box, Container, Grid } from '@mui/material';




const NftDataList = ({ nftTx, updateNftTx, defaultTx, address }) => {


    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
                txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
                    txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
        )
    }



    return (
        <Box>
            <TxDataTable
                dataTx={nftTx}
                updateState={updateNftTx}
                defaultTx={defaultTx}
                address={address}
                assignTxMethod={assignTxMethod}
                earlyTime={nftSortOptions.time[0].key}
                lateTime={nftSortOptions.time[1].key}
                method={nftSortOptions.method[4].key}
                sortTime={nftSortOptions.time}
                sortMethod={nftSortOptions.method}
                idOrValue={'tokenID'}
            />
        </Box>
    )
}

export default NftDataList