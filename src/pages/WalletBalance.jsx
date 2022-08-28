import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


const wallettest = '0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b'

const WalletBalance = () => {

    const [walletBalance, setWalletBalance] = useState([])

    const testUrl = 'https://api.covalenthq.com/v1/1/address/0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14'
    const { address } = useParams()
    const walletAdd = address

    useEffect(() => {
        fetch(testUrl)
            .then((response) => response.json())
            .then((data) => setWalletBalance(data.data.items))
    }, [])

    console.log(walletBalance[0])

    return (
        <div>
            <h1>Wallet Balance</h1>
            <h3>Wallet ETH Balance:  xxx ETH </h3>
            <ul>
                {walletBalance.map((token) => <li>{token.contract_name} - {token.balance}</li>)}
            </ul>


        </div>
    )
}

export default WalletBalance