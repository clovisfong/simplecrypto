import { Link } from "react-router-dom"

const AllTxTotalValueByAdd = ({ defaultTx, address }) => {


    const topFiveTransactedAdd = (owner, flow) => {

        const successfulTransactedAdd = defaultTx.filter((tx) => (tx[owner] === address.toLowerCase() && tx.isError == 0))

        const txPerToAdd = {}
        successfulTransactedAdd.forEach((add) => txPerToAdd[add[flow]] = (txPerToAdd[add[flow]] === undefined ? Number(add.value) : txPerToAdd[add[flow]] + Number(add.value)))

        const addRankings = Object.entries(txPerToAdd) //turn entire object of key-values into an array of key-value arrays
            .sort((a, b) => b[1] - a[1])
            .map((add) => ({ ['name']: add[0], ['value']: ((add[1] / 1000000000000000000).toFixed(2)) }))

        const topFiveAdd = addRankings.slice(0, 5)

        return displaytopFiveFromAdd(topFiveAdd)
    }



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
                {topFiveTransactedAdd('to', 'from')}
            </ul>
            <ul>
                Outflow To
                {topFiveTransactedAdd('from', 'to')}
            </ul>


        </div>
    )
}

export default AllTxTotalValueByAdd