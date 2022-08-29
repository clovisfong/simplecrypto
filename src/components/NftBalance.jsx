const NftBalance = ({ walletNftBalance }) => {



    const conciseNftInfo = []
    walletNftBalance.forEach((token) => (
        token.balance == 1 ?
            conciseNftInfo.push({ ['name']: token.contract_name, ['data']: token.nft_data[0], ['contract_address']: token.contract_address }) :
            token.nft_data.forEach((data) =>
                conciseNftInfo.push({ ['name']: token.contract_name, ['data']: data, ['contract_address']: token.contract_address }))))


    console.log(conciseNftInfo)


    const handleNftPage = (contract, id) => [
        console.log('click')
    ]

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
                    {conciseNftInfo.map((token) =>
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