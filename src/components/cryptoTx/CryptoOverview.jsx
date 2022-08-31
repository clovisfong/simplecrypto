import CryptoMethodWeightage from "./CryptoMethodWeightage"
import CryptoTxByTxCount from "./CryptoTxByTxCount"
import CryptoWalletByTxFreq from "./CryptoWalletByTxFreq"


const CryptoOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>Crypto overview</h3>
            <CryptoTxByTxCount defaultTx={defaultTx} />
            <CryptoMethodWeightage defaultTx={defaultTx} address={address} />
            <CryptoWalletByTxFreq defaultTx={defaultTx} address={address} />

        </div>
    )
}

export default CryptoOverview