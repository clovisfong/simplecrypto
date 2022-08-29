const NftHoldingPeriod = ({ defaultTx, address }) => {

    const today = Date.now() / 1000

    const displayTimeDifference = (buyDate, sellDate) => {
        const timeDifference = Number(sellDate) - Number(buyDate)
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

    const found = outflowNft.find(element => inflowNft)

    const test = inflowNft.map((inflow) =>
        outflowNft.some((outflow) => outflow.contractAddress === inflow.contractAddress && outflow.tokenID === inflow.tokenID) ?
            ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Sold', ['holding-period']: displayTimeDifference(inflow.timeStamp, outflowNft.find(tx => tx.contractAddress === inflow.contractAddress && tx.tokenID === inflow.tokenID).timeStamp) }) :
            ({ ['name']: inflow.tokenName, ['id']: inflow.tokenID, ['status']: 'Hold', ['holding-period']: displayTimeDifference(inflow.timeStamp, today) }))


    console.log(test)




    const convertTime = (timestamp) => {
        const num = Number(timestamp) * 1000
        const date = new Date(num)

        const formattedDate = (date.toLocaleString("en-US", { day: "numeric" }) + " " + date.toLocaleString("en-US", { month: "short" }) + " " + date.toLocaleString("en-US", { year: "numeric" }))
        return (formattedDate)
    }


    return (
        <div>
            <h4>NFT holding period</h4>

        </div>
    )
}

export default NftHoldingPeriod