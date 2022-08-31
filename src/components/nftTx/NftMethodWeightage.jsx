import nftSortOptions from "../../data/nftSortOptions"
import TxMethodWeightage from "../tools/TxMethodWeightage"

const NftMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
                txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
                    txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
        )
    }

    return (
        <div>
            <h4>NFT Method Weightage</h4>
            <TxMethodWeightage
                defaultTx={defaultTx}
                assignTxMethod={assignTxMethod} />
        </div>
    )
}

export default NftMethodWeightage