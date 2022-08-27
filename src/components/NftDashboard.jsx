import WalletTransactions from "../pages/WalletTransactions"
import NavBar from "./NavBar"
import NftDataList from "./NftDataList"
import NftOverview from "./NftOverview"

const NftDashboard = () => {



    return (
        <div>
            <WalletTransactions />
            <NftOverview />
            <NavBar />
            <NftDataList />

        </div>
    )
}

export default NftDashboard