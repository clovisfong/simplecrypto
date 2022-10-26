import { Link, useNavigate, useParams } from "react-router-dom"
import { Box, Grid, Typography, Button, Divider } from '@mui/material';
import { useState } from "react";

const NavBarTx = () => {


    const { address } = useParams()
    const walletAdd = address
    const switchPage = useNavigate()

    const handleClick = (event) => {

        const cat = event.target.innerText.toLowerCase()
        switchPage(`/wallet-transactions/${walletAdd}/${cat}?page=1`)


    }


    return (
        <>

            <Box
                sx={{
                    mt: 5,

                    display: 'inline-flex',
                    gap: { xs: '2rem', sm: '3rem' }


                }}>
                <Button variant="contained" onClick={handleClick}>Transactions</Button>
                <Button variant="contained" onClick={handleClick}>Nft</Button>
                <Button variant="contained" onClick={handleClick}>Crypto</Button>

            </Box>
            <Divider sx={{
                mt: 3,
                mb: 5
            }}>
            </Divider>

        </>



    )
}

export default NavBarTx


{/* <Grid container gap={8}
                sx={{
                    mt: 5,
                    mb: 5

                }}
            >
                <Grid item xs={1} sx={{ backgroundColor: 'pink', display: 'inline-flex' }}>
                    <Button variant="contained" onClick={handleClick}>All</Button>
                </Grid>
                <Grid item xs={1} sx={{ backgroundColor: 'pink' }}><Button variant="contained" onClick={handleClick}>NFT</Button></Grid>
                <Grid item xs={1}><Button variant="contained" onClick={handleClick}>Crypto</Button></Grid>

            </Grid>
            <Divider sx={{
                mt: 5,
                mb: 5
            }}>
            </Divider>

        </> */}