import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { ColorTheme } from "../../ColorTheme";
import CartProduct from "./CartProduct";


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
const Cart = () => {
    return (
        <Container >
            <CartDetails>
                <ShoppingCartOutlinedIcon htmlColor={CartColor} />
                <CartItem >
                    CART (3)
                </CartItem>
            </CartDetails>
            <DropDown>
                <ItemContainer>
                    <Decoration></Decoration>
                    <Items>
                        <ProductContainer>
                           <CartProduct 
                           imgSize="70px"
                           url = "https://images.squarespace-cdn.com/content/v1/59a44aa2e6f2e1db4cbd5252/1627495205537-3NJGJY0UORTORXE1RVD3/mj-01.png?format=750w"
                           coffeeName="Super X"
                           description="Super x arabica"
                           price="50"
                           />
                        </ProductContainer>
                        <ButtonContainer>
                            <Button> VIEW DETAIL</Button>
                        </ButtonContainer>
                    </Items>
                </ItemContainer>
            </DropDown>
        </Container>
    )
}

export default Cart
