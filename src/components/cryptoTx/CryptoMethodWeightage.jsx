import cryptoSortOptions from "../../data/cryptoSortOptions"
import TxMethodWeightage from "../tools/TxMethodWeightage"

const CryptoMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? cryptoSortOptions.method[0].key :
                txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? cryptoSortOptions.method[1].key : cryptoSortOptions.method[2].key
        )
    }

    return (
        <div>
            <h4>Crypto Method Weightage</h4>
            <TxMethodWeightage
                defaultTx={defaultTx}
                assignTxMethod={assignTxMethod} />
        </div>
    )
}

export default CryptoMethodWeightage