import SearchBar from "../tools/SearchBar"
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import NavSearchBar from "./NavSearchBar";

const NavBar = () => {

    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                pl: '5rem',
                pr: '5rem',
                pt: '1rem',
                pb: '1rem',
                mb: '4rem'

            }}  >
                <Box>
                    <img
                        src=''
                        alt='Simple Crypto'
                        style={{
                            maxWidth: '10em',

                        }} />
                </Box>
                <NavSearchBar />
            </Box>


        </div>


    )
}

export default NavBar