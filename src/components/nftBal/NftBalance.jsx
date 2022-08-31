

const NftBalance = ({ walletNftBalance }) => {


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tokens</th>
                        <th>ID</th>
                        <th>Link</th>
                    </tr>
                </thead>

                <tbody>
                    {walletNftBalance.map((token) =>
                        <tr key={token.name + token.data.token_id}>
                            <td>{token.name}</td>
                            <td>{token.data.token_id}</td>
                            <td><a href={`https://opensea.io/assets/ethereum/${token.contract_address}/${token.data.token_id}`}><button>View</button></a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default NftBalance