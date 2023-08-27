import React from 'react'
import '../css/rechargepage.css'

const RechargePage = () => {
  return (
    <div className='rechargepage-wrapper'>
      <div className='navbar'>
      <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/1A1A1A/menu--v1.png" alt="menu--v1" id='profile'/>
      <p>Recharge</p>
      </div>
      <div className='wallet-balance-bar'>
      <img src={require('../assets/images/wallet.png')} width="20" height="20"></img>
      <p>Balance: &#8377;245.00</p>
      </div>
      <div className='account-profile2'>
        <img src={require('../assets/02/Mask Group 3.png')} className='profile'></img>
        <h5>Rahul Radhakrishnan</h5>
        <p>Card No:25334327</p>
        <p>Class IV B</p>
      </div>
      <div className='amount'>
        <h1>&#8377; 0.00</h1>
        <button className='pay-btn'>PAY</button>
      </div>
      <div className='dialpad'>
        <div className='dial'>
          <button className='dial-key'>1</button>
          <button className='dial-key'>2</button>
          <button className='dial-key'>3</button>
          <button className='dial-key'>4</button>
          <button className='dial-key'>5</button>
          <button className='dial-key'>6</button>
          <button className='dial-key'>7</button>
          <button className='dial-key'>8</button>
          <button className='dial-key'>9</button>
          <button className='dial-key'><img width="30" height="30" src="https://img.icons8.com/ios-filled/50/1A1A1A/expand-arrow--v1.png" alt="expand-arrow--v1"/></button>
          <button className='dial-key'>0</button>
          <button className='dial-key'><img width="50" height="50" src="https://img.icons8.com/ios/50/1A1A1A/clear-symbol--v1.png" alt="clear-symbol--v1"/></button>
        </div>
      </div>
    </div>
  )
}

export default RechargePage

