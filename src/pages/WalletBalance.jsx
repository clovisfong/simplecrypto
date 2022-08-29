import { useNavigate, useParams } from "react-router-dom"

const WalletBalance = ({ values }) => {


    const totalVal = values.reduce((acc, val) => acc + Number(val), 0).toFixed(2)

    const { address } = useParams()
    const switchToTxPage = useNavigate()


    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/crypto`)

    }

    return (
        <div>
            <h1>Wallet Balance</h1>
            <h3>Wallet Balance:  ${totalVal} </h3>
            <button onClick={handlePageSwitch}>View Transactions</button>




        </div>
    )
}

export default WalletBalance