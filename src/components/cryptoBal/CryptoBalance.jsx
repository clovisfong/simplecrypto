
const CryptoBalance = ({ walletBalance }) => {



    const quantifiableTokens = walletBalance.filter((token) => (token.balance / 1000000000000000000) > 0.0099 ? token.balance : false)



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Total Value</th>
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