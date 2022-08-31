import MultiselectCheckBox from "../tools/MultiselectCheckBox"


const NftBalance = ({ walletNftBalance, defaultBal, setWalletNftBalance }) => {


    const tokenNamesData = defaultBal.map((token) => token?.name)
    const uniqueTokenNames = [...new Set(tokenNamesData)] //remove duplicates in array
    const uniqueTokenNamesObj = uniqueTokenNames.map((token) => {
        return {
            key: token
        }
    })



    const handleTokens = (event) => {
        const selectedTokens = event.map((token) => token.key)

        if (selectedTokens.length === 0) {
            setWalletNftBalance(defaultBal)
        } else {
            setWalletNftBalance(defaultBal.filter((tx) =>
                selectedTokens.some(
                    (token) => token === tx?.name)))
        }
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Tokens<MultiselectCheckBox handleClick={handleTokens} sortOptions={uniqueTokenNamesObj} /></th>
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