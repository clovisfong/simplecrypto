import SearchBar from "../components/tools/SearchBar"
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

const HomePage = () => {



    return (
        <div>
            <Container maxWidth="sm">
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <img
                        src='src/images/SimpleCrypto.png'
                        alt='Simple Crypto'
                        style={{
                            maxWidth: '30em',
                            marginTop: '15em',
                            marginBottom: '-2em'
                        }} />
                </Box>
                <SearchBar />
            </Container>

        </div>


    )
}

export default HomePage