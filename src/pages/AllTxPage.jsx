import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import TxHeader from "../components/headers/TxHeader"
import NavBarTx from "../components/tools/NavBarTx"
import AllTxDataList from "../components/normalTx/AllTxDataList"
import AllTxOverview from "../components/normalTx/AllTxOverview"

const AllTxPage = () => {

    const [walletTx, setWalletTx] = useState([])
    const [defaultTx, setDefaultTx] = useState([])

    const { address } = useParams()
    const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


    useEffect(() => {
        fetch(walletTxUrl)
            .then((response) => response.json())
            .then((data) => {
                return (
                    setWalletTx(data.result),
                    setDefaultTx(data.result)
                )
            })
    }, [])

    const updateWalletTx = (data) => {
        setWalletTx(data)
    }



    return (
        <div>
            <TxHeader />
            <NavBarTx />
            <AllTxOverview defaultTx={defaultTx} address={address} />
            <AllTxDataList walletTx={walletTx} updateWalletTx={updateWalletTx} defaultTx={defaultTx} address={address} />

        </div>
    )
}

export default AllTxPage