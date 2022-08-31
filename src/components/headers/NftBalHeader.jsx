import { useNavigate, useParams } from "react-router-dom"

const NftBalHeader = ({ defaultBal }) => {





    const { address } = useParams()
    const switchToTxPage = useNavigate()

    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/nft`)
    }

    return (
        <div>
            <h1>Wallet NFT Balance</h1>
            <h3>Number of NFT owned:  {defaultBal.length}</h3>
            <button onClick={handlePageSwitch}>View Transactions</button>




        </div>
    )
}

export default NftBalHeader