import styled from "styled-components"
import Product from "./Product"
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useState } from "react";
import { coffeeProduct } from "../../FakeData";
import { ColorTheme } from "../../ColorTheme";

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
`
const ProductIntro = styled.div`
    align-self: center;
    font-size: 60px;
    color: ${ColorTheme.brandC};
    margin:20px 0px;
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
const RelatedProducts = ({ item }) => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 4);
        } else {
            setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowBackIosOutlinedIcon />
            </Arrow>
            <ProductIntro>Our Product </ProductIntro>
            <ProductsWrapper slideIndex={slideIndex}>
                {coffeeProduct.map(item => (
                    <Product key={item.id} item={item} />
                ))}
            </ProductsWrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightAltOutlinedIcon />
            </Arrow>
        </Container>
    )
}

export default RelatedProducts
