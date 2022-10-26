import SearchBar from "../components/tools/SearchBar"
import Container from '@mui/material/Container';
import { Box, Grid, Typography } from '@mui/material';




const HomePage = () => {



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
            <Box sx={{ pr: '3rem', pl: '3rem', pt: '5rem', pb: '5rem', mt: '5rem', background: '#F4F5F7', display: 'flex', justifyContent: 'center' }}>
                <Typography variant="h5" sx={{ mb: 3, mt: 3, textAlign: 'center', width: { xs: '100%', sm: '80%', md: '50%' } }}>Simple Crypto is a crypto wallet tracker that provides an insightful overview of wallet transactions and asset holdings in the Ethereum blockchain.</Typography>

            </Box>

            <Box sx={{ pr: '3rem', pl: '3rem', mt: '8rem', }}>

                <Grid container maxWidth='lg'>

                    <Grid item xs={12} sm={6} sx={{ background: '#F4F5F7', pt: '5rem', pb: '5rem', pl: '3rem', pr: '3rem' }}>
                        <Typography variant="h4" sx={{ mb: 3, mt: 3, }}>Meaningful Wallet Insights </Typography>
                        <Typography variant='body2' sx={{ mb: 3, mt: 3, }}>An overview of the key activities from a specific wallet address.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ background: 'lightgreen' }}>

                    </Grid>
                </Grid>


                <Grid container maxWidth='lg' sx={{ mt: '5rem' }}>
                    <Grid item xs={12} sm={6} sx={{ background: 'lightgreen' }}>

                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ background: '#F4F5F7', pt: '5rem', pb: '5rem', pl: '3rem', pr: '3rem' }}>
                        <Typography variant="h4" sx={{ mb: 3, mt: 3, }}>Easy Search</Typography>
                        <Typography variant="body2" sx={{ mb: 3, mt: 3, }}>Functional tools are implemented to help to speed up search time.</Typography>
                    </Grid>
                </Grid>


                <Grid container maxWidth='lg' sx={{ mt: '5rem' }}>
                    <Grid item xs={12} sm={6} sx={{ background: '#F4F5F7', pt: '5rem', pb: '5rem', pl: '3rem', pr: '3rem' }}>
                        <Typography variant="h4" sx={{ mb: 3, mt: 3, }}>Friendly Categories</Typography>
                        <Typography variant="body2" sx={{ mb: 3, mt: 3, }}>Transactions are grouped into new category names for easy understanding.</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ background: '#F4F5F7', pt: '3rem', pb: '3rem', pl: '3rem', pr: '3rem' }}>
                        <Box >
                            <img
                                src="public/images/Friendly Categories.jpg"
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

            </Box>
            <Box sx={{ mt: '10rem' }}></Box>
        </Box>




    )
}

export default HomePage