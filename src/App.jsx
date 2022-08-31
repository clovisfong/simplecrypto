import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Home from './pages/Home'
import WalletTransactions from './pages/WalletTransactions'
import NftDashboard from './components/nftTx/NftDashboard'
import CryptoDashboard from './components/cryptoTx/CryptoDashboard'
import WalletBalance from './pages/WalletBalance'
import CryptoBalDashboard from './components/cryptoBal/CryptoBalDashboard'
import NftBalDashBoard from './components/nftBal/NftBalDashboard'
import TxHistoryWithAdd from './pages/TxHistoryWithAdd'
import NormalTxDashBoard from './components/normalTx/NormalTxDashBoard'



const deployLink = 'https://simplecrypto.vercel.app/'
function App() {



  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/wallet-transactions/:address' element={<WalletTransactions />} />
        <Route path='/wallet-transactions/:address/all' element={<NormalTxDashBoard />} />
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
