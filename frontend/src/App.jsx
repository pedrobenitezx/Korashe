import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Music from './pages/Music'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Merch from './pages/Merch'
const App = () => {
  return (
    <div className='px-4 sm:px-[6vw] lg:px-[8vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Music />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/merch' element={<Merch />} />
      </Routes>
    </div>
  )
}

export default App
