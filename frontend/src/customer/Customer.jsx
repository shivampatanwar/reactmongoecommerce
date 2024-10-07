import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


//Css
import './Customer.css'

const Customer = () => {
  return (
    <div className="customer">
      <Header />

      <div className="customer-content">
        <Outlet />
      </div>

      <Footer />
    </div>
  )
}

export default Customer
