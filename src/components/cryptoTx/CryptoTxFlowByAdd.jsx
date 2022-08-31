import TxFlowByAdd from "../tools/TxFlowByAdd"

const CryptoTxFlowByAdd = ({ defaultTx, address }) => {


    return (
        <div>
            <h4>Top 5 Transacted Wallet For Cryptos</h4>
            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />


        </div>
    )
}

export default CryptoTxFlowByAdd