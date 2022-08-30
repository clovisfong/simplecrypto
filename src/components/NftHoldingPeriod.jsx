const NftHoldingPeriod = ({ defaultTx, address }) => {

    const today = Date.now() / 1000

    const displayTimeDifference = (timeDifference) => {
        const dayCount = Math.floor(timeDifference / (60 * 60 * 24))

        if (dayCount === 0) {
            const hourCount = Math.floor(timeDifference / (60 * 60))
            return hourCount + ' hours'
        } else {
            const hourCount = Math.floor((timeDifference - (dayCount * 60 * 60 * 24)) / (60 * 60))
            return dayCount + ' days, ' + hourCount + 'hours'
        }
    }



    const inflowNft = defaultTx.filter((tx) => tx.from !== address.toLowerCase())
    const outflowNft = defaultTx.filter((tx) => tx.from === address.toLowerCase())

    console.log(inflowNft)

    // const nftStatusInfo = inflowNft.map((inflow) =>
    //     outflowNft.some((outflow) => outflow.contractAddress === inflow.contractAddress && outflow.tokenID === inflow.tokenID) ?
    //         ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Sold', ['holding_period']: displayTimeDifference(inflow.timeStamp, outflowNft.find(tx => tx.contractAddress === inflow.contractAddress && tx.tokenID === inflow.tokenID).timeStamp) }) :
    //         ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Hold', ['holding_period']: displayTimeDifference(inflow.timeStamp, today) }))

    const nftStatusInfo = inflowNft.map((inflow) =>
        outflowNft.some((outflow) => outflow.contractAddress === inflow.contractAddress && outflow.tokenID === inflow.tokenID) ?
            ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Sold', ['holding_period']: Number(outflowNft.find(tx => tx.contractAddress === inflow.contractAddress && tx.tokenID === inflow.tokenID).timeStamp) - Number(inflow.timeStamp) }) :
            ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Hold', ['holding_period']: Number(today) - Number(inflow.timeStamp) }))


    const sortHighToLow = nftStatusInfo.sort((a, b) => {
        if (b.holding_period > a.holding_period) return 1;
        if (b.holding_period < a.holding_period) return -1;
        return 0;
    })


    const topFiveHoldingPeriod =
        sortHighToLow.slice(0, 5).map((token) => {
            return (
                <li key={token.name + token.id}>
                    {token.name} - {displayTimeDifference(token.holding_period)}</li>
            )
        })





    return (
        <div>
            <h4>Top 5 NFT holding period</h4>
            <ul>
                {topFiveHoldingPeriod}
            </ul>

        </div>
    )

}

export default NftHoldingPeriod