import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import WalletTransactions from "../pages/WalletTransactions"
import NavBar from "./NavBar"
import NftDataList from "./NftDataList"
import NftOverview from "./NftOverview"

const NftDashboard = () => {

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
        <div>
            <WalletTransactions />
            <NavBar />
            <NftOverview defaultTx={defaultTx} address={address} />
            <NftDataList nftTx={nftTx} updateNftTx={updateNftTx} defaultTx={defaultTx} address={address} />

        </div>
    )
}

export default NftDashboard