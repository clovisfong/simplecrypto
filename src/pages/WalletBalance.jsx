const WalletBalance = ({ values }) => {


    const totalVal = values.reduce((acc, val) => acc + Number(val), 0).toFixed(2)


    return (
        <div>
            <h1>Wallet Balance</h1>
            <h3>Wallet Balance:  ${totalVal} </h3>




        </div>
    )
}

export default WalletBalance