import SearchBar from "../tools/SearchBar"
import Container from '@mui/material/Container';
import { Grid, Box } from '@mui/material';
import NavSearchBar from "./NavSearchBar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const switchToHome = useNavigate()

    const handlePageSwitch = () => {
        switchToHome('/')
    }
    <a href="https://imgur.com/RuIV5n4"><img src="https://i.imgur.com/RuIV5n4.png" title="source: imgur.com" /></a>
    return (
        <Container>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pt: '1rem',
                pb: '1rem',
                mb: '2rem'

            }}  >
                <Box>
                    <img
                        src="https://i.imgur.com/RuIV5n4.png"
                        alt='Simple Crypto'
                        onClick={handlePageSwitch}
                        style={{
                            maxWidth: '14em',
                            cursor: 'pointer'

                        }} />
                </Box>
                <NavSearchBar />
            </Box>


        </Container>


    )
}

export default NavBar