import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NormTxPage from './pages/NormTxPage'
import NftTxPage from './pages/NftTxPage'
import CryptoTxPage from './pages/CryptoTxPage'
import BalHeader from './components/headers/BalHeader'
import NftBalPage from './pages/NftBalPage'
import TxHistoryWithAdd from './pages/TxHistoryWithAdd'
import CryptoBalPage from './pages/CryptoBalPage'




const wallettest = '0xCDc7ba99391F3BE7E5Dc0e49cC8361B537cfC29b'
const deployLink = 'https://simplecrypto.vercel.app/'
function App() {



  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route index element={<HomePage />} />
        <Route path='/wallet-transactions/:address/transactions' element={<NormTxPage />} />
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
