import SearchBar from "../tools/SearchBar"
import Container from '@mui/material/Container';
import { Grid, Box, Button, Link } from '@mui/material';
import NavSearchBar from "./NavSearchBar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {

    const switchToHome = useNavigate()

    const handlePageSwitch = () => {
        switchToHome('/')
    }
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'space-between' },
            alignItems: 'center',
            pt: '1rem',
            pb: '1rem',
            mb: '2rem',

        }}>

            <Box >
                <img
                    src="https://i.imgur.com/RuIV5n4.png"
                    alt='Simple Crypto'
                    onClick={handlePageSwitch}
                    style={{
                        maxWidth: '14rem',
                        cursor: 'pointer'

                    }} />
            </Box>
            <NavSearchBar />



        </Box>


    )
}

export default NavBar