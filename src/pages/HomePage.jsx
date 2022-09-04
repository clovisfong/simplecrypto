import SearchBar from "../components/tools/SearchBar"
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const HomePage = () => {



    return (

        <Container maxWidth="sm" sx={{ pr: '3rem', pl: '3rem' }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '14rem',
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




    )
}

export default HomePage