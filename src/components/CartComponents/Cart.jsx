import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ColorTheme } from "../../ColorTheme";
import CartProduct from "./CartProduct";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";




const Cart = () => {
    const [cartItems, setCartItems] = useState();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    useEffect(() => {
        setCartItems(sessionStorage.getItem('cart'))
    }, [sessionStorage.getItem('cart')])

    return (
        <Container >
            <CartDetails>
                <ShoppingCartOutlinedIcon htmlColor={CartColor} />
                {cartItems ? JSON.parse(cartItems).length : 0}
            </CartDetails>
            <DropDown>
                <ItemContainer>
                    <Decoration></Decoration>
                    <Items>
                        <ProductContainer>

                            {cartItems ? JSON.parse(cartItems).map((item, index) => {
                                
                                    return ( 
                                        <CartProduct key={index}
                                            imgSize="70px"
                                            url={item.img}
                                            coffeeName={item.name}
                                            description={item.desc}
                                            price={item.price}
                                        />)
                                
                                // else {
                                //     JSON.parse(cartItems).slice(0, 2).map((item, index) => {
                                //         if (JSON.parse(cartItems).length > 2 && screenWidth < 500) {
                                //             return (
                                //                 <CartProduct key={index}
                                //                     imgSize="70px"
                                //                     url={item.img}
                                //                     coffeeName={item.name}
                                //                     description={item.desc}
                                //                     price={item.price}
                                //                 />)
                                //         }

                                //     })
                                // }

                            }) : null}
                        </ProductContainer>
                        <ButtonContainer>
                            <Link to="/ShoppingCart">
                                {cartItems && JSON.parse(cartItems).length > 0 ? <Button >
                                    VIEW MORE ITEM DETAILS
                                </Button> : null}
                            </Link>
                        </ButtonContainer>
                    </Items>
                </ItemContainer>
            </DropDown>
        </Container>
    )
}
const Items = styled.div`
  
`
const CartDetails = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0px 1em ;
`
const ItemContainer = styled.div`
    display:none;
    min-width: 300px;
    top: 20px;
    right:60px;
    padding: 1rem;
    position:relative;
    list-style-type: none;
    z-index: 3;
    background-color: ${ColorTheme.brand1};
    box-shadow: 0px 8px 16px 0px ${ColorTheme.brandC};
`
const Container = styled.div`
    display:flex;
    position:relative;
    &:hover ${ItemContainer} {
        display:block;
    };
    &:hover ${CartDetails} {
        box-shadow: 0px 0px 8px 2px ${ColorTheme.brandC};
        transition: all 0.5s ease; 

    };

`

const CartItem = styled.div`
    font-weight: 200;
    margin-left:10px;
    color: ${ColorTheme.brand1};
    font-size: 15px;
`
const DropDown = styled.div`
    position: absolute;
    margin-top: 43px;
    @media screen and (max-width: 960px) {
        font-size:20px;
       }
    `

const Decoration = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    top:-10px;
    left:90px;    
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${ColorTheme.brand1};
    `
const ProductContainer = styled.div`
    @media screen and (max-width: 500px) {
        
    }
`

const ButtonContainer = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
    `
const Button = styled.button`
    padding: 1em;
    background-color: ${ColorTheme.brand3};
    cursor: pointer;
`

const CartColor = `${ColorTheme.brand1}`
export default Cart
