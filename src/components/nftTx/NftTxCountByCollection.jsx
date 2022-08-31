import TxCount from "../tools/TxCount"

const NftTxCountByCollection = ({ defaultTx }) => {


    return (
        <div>

            <h4>Top 5 NFT Collections by Wallet Transactions</h4>
            <TxCount defaultTx={defaultTx} />

        </div>

    )
}

export default NftTxCountByCollection