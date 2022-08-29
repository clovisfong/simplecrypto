import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const CryptoBalance = ({ getTokenValues }) => {

    const [walletBalance, setWalletBalance] = useState([])

    const { address } = useParams()
    const walletAdd = address
    const CryptoBalUrl = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14`


    useEffect(() => {
        fetch(CryptoBalUrl)
            .then((response) => response.json())
            .then((data) => {
                const walletBalance = data.data.items
                const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)
                const tokenValues = quantifiableTokens.map((token) => (token.balance * token.quote_rate / 1000000000000000000).toFixed(2))
                getTokenValues(tokenValues);

                setWalletBalance(data.data.items)
            })
    }, [])

    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Total Value</th>
                    </tr>
                </thead>

                <tbody>
                    {quantifiableTokens.map((token) =>
                        <tr key={token.contract_name + token.contract_address}>
                            <td>{token.contract_name}</td>
                            <td>{token.type}</td>
                            <td>{(token.balance / 1000000000000000000).toFixed(2)}</td>
                            <td>${(token.balance * token.quote_rate / 1000000000000000000).toFixed(2)}</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default CryptoBalance