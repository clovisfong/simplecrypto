import WalletTransactions from "../pages/WalletTransactions"
import AllTxDataList from "./AllTxDataList"
import NavBarTx from "./NavBarTx"

const AllTxDashboard = () => {


    return (
        <div>
            <WalletTransactions />
            <NavBarTx />
            <AllTxDataList />

        </div>
    )
}

export default AllTxDashboard