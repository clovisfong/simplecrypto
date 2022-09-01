import { useNavigate, useParams } from "react-router-dom"
import { Grid, Button, Typography } from '@mui/material';

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
        <Grid container spacing={0}>
            <Grid
                item xs={6}
                sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2.5rem',
                    borderRadius: '0.75rem'


                }}>
                <Typography variant="h5">Crypto Holdings </Typography>
                <Typography variant="h6">Wallet Balance:  ${totalVal}</Typography>


                <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={handlePageSwitch}>View Transactions</Button>


            </Grid>
        </Grid>
    )
}

export default BalHeader