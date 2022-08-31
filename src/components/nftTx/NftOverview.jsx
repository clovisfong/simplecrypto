import NftTxCountByCollection from "./NftTxCountByCollection"
import NftTxFlowByAdd from "./NftTxFlowByAdd"
import NftHoldingPeriod from "./NftHoldingPeriod"
import NftMethodWeightage from "./NftMethodWeightage"

const NftOverview = ({ defaultTx, address }) => {

    return (
        <div>
            <h3>NFT overview</h3>
            <NftTxCountByCollection defaultTx={defaultTx} />
            <NftMethodWeightage defaultTx={defaultTx} address={address} />
            <NftTxFlowByAdd defaultTx={defaultTx} address={address} />
            <NftHoldingPeriod defaultTx={defaultTx} address={address} />
        </div>
    )
}

export default NftOverview