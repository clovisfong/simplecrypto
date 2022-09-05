import { useNavigate, useParams } from "react-router-dom"
import { Grid, Box, Button, Typography } from '@mui/material';

const NftBalHeader = ({ defaultBal }) => {





    const { address } = useParams()
    const switchToTxPage = useNavigate()

    const handlePageSwitch = () => {
        switchToTxPage(`/wallet-transactions/${address}/nft?page=1`)
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
                <Typography variant="h5">NFT Holdings </Typography>
                <Typography variant="h6" sx={{ mb: '2rem' }}>Number of NFT owned:  {defaultBal.length}</Typography>


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

export default NftBalHeader