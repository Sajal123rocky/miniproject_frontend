import React from 'react'
import MainLayout from '../mainlayout/MainLayout';
import {Link } from 'react-router-dom'
function Transactions(props) {
  return (
    <MainLayout>
      <div className='transaction-container'>
      <h2>Following Transaction tooks place</h2>
        <ul>
            <li>Transaction 1</li>
            <li>Transaction 2</li>
        </ul>
        <Link to='/Fund' style={{color:"white"}}>hello</Link>
    </div>
    </MainLayout>
    
  )
}

export default Transactions