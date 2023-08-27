import React from 'react'
import '../css/home.css'
import '../css/accountchange.css'
import AccountChange from './AccountChange'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/rechargepage')
}

  return (
    <div className='wrapper'>
      <div className='navbar'>
      <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/1A1A1A/menu--v1.png" alt="menu--v1" id='profile'/>
      <p>HOME</p>
      </div>
      <AccountChange/>
      <div className='account-profile'>
        <img src={require('../assets/02/Mask Group 3.png')} className='profile'></img>
        <h5>Rahul Radhakrishnan</h5>
        <p>Card No:25334327</p>
        <p>Class IV B</p>
      </div>
      <div className='account-balance'>
        <p>Account Balance</p>
        <h1>&#8377;250.00</h1>
      </div>
      <div className='services-heading'>
        <p>Order Food, Recharge & Reports</p>
        <div className='services'>
         
          <div className='recharge' onClick={handleNavigate}>
            <img src={require("../assets/images/recharge.png")}></img>
            <p id='recharge'>Recharge</p>
          </div>
        
          <div className='order-food'>
            <img src={require("../assets/images/order.png")}></img>
            <p>Order Food</p>
          </div>
          <div className='re-history'>
            <img src={require("../assets/images/recharge-history.png")}></img>
            <p>Recharge-History</p>
          </div>
        </div>
        <div className='services-row-2'>
        <div className='order-report'>
            <img src={require("../assets/images/order-report.png")}></img>
            <p>Order Report</p>
          </div>
          <div className='cons-report'>
            <img src={require("../assets/images/consumption-report.png")}></img>
            <p>Consumption <br/>Report</p>
          </div></div> 
        
      </div>
    </div>
  )
}
