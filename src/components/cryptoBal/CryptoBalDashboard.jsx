import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import WalletBalance from "../../pages/WalletBalance"
import CryptoBalance from "./CryptoBalance"
import NavBarBal from "../tools/NavBarBal"

const CryptoBalDashboard = () => {


    const [walletBalance, setWalletBalance] = useState([])


    const { address } = useParams()
    const CryptoBalUrl = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14`

    useEffect(() => {
        fetch(CryptoBalUrl)
            .then((response) => response.json())
            .then((data) => {
                setWalletBalance(data.data.items)
            })
    }, [])



    return (
        <div>
            <WalletBalance walletBalance={walletBalance} />
            <NavBarBal />
            <CryptoBalance walletBalance={walletBalance} />


        </div>

    )
}

export default CryptoBalDashboard