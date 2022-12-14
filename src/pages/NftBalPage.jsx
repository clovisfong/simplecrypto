import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import NavBarBal from "../components/tools/NavBarBal"
import NftBalance from "../components/nftBal/NftBalance"
import NftBalHeader from "../components/headers/NftBalHeader"
import { Container, Grid, Box } from '@mui/material';
import NavBar from "../components/NavBar/NavBar"

const NftBalPage = () => {

    const [walletNftBalance, setWalletNftBalance] = useState([])
    const [defaultBal, setDefaultBal] = useState([])


    const { address } = useParams()
    const nftBalUrl = `https://api.covalenthq.com/v1/1/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=ckey_0d22e1b516814092ba7eced6e14`

    useEffect(() => {
        fetch(nftBalUrl)
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                const nftData = data.data.items.filter((token) => token.type === 'nft')
                const conciseNftInfo = []
                nftData.forEach((token) => (
                    token.balance == 1 ?
                        conciseNftInfo.push({ ['name']: token.contract_name, ['data']: token.nft_data[0], ['contract_address']: token.contract_address }) :
                        token.nft_data.forEach((data) =>
                            conciseNftInfo.push({ ['name']: token.contract_name, ['data']: data, ['contract_address']: token.contract_address }))))

                const updateNames = conciseNftInfo.map((token) => {
                    if (token.name === null) {
                        return { ...token, name: 'Cannot be found' }
                    }
                    return token

                })

                setWalletNftBalance(updateNames)
                setDefaultBal(updateNames)

            })
    }, [])



    return (

        <Container>
            <NavBar />
            <NftBalHeader defaultBal={defaultBal} />
            <NavBarBal />
            <NftBalance
                walletNftBalance={walletNftBalance}
                defaultBal={defaultBal}
                setWalletNftBalance={setWalletNftBalance} />
            <Box sx={{ m: '10rem' }}> </Box>
        </Container>

    )
}

export default NftBalPage