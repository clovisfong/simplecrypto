import nftSortOptions from "../../data/nftSortOptions"

const NftMethodWeightage = ({ defaultTx, address }) => {

    const assignTxMethod = (txFrom, txTo) => {
        return (
            txFrom === address.toLowerCase() && txTo !== address.toLowerCase() ? nftSortOptions.method[0].key :
                txFrom === '0x0000000000000000000000000000000000000000' && txTo === address.toLowerCase() ? nftSortOptions.method[1].key :
                    txFrom !== address.toLowerCase() && txTo === address.toLowerCase() ? nftSortOptions.method[2].key : nftSortOptions.method[3].key
        )
    }

    const nftMethods = defaultTx.map((token) => assignTxMethod(token.from, token.to))
    const methodCount = nftMethods.reduce((acc, val) => { //trying out reduce instead of forEach method
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
            <h4>NFT Method Weightage</h4>
            <ul>
                {methodWeightage}
            </ul>
        </div>
    )
}

export default NftMethodWeightage