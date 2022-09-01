import { Link, useNavigate, useParams } from "react-router-dom"
import { Grid, Typography, Button, Divider } from '@mui/material';
const NavBarBal = () => {

    const { address } = useParams()
    const walletAdd = address
    const switchPage = useNavigate()

    const handleClick = (event) => {
        switchPage(`/wallet-balance/${walletAdd}/${event.target.innerText.toLowerCase()}?page=1`)
    }

    return (
        <>

            <Grid container spacing={0}
                sx={{
                    mt: 5,
                    mb: 5

                }}
            >
                <Grid item xs={1}><Button variant="contained" onClick={handleClick}>Crypto</Button></Grid>
                <Grid item xs={1}><Button variant="contained" onClick={handleClick}>NFT</Button></Grid>
            </Grid>
            <Divider sx={{
                mt: 5,
                mb: 5
            }}>
            </Divider>
        </>

    )
}

export default NavBarBal