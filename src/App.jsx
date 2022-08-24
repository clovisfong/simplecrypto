import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import WalletTransactions from './pages/WalletTransactions'
import TransactionList from './components/TransactionList'

const deployLink = 'https://simplecrypto.vercel.app/'
function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path='/home' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='/wallet-transactions' element={<WalletTransactions />}>
          <Route path=':address' element={<TransactionList />} />
        </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
