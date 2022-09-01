import SearchBar from "../components/tools/SearchBar"
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const HomePage = () => {



    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src="https://i.imgur.com/RuIV5n4.png"
                        alt='Simple Crypto'
                        style={{
                            maxWidth: '30em',
                            marginTop: '15em',

                        }} />
                </Box>
                <SearchBar />
            </Container>

        </div>


    )
}

export default HomePage