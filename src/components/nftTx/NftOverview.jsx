import MostTransactedNftTokens from "./MostTransactedNftTokens"
import MostTransactedWalletForNft from "./MostTransactedWalletForNft"
import NftHoldingPeriod from "./NftHoldingPeriod"
import NftMethodWeightage from "./NftMethodWeightage"

const NftOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>NFT overview</h3>
            <MostTransactedNftTokens defaultTx={defaultTx} />
            <NftMethodWeightage defaultTx={defaultTx} address={address} />
            <MostTransactedWalletForNft defaultTx={defaultTx} address={address} />
            <NftHoldingPeriod defaultTx={defaultTx} address={address} />
        </div>
    )
}

export default NftOverview