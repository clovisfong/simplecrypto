import './App.css'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TxHeader from './components/headers/TxHeader'
import NftTxPage from './pages/NftTxPage'
import CryptoTxPage from './pages/CryptoTxPage'
import BalHeader from './components/headers/BalHeader'
import NftBalPage from './pages/NftBalPage'
import TxHistoryWithAdd from './pages/TxHistoryWithAdd'
import AllTxPage from './pages/AllTxPage'
import CryptoBalPage from './pages/CryptoBalPage'



const deployLink = 'https://simplecrypto.vercel.app/'
function App() {



  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path='/wallet-transactions/:address/all' element={<AllTxPage />} />
        <Route path='/wallet-transactions/:address/nft' element={<NftTxPage />} />
        <Route path='/wallet-transactions/:address/crypto' element={<CryptoTxPage />} />
        <Route path='/wallet-balance/:address/' element={<BalHeader />} />
        <Route path='/wallet-balance/:address/crypto' element={<CryptoBalPage />} />
        <Route path='/wallet-balance/:address/nft' element={<NftBalPage />} />
        <Route path='/wallet-transactions/:address/transaction-history/:wallet' element={< TxHistoryWithAdd />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
