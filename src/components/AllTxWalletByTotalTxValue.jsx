import { Link } from "react-router-dom"

const AllTxWalletByTotalTxValue = ({ defaultTx, address }) => {


    const fromAddresses = defaultTx.filter((tx) => (tx.to === address.toLowerCase() && tx.isError == 0))

    const txPerFromAdd = {}
    fromAddresses.forEach((add) => txPerFromAdd[add.from] = (txPerFromAdd[add.from] === undefined ? Number(add.value) : txPerFromAdd[add.from] + Number(add.value)))

    const fromAddRankings = Object.entries(txPerFromAdd) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[1] - a[1])
        .map((add) => ({ ['name']: add[0], ['value']: ((add[1] / 1000000000000000000).toFixed(2)) }))

    const topFiveFromAdd = fromAddRankings.slice(0, 5)




    const toAddresses = defaultTx.filter((tx) => (tx.from === address.toLowerCase() && tx.isError == 0))

    const txPerToAdd = {}
    toAddresses.forEach((add) => txPerToAdd[add.to] = (txPerToAdd[add.to] === undefined ? Number(add.value) : txPerToAdd[add.to] + Number(add.value)))

    const toAddRankings = Object.entries(txPerToAdd) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[1] - a[1])
        .map((add) => ({ ['name']: add[0], ['value']: ((add[1] / 1000000000000000000).toFixed(2)) }))

    const topFiveToAdd = toAddRankings.slice(0, 5)




    const displaytopFiveFromAdd = (topFiveAdd) =>
        topFiveAdd.map((token, index) => {
            return (
                <li key={index}><Link to={`/wallet-transactions/${address}/transaction-history/${token.name}`}>
                    {token.name}</Link>  - {token.value} ETH

                </li>
            )
        })





    return (
        <div>
            <h4>Top 5 Transacted Wallet</h4>
            <ul>
                Inflow From
                {displaytopFiveFromAdd(topFiveFromAdd)}
            </ul>
            <ul>
                Outflow To
                {displaytopFiveFromAdd(topFiveToAdd)}
            </ul>


        </div>
    )
}

export default AllTxWalletByTotalTxValue