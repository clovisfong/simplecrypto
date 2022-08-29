import CryptoMethodWeightage from "./CryptoMethodWeightage"
import CryptoTxByTxCount from "./CryptoTxByTxCount"


const CryptoOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>Crypto overview</h3>
            <CryptoTxByTxCount defaultTx={defaultTx} />
            <CryptoMethodWeightage defaultTx={defaultTx} address={address} />

        </div>
    )
}

export default CryptoOverview