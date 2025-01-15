import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
const App = () => {
  return (
    <div className='app'>
    <Navbar/>
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='./cart' element={<Cart/>}></Route>
     <Route path='./placeorder' element={<PlaceOrder/>}></Route>
    </Routes>
    </div>
  )
}

export default App