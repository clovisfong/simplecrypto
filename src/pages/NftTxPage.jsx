import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import TxHeader from "../components/headers/TxHeader"
import NavBarTx from "../components/tools/NavBarTx"
import NftDataList from "../components/nftTx/NftDataList"
import NftOverview from "../components/nftTx/NftOverview"
import { Container, Grid, Box } from '@mui/material';
import NavBar from "../components/NavBar/NavBar"

const NftTxPage = () => {

    const [nftTx, setNftTx] = useState()
    const [defaultTx, setDefaultTx] = useState([])

    const { address } = useParams()
    const nftTxUrl = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=27025780&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    useEffect(() => {
        fetch(nftTxUrl)
            .then((response) => response.json())
            .then((data) => {
                return (
                    setNftTx(data.result),
                    setDefaultTx(data.result)
                )
            });
    }, [])

    const updateNftTx = (data) => {
        setNftTx(data)
    }

    return (

        <Container>
            <NavBar />
            <TxHeader />
            <NavBarTx />
            <NftOverview defaultTx={defaultTx} address={address} />
            <NftDataList nftTx={nftTx} updateNftTx={updateNftTx} defaultTx={defaultTx} address={address} />
            <Box sx={{ m: '10rem' }}> </Box>
        </Container>

    )
}

export default NftTxPage