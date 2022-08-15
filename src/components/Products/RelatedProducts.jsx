import styled from "styled-components"
import Product from "./Product"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState,useContext } from "react";
import { ColorTheme } from "../../ColorTheme";
import { Context } from "../../App";


const RelatedProducts = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
        } else {
            setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
        }
    }
    const data = useContext(Context)
    const products = JSON.parse(data[0])

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlinedIcon />
            </Arrow>
            <ProductIntro>Our Product </ProductIntro>
            <ProductsWrapper slideIndex={slideIndex}>
                {products ? products.map(product => (
                    <Product key={product.productid} product={product} />
                )) :
                    <h1>Loading products</h1>}
            </ProductsWrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightAltOutlinedIcon />
            </Arrow>
        </Container>
    )
}
const Container = styled.div`
    display: flex; 
    position: relative;
    flex-direction:column;
    overflow: hidden;
    position: relative;
    object-fit: contain;
    background-color: ${ColorTheme.bg1};
   
`

const ProductsWrapper = styled.div`
    display: flex; 
    width:20%;
    margin: 0px 0px;
    transform: translateX(${props => props.slideIndex * -25}vw);
    transition: all 1s ease;
    /* flex-wrap:wrap; */
    @media screen and (max-width: 1050px) {
        
        flex-direction: column;
        margin: 0 0 3rem;
        font-size: 10px;
        padding:10em;
   
           
       }
    
`
const ProductIntro = styled.div`
    align-self: center;
    font-size: 60px;
    color: ${ColorTheme.brandC};
    margin:20px 0px;
    @media screen and (max-width: 1050px) {
        
    
       
        
        font-size: 20px;
        padding:10em;
   
           
       }
`
const Arrow = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: coral;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    top: 0;
    bottom: 0px;
    margin:auto;
    cursor: pointer;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    opacity: 0.5;
    z-index:2;
`
export default RelatedProducts
