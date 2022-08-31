import AllTxTotalFlow from "./AllTxTotalFlow"
import AllTxWalletByTotalTxValue from "./AllTxWalletByTotalTxValue"
import AllTxWalletByTxFreq from "./AllTxWalletByTxFreq"

const AllTxOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>All Tx overview</h3>
            <AllTxTotalFlow defaultTx={defaultTx} address={address} />
            <AllTxWalletByTxFreq defaultTx={defaultTx} address={address} />
            <AllTxWalletByTotalTxValue defaultTx={defaultTx} address={address} />


        </div>
    )
}

export default AllTxOverview