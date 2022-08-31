import sortOptions from "../../data/cryptoMethodTable"

const CryptoMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? sortOptions.method[0].key :
                txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? sortOptions.method[1].key : sortOptions.method[2].key
        )
    }

    const cryptoMethods = defaultTx.map((token) => assignTxMethod(token.from, token.to))
    const methodCount = cryptoMethods.reduce((acc, val) => { //trying out reduce instead of forEach method
        acc[val] = (acc[val] || 0) + 1
        return acc
    }, {})
    const arrOfMethodCount = Object.entries(methodCount) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[0] - a[0])
        .map((method) => ({ ['name']: method[0], ['count']: method[1] }))


    const methodWeightage =
        arrOfMethodCount.map((method) => {
            return (
                <li key={method.name}>{method.name}  -  {method.count}</li>
            )
        })

    return (
        <div>
            <h4>Crypto Method Weightage</h4>
            <ul>
                {methodWeightage}
            </ul>
        </div>
    )
}

export default CryptoMethodWeightage