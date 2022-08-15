import './App.css';
import styled from "styled-components"
import NavBar from './components/Main/NavBar';
import Footer from './components/Main/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import AboutUs     from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import {Route,Routes,} from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios"
import { useState, } from 'react';
import { createContext } from 'react';
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
  }, [isLoading,products])


  var getCartItems = () => {
    setCart((sessionStorage.getItem('cart')))
  }
  var getStory = async () => {
    await axios.get("http://localhost:3307/story").then((res, rej) => {
      if (res) {
        setStories(JSON.stringify(res.data))
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }

  var getProduct = async () => {
    await axios.get("http://localhost:3307/products").then((res, rej) => {
      if (res) {
        setProducts(JSON.stringify(res.data))
        sessionStorage.setItem('localProducts', JSON.stringify(res.data))
        setIsLoading(false)
      } else {
        console.log(rej);
        return
      }
    })
  }
  // window.onbeforeunload  = () => {
  //   if(sessionStorage.length == 0){
  //     window.sessionStorage.clear()
  //   }

  // }

  console.log(stories);

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
