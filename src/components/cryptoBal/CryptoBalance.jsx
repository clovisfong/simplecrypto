import SingleSelect from "../tools/SingleSelect"
import cryptoBalSortOptions from "../../data/cryptoBalSortOptions"
const CryptoBalance = ({ walletBalance, defaultBal, updateWalletBalance }) => {



    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)

    console.log('thus', defaultBal.map((tx) => tx.quote_rate))


    const handleType = (event) => {
        if (event[0].key !== cryptoBalSortOptions.type[3].key) {
            updateWalletBalance(defaultBal.filter((token) =>
                token.type === event[0].key))
        } else {
            updateWalletBalance(defaultBal)
        }
    }

    const handleValue = (event) => {
        if (event[0].key === cryptoBalSortOptions.value[0].key) {
            const sortArrByLowest = defaultBal.sort((a, b) => Number(a?.quote_rate) - Number(b?.quote_rate))
            console.log(sortArrByLowest)
            updateWalletBalance([...sortArrByLowest])

        } else if (event[0].key === cryptoBalSortOptions.value[1].key) {
            const sortArrByHighest = defaultBal.sort((a, b) => Number(b?.quote_rate) - Number(a?.quote_rate))
            updateWalletBalance([...sortArrByHighest])

        } else {
            updateWalletBalance(defaultBal)

        }


    }



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>Type<SingleSelect handleClick={handleType} sortOptions={cryptoBalSortOptions.type} /></th>
                        <th>Quantity</th>
                        <th>Total Value<SingleSelect handleClick={handleValue} sortOptions={cryptoBalSortOptions.value} /></th>
                    </tr>
                </thead>

                <tbody>
                    {quantifiableTokens.map((token) =>
                        <tr key={token.contract_name + token.contract_address}>
                            <td>{token.contract_name}</td>
                            <td>{token.type}</td>
                            <td>{(token.balance / 1000000000000000000).toFixed(2)}</td>
                            <td>${(token.balance * token.quote_rate / 1000000000000000000).toFixed(2)}</td>
                        </tr>
                    )}

                </tbody>
            </table>

        </div>
    )
}

export default CryptoBalance