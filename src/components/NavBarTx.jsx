import { Link, useParams } from "react-router-dom"
const NavBarTx = () => {

    const { address } = useParams()
    const walletAdd = address

    return (
        <div>
            <Link to={`/wallet-transactions/${walletAdd}/all`}>All</Link>
            <Link to={`/wallet-transactions/${walletAdd}/nft`}>NFT</Link>
            <Link to={`/wallet-transactions/${walletAdd}/crypto`}>Crypto</Link>
        </div>

    )
}

export default NavBarTx