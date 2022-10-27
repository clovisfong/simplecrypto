import SearchBar from "../components/tools/SearchBar"
import Container from '@mui/material/Container';
import { Box, Button, Grid, Snackbar, Typography } from '@mui/material';
import { useState } from "react";
import CopyOnClick from "../components/tools/CopyOnClick";




const HomePage = () => {

    const [testAdd, setTestAdd] = useState('')

    const handleClick = () => {
        setTestAdd('0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b')

    }



    return (
        <Box>
            <Container maxWidth="sm" sx={{ pr: '3rem', pl: '3rem' }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mt: '6rem',
                    mb: '1rem'
                }}>
                    <img
                        src="https://i.imgur.com/RuIV5n4.png"
                        alt='Simple Crypto'
                        style={{
                            maxWidth: '75%',

                        }} />
                </Box>

                <SearchBar />
            </Container>
            <Box sx={{ pr: '3rem', pl: '3rem', pt: '5rem', pb: '5rem', mt: '5rem', background: '#F4F5F7', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="h5" sx={{ mb: 4, mt: 3, textAlign: 'center', width: { xs: '100%', sm: '80%', md: '50%' } }}>Simple Crypto is a crypto wallet tracker that provides an insightful overview of wallet transactions and asset holdings in the Ethereum blockchain.</Typography>
                <Button variant="contained"
                    onClick={handleClick}>Generate Test Address</Button>
                <Typography variant="body2" sx={{ mt: '2rem', cursor: 'pointer', ":hover": { textDecoration: 'underline' } }} onClick={CopyOnClick(testAdd)} >{testAdd}</Typography>
            </Box  >

            <Container maxWidth='lg' sx={{ pr: '3rem', pl: '3rem', mt: '8rem', }}>

                <Grid container sx={{ mt: '5rem', display: 'flex', alignItems: 'center', background: '#F4F5F7', p: { xs: '2rem', sm: '3rem', md: '4rem' } }}>

                    <Grid item xs={12} sm={6} >
                        <Box sx={{ width: { xs: '100%', sm: '80%' } }}>
                            <Typography variant="h4" sx={{ mt: 3, }}>Meaningful Wallet Insights </Typography>
                            <Typography variant='body2' sx={{ mb: 3, mt: 3, }}>An overview of the key activities extracted from a specific wallet address.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box >
                            <img
                                src="https://imgur.com/atmcXuN.jpg"
                                alt='Friendly Categories'
                                style={{
                                    maxWidth: '100%',
                                    border: '3px solid #225559',
                                    p: '0'

                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>


                <Grid container sx={{ mt: '5rem', display: 'flex', alignItems: 'center', background: '#F4F5F7', p: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
                    <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
                        <Box >
                            <img
                                src="https://imgur.com/swvYzwJ.jpg"
                                alt='Friendly Categories'
                                style={{
                                    maxWidth: '100%',
                                    border: '3px solid #225559',
                                    p: '0'

                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
                        <Box sx={{ width: { xs: '100%', sm: '80%' }, ml: { xs: '0', sm: '4rem' } }}>
                            <Typography variant="h4" sx={{ mt: 3, }}>Easy Search</Typography>
                            <Typography variant="body2" sx={{ mb: 3, mt: 3, }}>Functional tools built in to help speed up search time.</Typography>
                        </Box>
                    </Grid>
                </Grid>


                <Grid container sx={{ mt: '5rem', display: 'flex', alignItems: 'center', background: '#F4F5F7', p: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
                    <Grid item xs={12} sm={6} >
                        <Box sx={{ width: { xs: '100%', sm: '80%' } }}>
                            <Typography variant="h4" sx={{ mt: 3, }}>Friendly Categories</Typography>
                            <Typography variant="body2" sx={{ mb: 3, mt: 3, }}>Transactions are grouped into new category names for easy understanding.</Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} >
                        <Box >
                            <img
                                src="https://imgur.com/vcf090P.jpg"
                                alt='Friendly Categories'
                                style={{
                                    maxWidth: '100%',
                                    border: '3px solid #225559',
                                    p: '0'

                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>

            </Container>
            <Box sx={{ mt: '10rem' }}></Box>
        </Box>




    )
}

export default HomePage