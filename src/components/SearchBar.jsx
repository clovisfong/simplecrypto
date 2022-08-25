import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'



const SearchBar = () => {

    const navigateToWalletTx = useNavigate()
    const inputRef = useRef()

    const handleClick = () => {
        const inputAdd = inputRef.current.value
        navigateToWalletTx(`/wallet-transactions/${inputAdd}`)
    }


    return (
        <>
            <input type='search' placeholder='Search wallet address' ref={inputRef}></input>
            <button onClick={handleClick}>Search</button>
        </>
    )
}

export default SearchBar