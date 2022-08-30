import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import WalletTransactions from './pages/WalletTransactions'
import NftDashboard from './components/NftDashboard'
import AllTxDashboard from './components/AllTxDashboard'
import CryptoDashboard from './components/CryptoDashboard'
import WalletBalance from './pages/WalletBalance'
import CryptoBalance from './components/CryptoBalance'
import CryptoBalDashboard from './components/CryptoBalDashboard'
import NftBalDashBoard from './components/NftBalDashboard'
import { useEffect, useState } from 'react'
import TxHistoryWithAdd from './pages/TxHistoryWithAdd'


const deployLink = 'https://simplecrypto.vercel.app/'
function App() {

  // const [walletTx, setWalletTx] = useState([])
  // const [defaultTx, setDefaultTx] = useState([])

  // const { address } = useParams()
  // const walletTxUrl = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=desc&apikey=F6FCNKMHH6SHM35Z3H399A1VDB9S3H24WA`


  // useEffect(() => {
  //   fetch(walletTxUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return (
  //         setWalletTx(data.result),
  //         setDefaultTx(data.result)
  //       )
  //     })
  // }, [])

  // const updateWalletTx = (data) => {
  //   setWalletTx(data)
  // }


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/wallet-transactions/:address' element={<WalletTransactions />} />
        {/* walletTx={walletTx} defaultTx={defaultTx} updateWalletTx={updateWalletTx} address={address}  */}
        <Route path='/wallet-transactions/:address/all/' element={<AllTxDashboard />} />
        <Route path='/wallet-transactions/:address/nft' element={<NftDashboard />} />
        <Route path='/wallet-transactions/:address/crypto' element={<CryptoDashboard />} />
        <Route path='/wallet-balance/:address/' element={<WalletBalance />} />
        <Route path='/wallet-balance/:address/crypto' element={<CryptoBalDashboard />} />
        <Route path='/wallet-balance/:address/nft' element={<NftBalDashBoard />} />

        <Route path='/wallet-transactions/:address/transaction-history/:wallet' element={< TxHistoryWithAdd />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
