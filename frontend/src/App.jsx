import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'


const App = () => {
  return (
    <div className='px-4 sm:px-[6vw] lg:px-[8vw]'>

      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/product/:productId' element={<Product/>} />
      <Route path='/placeorder' element={<PlaceOrder/>} />
      </Routes>

    </div>
  )
}

export default App
