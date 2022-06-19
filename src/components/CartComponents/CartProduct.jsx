import styled from "styled-components"
import { coffeeProduct } from "../../FakeData"
import { ColorTheme } from "../../ColorTheme"


const Container = styled.div`
    display: flex;
    cursor: pointer;
    border-bottom: 2px solid ${ColorTheme.brand2};
    padding: 1em 0px;
`
const ImgContainer = styled.div`
    /* max-width: 70px; */
    max-width: ${props => props.imgSize};
`
const Img = styled.img`
    width: 100%;    
`
const ProductInfo = styled.div`
    
`
const ItemName = styled.div`    
    color: black;
`
const Price = styled.div`
    color: ${ColorTheme.brandC};
`

const Desc = styled.div`
    color: #0B2C4A;
    font-weight: 200;
`
const CartProduct = ({imgSize,url,coffeeName, description, price}) => {
    return (
        <Container>
            <ImgContainer imgSize ={imgSize}>
                <Img src={url} />
            </ImgContainer>
            <ProductInfo>
                <ItemName> {coffeeName}</ItemName>
                <Desc> {description} </Desc>
                <Price> $ {price} </Price>
            </ProductInfo>
        </Container>
    )
}

export default CartProduct
