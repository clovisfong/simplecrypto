import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Button, Box, TextField } from '@mui/material';


const SearchBar = () => {

    const [input, setInput] = useState('')

    const navigateToWalletTx = useNavigate()



    const handleClick = () => {
        if (input.substring(0, 2) === '0x')
            navigateToWalletTx(`/wallet-transactions/${input}/transactions?page=1`)
    }

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <TextField
                fullWidth id="search-wallet-add"
                label="Search wallet address "
                onChange={handleChange}

            />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: '2rem'
            }}>
                <Button
                    variant="contained"

                    onClick={handleClick}>Search Wallet</Button>
            </Box>

        </>
    )
}

export default SearchBar

