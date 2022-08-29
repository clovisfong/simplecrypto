import { useNavigate, useParams } from "react-router-dom"

const WalletBalance = ({ walletBalance }) => {

    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)
    const tokenValues = quantifiableTokens.map((token) => (token.balance * token.quote_rate / 1000000000000000000).toFixed(2))
    const totalVal = tokenValues.reduce((acc, val) => acc + Number(val), 0).toFixed(2)

    const { address } = useParams()
    const switchToTxPage = useNavigate()

    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/crypto`)
    }

    return (
        <div>
            <h1>Wallet Balance</h1>
            <h3>Wallet Balance:  ${totalVal}</h3>
            <button onClick={handlePageSwitch}>View Transactions</button>




        </div>
    )
}

export default WalletBalance