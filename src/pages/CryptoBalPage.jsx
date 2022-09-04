import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import BalHeader from "../components/headers/BalHeader"
import NavBarBal from "../components/tools/NavBarBal"
import CryptoBalance from '../components/cryptoBal/CryptoBalance'
import { Container, Grid, Box } from '@mui/material';
import NavBar from "../components/NavBar/NavBar"


const CryptoBalPage = () => {


    const [walletBalance, setWalletBalance] = useState([])
    const [defaultBal, setDefaultBal] = useState([])

    const { address } = useParams()
    const CryptoBalUrl = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14`

    useEffect(() => {
        fetch(CryptoBalUrl)
            .then((response) => response.json())
            .then((data) => {
                setWalletBalance(data.data.items)
                setDefaultBal(data.data.items)
            })
    }, [])

    const updateWalletBalance = (data) => {
        setWalletBalance(data)
    }


    return (

        <Container>
            <NavBar />

            <BalHeader walletBalance={walletBalance} />

            <NavBarBal />
            <CryptoBalance walletBalance={walletBalance} defaultBal={defaultBal} updateWalletBalance={updateWalletBalance} />
            <Box sx={{ m: '10rem' }}> </Box>
        </Container>



    )
}

export default CryptoBalPage