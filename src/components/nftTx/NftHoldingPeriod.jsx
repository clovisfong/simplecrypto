import { Box, Grid, Typography } from '@mui/material';
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
                // <li key={token.name + token.id}>
                //     {token.name} - {displayTimeDifference(token.holding_period)} - {token.status}</li>

                <Grid container spacing={0} key={token.name + token.id} >
                    <Grid item xs={5}>{token.name} </Grid>
                    <Grid item xs={5}>{displayTimeDifference(token.holding_period)}</Grid>
                    <Grid item xs={2}>{token.status}</Grid>
                </Grid>
            )
        })





    return (
        <Grid
            item xs={5}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2.5rem',
                borderRadius: '0.75rem'


            }}>
            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 NFT holding period</Typography>


            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={5}><Typography variant="h6" sx={{ mt: 2 }}>Collection Name</Typography></Grid>
                    <Grid item xs={5}> <Typography variant="h6" sx={{ mt: 2 }}>Duration</Typography></Grid>
                    <Grid item xs={2}> <Typography variant="h6" sx={{ mt: 2 }}>Status</Typography></Grid>
                </Grid >
                <Grid container spacing={0}>

                    {topFiveHoldingPeriod}
                </Grid>
            </Box>

        </Grid>
    )

}

export default NftHoldingPeriod