import TxFlowByAdd from "../tools/TxFlowByAdd"

const AllTxFlowByAdd = ({ defaultTx, address }) => {



    return (
        <div>
            <h4>Top 5 Transacted Wallet for Normal Transactions</h4>
            <TxFlowByAdd
                defaultTx={defaultTx}
                address={address} />


        </div>
    )
}

export default AllTxFlowByAdd