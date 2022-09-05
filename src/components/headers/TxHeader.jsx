import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Box, Grid, Button, Typography } from '@mui/material';


// const ethCurrentPrice = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA'

const TxHeader = () => {
    const [walletBal, setWalletBal] = useState()
    // const [ethPrice, setEthPrice] = useState()

    const { address } = useParams()
    const walletAdd = address
    const walletBalUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAdd}&tag=latest&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


    useEffect(() => {
        fetch(walletBalUrl)
            .then((response) => response.json())
            .then((data) => setWalletBal(data.result))

        // fetch(ethCurrentPrice)
        //     .then((response) => response.json())
        //     .then((data) => setEthPrice(data.result.ethusd))
    }, [])


    const ethBal = (walletBal / 1000000000000000000).toFixed(2)
    // const usdBal = (ethBal * ethPrice).toFixed(2)

    const switchToBalPage = useNavigate()


    const handleSwitchPage = () => {
        switchToBalPage(`/wallet-balance/${address}/crypto?page=1`)
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


                <Typography variant="h4">Wallet Transactions </Typography>
                <Typography variant="h5" sx={{ color: '#28292C', mb: '2rem' }}>ETH Balance:  {ethBal == 'NaN' ? 0 : ethBal} </Typography>

                <Button
                    variant="contained"
                    onClick={handleSwitchPage}

                >View Tokens

                </Button>

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

export default TxHeader