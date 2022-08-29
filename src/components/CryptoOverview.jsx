import CryptoTxByTxCount from "./CryptoTxByTxCount"


const CryptoOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>Crypto overview</h3>
            <CryptoTxByTxCount defaultTx={defaultTx} />

        </div>
    )
}

export default CryptoOverview