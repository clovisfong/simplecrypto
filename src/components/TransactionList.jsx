import { useEffect, useState } from "react"

const walletAdd = '0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b'
const walletBalUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAdd}&tag=latest&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`
const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAdd}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`
const ethCurrentPrice = 'https://api.etherscan.io/api?module=stats&action=ethprice&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA'



const TransactionList = () => {

    const [walletBal, setWalletBal] = useState(0)
    const [ethPrice, setEthPrice] = useState(0)

    useEffect(() => {
        fetch(walletBalUrl)
            .then((response) => response.json())
            .then((data) => setWalletBal(data.result))

    }, [])

    useEffect(() => {
        fetch(ethCurrentPrice)
            .then((response) => response.json())
            .then((data) => setEthPrice(data.result.ethusd))

    }, [])

    const ethBal = (walletBal / 1000000000000000000).toFixed(2)
    const usdBal = (ethBal * ethPrice).toFixed(2)





    return (
        <div>
            <h3>Wallet ETH Balance:  {ethBal} ETH (${usdBal})</h3>
            <table>
                <thead>
                    <tr>
                        <th>Hash</th>
                        <th>Method</th>
                        <th>Time</th>
                        <th>Value</th>
                        <th>Status</th>
                        <th>From</th>
                        <th>To</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0f230f023</td>
                        <td>Sale</td>
                        <td>6 mins ago</td>
                        <td>3 ETH</td>
                        <td>IN</td>
                        <td>Wallet</td>
                        <td>0x0ad3da</td>




                    </tr>
                </tbody>

            </table>
        </div>

    )
}

export default TransactionList