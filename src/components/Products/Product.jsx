import styled from "styled-components"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { ColorTheme } from "../../ColorTheme";
import { Link } from "react-router-dom";


const Product = (props) => {
    return (
        //<h1>Shop</h1>
        <Container>
            {props ? <> <Circle />
                <Image src={props.product.img} />
                <Info>
                    <Link to={`/productdetails/${props.product.productid}`}> <Icon>
                        <ShoppingCartOutlinedIcon /></Icon>
                    </Link>
                    <Icon> <SearchIcon /></Icon>
                    <Icon> <FavoriteBorderIcon /> </Icon>
                </Info>
                <ProductDetail>
                    <ProductTitle>
                        {props.product.name}
                    </ProductTitle>
                    <Desc>{props.product.desc}</Desc>
                    <PriceContainer>
                        <Price>
                            ${props.product.price}
                        </Price>
                        <Volume>
                            {props.product.volume}G
                        </Volume>
                    </PriceContainer>
                </ProductDetail></> : <h1>loading</h1>}
        </Container>
    )
}
//Info CSS
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0; 
    top: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
`
const Container = styled.div`
    margin: 20px;
    min-width: 25vw;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    //background-color: black;
    position: relative;
    &:hover ${Info}{
        transition: all 1s ease; 
        opacity: 1;
    }
    object-fit: contain;
    
`
const Image = styled.img`
    height: 75%;
    width: 70%;
    object-fit: cover;
    z-index: 0;
`

const Icon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    align-items: center; 
    justify-content: center;
    margin:10px;
    transition: all 0.5s ease; 
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.2)
    }
`
const ProductDetail = styled.div`
    display: flex;
    flex-direction: column;
`
const ProductTitle = styled.div`
    font-size: 30px;
    align-self: center;
    color:${ColorTheme.brand2};
    `
const Desc = styled.div`
    align-self: center;
    color:${ColorTheme.brand2};
    font-weight: 200;
`
const PriceContainer = styled.div`
    color:${ColorTheme.brand2};
    display: flex;
    justify-content: space-between;
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color:${ColorTheme.brand2};
    position: absolute;
    top:50px;
`
const Price = styled.div`
`
const Volume = styled.div`
`

export default Product
