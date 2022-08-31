import AllTxTotalFlow from "./AllTxTotalFlow"
import AllTxTotalValueByAdd from "./AllTxTotalValueByAdd"
import AllTxFlowByAdd from "./AllTxFlowByAdd"

const AllTxOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>All Tx overview</h3>
            <AllTxTotalFlow defaultTx={defaultTx} address={address} />
            <AllTxFlowByAdd defaultTx={defaultTx} address={address} />
            <AllTxTotalValueByAdd defaultTx={defaultTx} address={address} />


        </div>
    )
}

export default AllTxOverview