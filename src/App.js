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
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import TeamMember from './components/TeamMember';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import {

  Route,
  Routes,

} from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios"
import { useState, } from 'react';
import { DataProvider, UseData } from './DataContext';
import { createContext } from 'react';
import { Button } from '@mui/material';

const Container = styled.div`
 position: relative; 
 background-color: rgba(0,0,0,0.2); 
 background: linear-gradient(180deg, #211D1C 0%, rgba(33, 29, 28, 0) 49.29%); 
`
export const Context = createContext();
function App() {
  const [stories, setStories] = useState()
  const [products, setProducts] = useState(
    localStorage.getItem('localProducts')
  )
  const [isLoading, setIsLoading] = useState(true)

  //console.log(window.localStorage);
  // console.log(window.sessionStorage);
  //localStorage.clear()

  useEffect(() => {
    getStory()
    getProduct()
    return () => {
    }
  }, [])
  var getStory = () => {
    axios.get("http://localhost:3307/story").then((res, rej) => {
      if (res) {
        setStories(res.data)
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }
  var getProduct = () => {
    axios.get("http://localhost:3307/products").then((res, rej) => {
      if (res) {
        localStorage.setItem('localProducts', JSON.stringify(res.data))
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }
  //console.log(JSON.parse(localStorage.getItem('localProducts')));
  return (
<<<<<<< HEAD
    //<Context.Provider value={[products, stories]}>
    <Context.Provider value={[products, stories]}>
      <Container>
        <NavBar />
        {isLoading ? <h1> Loading data</h1> :
          <Routes>
            <Route path="/" element={<Home stories={stories} products={products} />} />
            <Route path="shop" element={<Shop products={products} />} />
            <Route path="productdetail" element={<ProductDetail products={products} />} />
            <Route path="productdetails/:productId" element={<ProductDetail products={products} />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="shoppingCart" end element={<ShoppingCart />} />
          </Routes>
          }
        <Footer />
      </Container>
    </Context.Provider>
=======

    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home stories={stories} products={products} />} />
        <Route path="shop" element={<Shop products={products} />} />
        <Route path="productdetail" element={<ProductDetail products={products} />} />
        <Route path="productdetails/:productId" element={<ProductDetail products={products} />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="shoppingCart" end element={<ShoppingCart />} />
        <Route path="blogdetail" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </Container>
>>>>>>> 8b323384639ad1d049aa7261fb4ff6a7bc5d8c92
  );
}

export default App;