import React from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Register from'./project/register/Register'
import Login from './login/Login'
import Home from './home/Home'
import Aboutus from './about/Aboutus'
import Cart from './cart/Cart'
function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path='/r' element={<Register/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/h' element={<Home/>}></Route>
      <Route path='/a' element={<Aboutus/>}></Route>
      <Route path='/c' element={<Cart/>}></Route>
      </Routes>
      </Router>
    </div>
  )
}

export default App