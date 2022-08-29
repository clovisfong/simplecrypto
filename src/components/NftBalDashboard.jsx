import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBarBal from "./NavBarBal"
import NftBalance from "./NftBalance"

const NftBalDashBoard = () => {

    const [walletNftBalance, setWalletNftBalance] = useState([])


    const { address } = useParams()
    const nftBalUrl = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14`

    useEffect(() => {
        fetch(nftBalUrl)
            .then((response) => response.json())
            .then((data) => {
                const nftData = data.data.items.filter((token) => token.type === 'nft')
                setWalletNftBalance(nftData)
            })
    }, [])



    return (
        <div>

            <NavBarBal />
            <NftBalance walletNftBalance={walletNftBalance} />
        </div>
    )
}

export default NftBalDashBoard