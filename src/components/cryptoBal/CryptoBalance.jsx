import SingleSelect from "../tools/SingleSelect"
import cryptoBalSortOptions from "../../data/cryptoBalSortOptions"
const CryptoBalance = ({ walletBalance, defaultBal, updateWalletBalance }) => {


    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)


    const handleType = (event) => {
        if (event[0].key !== cryptoBalSortOptions.type[3].key) {
            updateWalletBalance(defaultBal.filter((token) =>
                token.type === event[0].key))
        } else {
            updateWalletBalance(defaultBal)
        }
    }

    const handleGeneral = (event, select, data) => {
        if (event[0].key === cryptoBalSortOptions[select][0].key) {
            const sortArrByLowest = walletBalance.sort((a, b) => Number(a?.[data]) - Number(b?.[data]))
            updateWalletBalance([...sortArrByLowest])

        } else if (event[0].key === cryptoBalSortOptions[select][1].key) {
            const sortArrByHighest = walletBalance.sort((a, b) => Number(b?.[data]) - Number(a?.[data]))
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
                        <th>Quantity<SingleSelect handleClick={(event) => handleGeneral(event, 'quantity', 'balance')} sortOptions={cryptoBalSortOptions.quantity} /></th>
                        <th>Total Value<SingleSelect handleClick={(event) => handleGeneral(event, 'value', 'quote_rate')} sortOptions={cryptoBalSortOptions.value} /></th>
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