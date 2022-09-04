import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'
import { Button, Box, TextField } from '@mui/material';



const NavSearchBar = () => {

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
            <Box sx={{
                display: { xs: 'none', sm: 'flex' },
                alignItems: 'center',


            }}>
                <TextField

                    id="search-wallet-add"
                    label="Search wallet address "
                    onChange={handleChange}
                    size='small'
                    sx={{
                        fontSize: '3rem',
                        mr: '0.5rem'

                    }}


                />

                <Button
                    variant="contained"
                    onClick={handleClick}>Search Wallet</Button>

            </Box>

        </>
    )
}

export default NavSearchBar

