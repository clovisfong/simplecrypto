const TxMethodWeightage = ({ defaultTx, assignTxMethod, }) => {


    const txMethods = defaultTx.map((token) => assignTxMethod(token.from, token.to))
    const methodCount = txMethods.reduce((acc, val) => { //trying out reduce instead of forEach method
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
        <ul>
            {methodWeightage}
        </ul>

    )
}

export default TxMethodWeightage