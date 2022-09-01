import { Link, useNavigate, useParams } from "react-router-dom"
import { Grid, Typography, Button } from '@mui/material';

const NavBarTx = () => {

    const { address } = useParams()
    const walletAdd = address
    const switchPage = useNavigate()

    const handleClick = (event) => {
        switchPage(`/wallet-transactions/${walletAdd}/${event.target.innerText.toLowerCase()}?page=1`)
    }



    return (
        <Grid container spacing={0}
            sx={{
                mt: 5,
                mb: 5

            }}
        >
            <Grid item xs={1}><Button variant="contained" onClick={handleClick}>All</Button></Grid>
            <Grid item xs={1}><Button variant="contained" onClick={handleClick}>NFT</Button></Grid>
            <Grid item xs={1}><Button variant="contained" onClick={handleClick}>Crypto</Button></Grid>
        </Grid>




    )
}

export default NavBarTx


