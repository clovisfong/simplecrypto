import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WalletTransactions from './pages/WalletTransactions'
import NftDashboard from './components/NftDashboard'
import AllTxDashboard from './components/AllTxDashboard'

const deployLink = 'https://simplecrypto.vercel.app/'
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/wallet-transactions/:address' element={<WalletTransactions />} />
        <Route path='/wallet-transactions/:address/all' element={<AllTxDashboard />} />
        <Route path='/wallet-transactions/:address/nft' element={<NftDashboard />} />


      </Routes>

    </BrowserRouter>
  )
}

export default App
