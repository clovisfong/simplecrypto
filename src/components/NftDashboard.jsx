import WalletTransactions from "../pages/WalletTransactions"
import NavBar from "./NavBar"
import NftDataList from "./NftDataList"

const NftDashboard = () => {

    return (
        <div>
            <WalletTransactions />
            <NavBar />
            <NftDataList />

        </div>
    )
}

export default NftDashboard