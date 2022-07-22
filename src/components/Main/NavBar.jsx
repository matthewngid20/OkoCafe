import styled from "styled-components"
import { useState, useEffect } from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';
import { ColorTheme } from "../../ColorTheme"
import SearchBar from "../SearchBar";
import Cart from "../CartComponents/Cart";


const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content:center;
`
const Container = styled.div`
    margin:40px auto;
    max-height: 15vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover ${Left}{
    };
    background-color:black;
    position: sticky;
    top: 0;
    padding-top: 1em;
    z-index: 10000;

    background-color: #333;
    position: fixed;
    top: -50px;
    width: 100%;
    display: block;
    transition: top 0.3s;
`
const TopCenter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const LanguageContainer = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
`
const Language = styled.div`
    cursor: pointer;
    margin: 0px 20px;
    color: ${ColorTheme.brand1};  
    opacity: ${props => props.langague === "en" ? "1" : "0.7"};
`
const IconContainer = styled.div`
    display: flex;
    margin-left: 10px;
`
const Icon = styled.div`
    margin-left: 20px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    cursor: pointer;
    &:hover{
        background-color: #${props => props.color};
        transition: all 2s ease;
    }
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    //position:relative;
`
const LeftText = styled.div`
    font-weight: 600;
    color: #C8765A;
    margin-right: 20px;
    font-size: 20px;
`
const Brand = styled.div`// h1 For now
    width: 80px;
    height: 80px;
    border-radius:50%;
    cursor: pointer;
    border: 1px solid #C8765A;
    color: #C8765A;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const RightText = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: #C8765A;
    margin-left: 20px;
`
const BottomCenter = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin: 20px 0px;
`
const Link = styled.a`
    font-weight: 200;
    font-size: 16px;
    cursor: pointer;
    color: #C8765A;
    padding: 0px 20px;
    /* &:hover {
        transform: scaleY(1.4);
        transform: scaleX(1.4);
        color: white;
        transition: all 1s cubic-bezier(1, 2, 3, 4);
        border: 0.5px solid ${ColorTheme.brand2};
        padding: 5px;
        border-radius: 3px;
    } */
    /* &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.5s;
        border: 1px solid rgba(255,255,255,0.2);
        background-color: rgba(255,255,255,0.1);
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        transition: all 0.5s;
        border: 1px solid rgba(255,255,255,0.2);
        background-color: rgba(255,255,255,0.1);
    }
    &:hover::before{
        transform: rotate(-45deg);
        background-color: rgba(255,255,255,0);
    }
    &:hover::after{
        transform: rotate(45deg);
        background-color: rgba(255,255,255,0);
    } */
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    color: #eef;
    
`
// const CartContainer = styled.div`
//     display: flex;
//     align-items: center;
//     cursor: pointer;
// `
// const CartItem = styled.div`
//     font-weight: 200;
//     margin-left:10px;
//     color: ${ColorTheme.brand1};
// `
// const Cart = styled.div`
//     display: flex;
//     justify-content: space-between;
//     margin-left:10px;
// `

const NavBar = () => {

    return (
        <Container>
            <TopCenter>
                <Left>
                    <LanguageContainer>
                        <Language langague="en"> EN  </Language>
                        <Language langague="vn"> VN  </Language>
                    </LanguageContainer>
                    <IconContainer>
                        <Icon color="4267B2" ><FacebookIcon style={{ fontSize: 17 }} /> </Icon>
                        <Icon color="E1306C" ><InstagramIcon style={{ fontSize: 17 }} /></Icon>
                        <Icon color="FF0000" > <YouTubeIcon style={{ fontSize: 17 }} /></Icon>
                    </IconContainer>
                </Left>
                <Center>
                    <LeftText> Fuel your imagination</LeftText>
                    <Brand> Smooth Curve </Brand>
                    <RightText> Feel your different</RightText>
                </Center>
                <Right>
                    {/* <CartContainer>
                        <Cart>
                            <ShoppingCartOutlinedIcon htmlColor={CartColor} />
                            <CartItem >
                                Cart (3)
                            </CartItem>
                        </Cart>
                    </CartContainer> */}
                    <Cart />
                    <SearchBar />
                </Right>
            </TopCenter>
            <BottomCenter>
                <Link> Home</Link>
                <Link> Coffee Shop</Link>
                <Link> About</Link>
                <Link> Contact</Link>
            </BottomCenter>
        </Container>


    )
}


export default NavBar
