import './App.css';
import styled from "styled-components"
import NavBar from './components/Main/NavBar';
import VideoBG from './components/VideoBG';
import Slider from './components/Slider';
import RelatedProducts from './components/Products/RelatedProducts';
import Product from './components/Products/Product';
import Announcement from './components/Shop/Announcement';
import Footer from './components/Main/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import TeamMember from './components/TeamMember';
import Contact from './pages/Contact';
import ShoppingCart from './pages/ShoppingCart';
import { Routes, Route} from "react-router-dom";


const Container = styled.div`
  /* position: relative; */
  /* background-color: rgba(0,0,0,0.2); */
  
  /* background: linear-gradient(180deg, #211D1C 0%, rgba(33, 29, 28, 0) 49.29%); */
  
`

function App() {

  return (
    <Container>
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="productDetail" element={<ProductDetail />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shoppingCart" element={<ShoppingCart />} />


      </Routes>
      
    </Container>
  );
}

export default App;