import TxFlowByAdd from "../tools/TxFlowByAdd"

const NftTxFlowByAdd = ({ defaultTx, address }) => {


    return (
        <div>
            <h4>Top 5 Transacted Wallet For NFTs</h4>
            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />


        </div>
    )
}

export default NftTxFlowByAdd