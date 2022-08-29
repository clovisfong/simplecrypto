import { useState } from "react"
import WalletBalance from "../pages/WalletBalance"
import CryptoBalance from "./CryptoBalance"
import NavBarBal from "./NavBarBal"

const CryptoBalDashboard = () => {

    const [values, setValues] = useState([])

    const getTokenValues = (value) => {
        setValues(value)
    }


    return (
        <div>
            <WalletBalance values={values} />
            <NavBarBal />
            <CryptoBalance getTokenValues={getTokenValues} />
            <p></p>

        </div>

    )
}

export default CryptoBalDashboard