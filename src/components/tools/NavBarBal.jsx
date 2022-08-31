import { Link, useParams } from "react-router-dom"
const NavBarBal = () => {

    const { address } = useParams()
    const walletAdd = address

    return (
        <div>
            <Link to={`/wallet-balance/${walletAdd}/crypto`}>Crypto</Link>
            <Link to={`/wallet-balance/${walletAdd}/nft`}>NFT</Link>
        </div>

    )
}

export default NavBarBal