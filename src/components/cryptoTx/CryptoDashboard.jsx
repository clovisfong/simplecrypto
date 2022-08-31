import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import WalletTransactions from "../../pages/WalletTransactions"
import CryptoDataList from "./CryptoDataList"
import CryptoOverview from "./CryptoOverview"
import NavBarTx from "../NavBarTx"


const CryptoDashboard = () => {

    const [cryptoTx, setCryptoTx] = useState()
    const [defaultTx, setDefaultTx] = useState([])

    const { address } = useParams()
    const cryptoTxUrl = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=27025780&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    useEffect(() => {
        fetch(cryptoTxUrl)
            .then((response) => response.json())
            .then((data) => {
                return (
                    setCryptoTx(data.result),
                    setDefaultTx(data.result)
                )
            });
    }, [])

    const updateCryptoTx = (data) => {
        setCryptoTx(data)
    }


    return (
        <div>
            <WalletTransactions />
            <NavBarTx />
            <CryptoOverview defaultTx={defaultTx} address={address} />
            <CryptoDataList cryptoTx={cryptoTx} updateCryptoTx={updateCryptoTx} defaultTx={defaultTx} address={address} />
        </div>
    )
}

export default CryptoDashboard