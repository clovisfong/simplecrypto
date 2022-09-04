import { useNavigate, useParams } from "react-router-dom"
import { Box, Grid, Button, Typography } from '@mui/material';

const BalHeader = ({ walletBalance }) => {

    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)
    const tokenValues = quantifiableTokens.map((token) => (token.balance * token.quote_rate / 1000000000000000000).toFixed(2))
    const totalVal = tokenValues.reduce((acc, val) => acc + Number(val), 0).toFixed(2)

    const { address } = useParams()
    const switchToTxPage = useNavigate()

    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/crypto?page=1`)
    }

    return (
        <Grid container
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                columnGap: '2rem'
            }}
        >

            <Grid item
                sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2rem',
                    pl: '3rem',
                    pr: '3rem',
                    borderRadius: '0.75rem',
                }} >
                <Typography variant="h4">Crypto Holdings </Typography>
                <Typography variant="h5" sx={{ color: '#28292C', mb: '2rem' }}>Wallet Balance:  ${totalVal}</Typography>
                <Button
                    variant="contained"
                    onClick={handlePageSwitch}>View Transactions</Button>
            </Grid>

            <Grid item
                sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2rem',
                    pt: '1rem',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    display: { xs: 'none', sm: 'grid' }
                }}>
                <Box >
                    <Typography sx={{
                        backgroundColor: '#38393C',
                        color: '#F3E9DF',
                        p: '0.5rem',
                        pr: '0.75rem',
                        pl: '0.75rem',
                        borderRadius: '1rem',
                        fontSize: '0.75rem',
                        fontWeight: 'normal '
                    }}>Ads</Typography>
                </Box>
            </Grid>
        </Grid>
    )
}

export default BalHeader