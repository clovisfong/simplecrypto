import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Grid, Button, Typography } from '@mui/material';

const wallettest = '0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b'

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
        <Grid container spacing={0}>
            <Grid
                item xs={6}
                sx={{
                    backgroundColor: '#F4F5F7',
                    p: '2.5rem',
                    borderRadius: '0.75rem'


                }}>

                <Typography variant="h5">ERC20 Wallet Balance:  {ethBal} ETH </Typography>
                <Button
                    variant="contained"
                    onClick={handleSwitchPage}
                    sx={{ mt: 3 }}
                >View Tokens

                </Button>

            </Grid>
        </Grid>



    )
}

export default TxHeader