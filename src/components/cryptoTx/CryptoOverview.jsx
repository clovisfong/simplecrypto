import CryptoMethodWeightage from "./CryptoMethodWeightage"
import CryptoTxCountByToken from "./CryptoTxCountByToken"
import CryptoTxFlowByAdd from "./CryptoTxFlowByAdd"


const CryptoOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>Crypto overview</h3>
            <CryptoTxCountByToken defaultTx={defaultTx} />
            <CryptoMethodWeightage defaultTx={defaultTx} address={address} />
            <CryptoTxFlowByAdd defaultTx={defaultTx} address={address} />

        </div>
    )
}

export default CryptoOverview