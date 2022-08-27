import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




const NftDataList = () => {

    const [nftTx, setNftTx] = useState()

    const { address } = useParams()
    console.log(address)
    const nftTxUrl = `https://api.etherscan.io/api?module=account&action=tokennfttx&address=${address}&startblock=0&endblock=27025780&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`

    useEffect(() => {
        fetch(nftTxUrl)
            .then((response) => response.json())
            .then((data) => setNftTx(data.result));
    }, [])





    return (
        <div>
            <h1>{nftTx?.[1]?.blockNumber}</h1>
        </div>
    )
}

export default NftDataList