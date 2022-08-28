import MostTransactedNftTokens from "./MostTransactedNftTokens"

const NftOverview = ({ defaultTx }) => {

    return (
        <div>
            <h3>NFT overview</h3>
            <MostTransactedNftTokens defaultTx={defaultTx} />
        </div>
    )
}

export default NftOverview