import AllTxTotalFlow from "./AllTxTotalFlow"
import AllTxWalletByTxFreq from "./AllTxWalletByTxFreq"

const AllTxOverview = ({ walletTx, address }) => {

    return (
        <div>
            <h3>All Tx overview</h3>
            <AllTxTotalFlow walletTx={walletTx} address={address} />
            <AllTxWalletByTxFreq walletTx={walletTx} address={address} />


        </div>
    )
}

export default AllTxOverview