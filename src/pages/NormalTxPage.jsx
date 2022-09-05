import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import TxHeader from "../components/headers/TxHeader"
import NavBarTx from "../components/tools/NavBarTx"
// import NormalTxOverview from "../components/normalTx/NormalTxOverview"
import NormalTxDataList from "../components/normalTx/NormalTxDataList"
import { Box, Container, Grid } from '@mui/material';


const NormalTxPage = () => {

    const [walletTx, setWalletTx] = useState([])
    const [defaultTx, setDefaultTx] = useState([])

    const { address } = useParams()
    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


    useEffect(() => {
        fetch(walletTxUrl)
            .then((response) => response.json())
            .then((data) => {
                return (
                    setWalletTx(data?.result),
                    setDefaultTx(data?.result)
                )
            })
    }, [])

    const updateWalletTx = (data) => {
        setWalletTx(data)
    }



    return (
        <Container>
            <NavBar />
            <TxHeader />
            <NavBarTx />
            {/* <NormalTxOverview defaultTx={defaultTx} address={address} /> */}
            <NormalTxDataList walletTx={walletTx} updateWalletTx={updateWalletTx} defaultTx={defaultTx} address={address} />
            <Box sx={{ m: '10rem' }}> </Box>
        </Container>

    )
}

export default NormalTxPage