import WalletTransactions from "../pages/WalletTransactions"
import NavBar from "./NavBar"
import AllTxDataList from "./AllTxDataList"

const AllTxDashboard = () => {

    return (
        <div>
            <WalletTransactions />
            <NavBar />
            <AllTxDataList />

        </div>
    )
}

export default AllTxDashboard