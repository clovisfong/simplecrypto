import TxCount from "../tools/TxCount"

const CryptoTxCountByToken = ({ defaultTx }) => {



    return (
        <div>

            <h4>Top 5 Crypto by Transaction Count</h4>
            <TxCount defaultTx={defaultTx} />

        </div>

    )
}

export default CryptoTxCountByToken