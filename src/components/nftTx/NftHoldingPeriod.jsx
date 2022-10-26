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
        sortHighToLow.slice(0, 5).map((token, i) => {
            return (
                // <li key={token.name + token.id}>
                //     {token.name} - {displayTimeDifference(token.holding_period)} - {token.status}</li>

                <Grid container spacing={0} sx={{ display: 'flex', mb: { xs: '1rem', sm: '0rem' } }} key={token.name + token.id + i} >
                    <Grid item xs={5}>{token.name} </Grid>
                    <Grid item xs={5}>{displayTimeDifference(token.holding_period)}</Grid>
                    <Grid item xs={2}>{token.status}</Grid>
                </Grid>
            )
        })





    return (
        <Grid
            item xs={12}
            sx={{
                backgroundColor: '#F4F5F7',
                p: '2rem',
                pl: { xs: '2rem', sm: '3rem' },
                pr: { xs: '2rem', sm: '3rem' },
                borderRadius: '0.75rem'
            }}>

            <Typography variant="h5" sx={{ mb: 3 }}>Top 5 NFT Holding Period</Typography>


            <Box>
                <Grid container spacing={0}>
                    <Grid item xs={5}><Typography variant="h6" >Collection</Typography></Grid>
                    <Grid item xs={5}> <Typography variant="h6" >Duration</Typography></Grid>
                    <Grid item xs={2}> <Typography variant="h6" >Status</Typography></Grid>
                </Grid >
                {topFiveHoldingPeriod}

            </Box>

        </Grid>
    )

}

export default NftHoldingPeriod