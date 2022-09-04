import { Link, useNavigate, useParams } from "react-router-dom"
import { Box, Grid, Typography, Button, Divider } from '@mui/material';
const NavBarBal = () => {

    const { address } = useParams()
    const walletAdd = address
    const switchPage = useNavigate()

    const handleClick = (event) => {
        switchPage(`/wallet-balance/${walletAdd}/${event.target.innerText.toLowerCase()}?page=1`)
    }

    return (
        <>

            <Box
                sx={{
                    mt: 5,

                    display: 'inline-flex',
                    gap: '3rem'


                }}>
                <Button variant="contained" onClick={handleClick}>Crypto</Button>
                <Button variant="contained" onClick={handleClick}>NFT</Button>
            </Box>
            <Divider sx={{
                mt: 3,
                mb: 5
            }}>
            </Divider>

        </>

    )
}

export default NavBarBal