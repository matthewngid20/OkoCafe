import './App.css';
import styled from "styled-components"
import NavBar from './components/Main/NavBar';
import VideoBG from "./components/VideoBG";
import Slider from './components/Slider';
import RelatedProducts from './components/Products/RelatedProducts';
import Product from './components/Products/Product';
import Announcement from './components/Shop/Announcement';
import Footer from './components/Main/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import BlogDetail from './pages/BlogDetail';

import ProductDetail from './pages/ProductDetail';
import AboutUs     from './pages/AboutUs';
import Blog from './pages/Blog';
import TeamMember from './components/TeamMember';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';

import {Route,Routes,} from "react-router-dom";

import * as API from "./APIs/getRouter"

import { useEffect } from 'react';
import axios from "axios"
import { useState, } from 'react';
import { DataProvider, UseData } from './DataContext';
import { createContext } from 'react';
import { Button } from '@mui/material';
import BlogDetails from './components/Blog/BlogDetails';


const Container = styled.div`
position: relative; 
background-color: rgba(0,0,0,0.2); 
background: linear-gradient(180deg, #211D1C 0%, rgba(33, 29, 28, 0) 49.29%); 
`
export const Context = createContext();
function App() {
  const [stories, setStories] = useState()
  const [products, setProducts] = useState(
    sessionStorage.getItem('localProducts')
  )
  const [isLoading, setIsLoading] = useState(true)
  const [cart, setCart] = useState(
    sessionStorage.getItem('cart')
  )


  useEffect(() => {
    getStory()
    getProduct()
    getCartItems();
    return () => {
    }
  }, [])


  var getCartItems = () => {
    setCart((sessionStorage.getItem('cart')))
  }
  var getStory = () => {
    axios.get("https://main.d19f95q0donsj2.amplifyapp.com/story").then((res, rej) => {
      if (res) {
        setStories(JSON.stringify(res.data))
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }

  var getProduct = () => {
    axios.get("https://main.d19f95q0donsj2.amplifyapp.com/products").then((res, rej) => {
      if (res) {
        debugger;
        sessionStorage.setItem('localProducts', JSON.stringify(res.data))
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }
  window.onbeforeunload  = () => {
    if(sessionStorage.length == 0){
      window.sessionStorage.clear()
    }

  }

  console.log(JSON.parse(cart));
  return (
    <Context.Provider value={[products, stories, cart]}>
      <Container>
        <NavBar />
        {isLoading ? <h1> Loading data</h1> :
          <Routes>
            <Route path="/" element={<Home stories={stories} products={products} />} />
            <Route path="shop" element={<Shop products={products} />} />
            <Route path="productdetail" element={<ProductDetail products={products} />} />
            <Route path="productdetails/:productId" element={<ProductDetail products={products} />} />
            <Route path="aboutus" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blogdetail" element={<BlogDetails />} />
            <Route path="shoppingCart" element={<ShoppingCart />} />
          </Routes>
        }
        <Footer />
      </Container>
    </Context.Provider>
  );
}

export default App;
