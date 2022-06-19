import React from 'react'
import CartDetails from '../components/CartComponents/CartDetails'
import Footer from '../components/Main/Footer'
import NavBar from '../components/Main/NavBar'

const ShoppingCart = () => {
    return (
        <div>
            <NavBar/>
            <CartDetails/>
            <Footer/>
        </div>
    )
}

export default ShoppingCart
