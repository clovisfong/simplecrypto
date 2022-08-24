import { Outlet } from "react-router-dom"

const WalletTransactions = () => {

    return (
        <div>
            <h1>My transactions</h1>
            <Outlet />

        </div>


    )
}

export default WalletTransactions