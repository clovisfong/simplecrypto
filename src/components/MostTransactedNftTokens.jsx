const MostTransactedNftTokens = ({ defaultTx }) => {

    const numOfTxPerToken = {}
    const tokenNamesArr = defaultTx.map((token) => token.tokenName)
    tokenNamesArr.forEach((token) => numOfTxPerToken[token] = (numOfTxPerToken[token] || 0) + 1)
    const tokenRankings = Object.entries(numOfTxPerToken) //turn entire object of key-values into an array of key-value arrays
        .sort((a, b) => b[1] - a[1])
        .map((token) => ({ ['name']: token[0], ['count']: token[1] })) //turn arr of arrs into an arr of objects


    const topFiveTransactedNft =
        tokenRankings.slice(0, 5).map((token, index) => {
            return (
                <li key={index}> {token.name}  -  {token.count}</li>
            )
        })



    return (
        <div>

            <h4>Top 5 Transacted NFTs</h4>
            <ul>
                {topFiveTransactedNft}
            </ul>


        </div>

    )
}

export default MostTransactedNftTokens