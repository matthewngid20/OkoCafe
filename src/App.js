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
import { useState,
useEffect } from "react";

import {

Route,
Routes,
} from "react-router-dom";

import * as API from "./APIs/getRouter"

import axios from "axios"

const Container = styled.div`
position: relative; 
background-color: rgba(0,0,0,0.2); 
background: linear-gradient(180deg, #211D1C 0%, rgba(33, 29, 28, 0) 49.29%); 
`

function App() {
const [stories, setStories] = useState()
const [products, setProducts] = useState()
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
} else {
console.log(rej);
return
}
})
}
var getProduct = () => {
axios.get("http://localhost:3307/products").then((res, rej) => {
if (res) {
setProducts(res.data)
//console.log(res);
} else {
console.log(rej);
return
}
})
}
return (
<Container>
<NavBar />
<Routes>
<Route path="/" element={<Home stories={stories} products={products} />} />
<Route path="shop" element={<Shop products={products} />} />
<Route path="productdetail" element={<ProductDetail products={products} />} />
<Route path="productdetails/:productId" element={<ProductDetail products={products} />} />
<Route path="aboutus" element={<AboutUs />} />
<Route path="contact" element={<Contact />} />
<Route path="blog" element={<Blog />} />
<Route path="shoppingCart" end element={<ShoppingCart />} />
<Route path="blogdetail" element={<BlogDetail />} />
</Routes>
<Footer />
</Container>
);
}

export default App;
