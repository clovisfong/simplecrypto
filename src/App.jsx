import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WalletTransactions from './pages/WalletTransactions'
import NftDashboard from './components/NftDashboard'
import AllTxDashboard from './components/AllTxDashboard'
import CryptoDashboard from './components/CryptoDashboard'
import WalletBalance from './pages/WalletBalance'
import CryptoBalance from './components/CryptoBalance'
import CryptoBalDashboard from './components/CryptoBalDashboard'
import NftBalDashBoard from './components/NftBalDashboard'
import { useState } from 'react'

const deployLink = 'https://simplecrypto.vercel.app/'
function App() {




  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/wallet-transactions/:address' element={<WalletTransactions />} />
        <Route path='/wallet-transactions/:address/all/' element={<AllTxDashboard />} />
        <Route path='/wallet-transactions/:address/nft' element={<NftDashboard />} />
        <Route path='/wallet-transactions/:address/crypto' element={<CryptoDashboard />} />
        <Route path='/wallet-balance/:address/' element={<WalletBalance />} />
        <Route path='/wallet-balance/:address/crypto' element={<CryptoBalDashboard />} />
        <Route path='/wallet-balance/:address/nft' element={<NftBalDashBoard />} />

        {/* <Route path='/wallet-balance/:address/transaction-history/:wallet' element={<NftBalDashBoard />} /> */}
      </Routes>

    </BrowserRouter>
  )
}

export default App
