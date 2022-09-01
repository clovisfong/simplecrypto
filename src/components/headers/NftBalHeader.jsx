import { useNavigate, useParams } from "react-router-dom"
import { Grid, Button, Typography } from '@mui/material';

const NftBalHeader = ({ defaultBal }) => {





    const { address } = useParams()
    const switchToTxPage = useNavigate()

    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/nft?page=1`)
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
                <Typography variant="h5">NFT Holdings </Typography>
                <Typography variant="h6">Number of NFT owned:  {defaultBal.length}</Typography>


                <Button
                    variant="contained"
                    sx={{ mt: 3 }}
                    onClick={handlePageSwitch}>View Transactions</Button>


            </Grid>

        </Grid>
    )
}

export default NftBalHeader