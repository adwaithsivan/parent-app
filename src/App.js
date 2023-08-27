import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import RechargePage from './pages/RechargePage'
import RechargePageRita from './pages/RechargePageRita'


const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/rechargepage' element={<RechargePage/>}></Route>
        <Route path='/rechargepage2' element={<RechargePageRita/>} ></Route>
      </Routes>
     
    </div>
  )
}

export default App
