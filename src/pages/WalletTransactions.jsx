import { Outlet, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import TransactionList from "../components/TransactionList"

const wallettest = '0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b'

// const ethCurrentPrice = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA'

const WalletTransactions = () => {
    const [walletBal, setWalletBal] = useState()
    // const [ethPrice, setEthPrice] = useState()

    const { address } = useParams()
    const walletAdd = address
    const walletBalUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAdd}&tag=latest&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


    useEffect(() => {
        fetch(walletBalUrl)
            .then((response) => response.json())
            .then((data) => setWalletBal(data.result))


        // fetch(ethCurrentPrice)
        //     .then((response) => response.json())
        //     .then((data) => setEthPrice(data.result.ethusd))


    }, [])


    const ethBal = (walletBal / 1000000000000000000).toFixed(2)
    // const usdBal = (ethBal * ethPrice).toFixed(2)

    return (
        <div>
            <h1>My transactions</h1>
            <h3>Wallet ETH Balance:  {ethBal} ETH </h3>
            <Outlet />

        </div>


    )
}

export default WalletTransactions