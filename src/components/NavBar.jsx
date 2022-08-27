import { Link, useParams } from "react-router-dom"
const NavBar = () => {

    const { address } = useParams()
    const walletAdd = address

    return (
        <div>
            <Link to={`/wallet-transactions/${walletAdd}/all`}>All</Link>
            <Link to={`/wallet-transactions/${walletAdd}/nft`}>NFT</Link>
        </div>

    )
}

export default NavBar