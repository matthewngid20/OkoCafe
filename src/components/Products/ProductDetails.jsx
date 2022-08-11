import styled from "styled-components"
import { ColorTheme } from "../../ColorTheme"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { Context } from "../../App"

const ProductDetails = () => {
    const data = useContext(Context)
    const { productId } = useParams()
    const products = JSON.parse(data[0]);
    const thisProduct = products.find(prod => prod.productid === productId)

    useEffect(() => {

    }, [JSON.parse(localStorage.getItem('cart'))])
    const addToCart = () => {
        let addedProducts = []
        if (localStorage.getItem('cart')) {
            addedProducts = JSON.parse(localStorage.getItem('cart'))
        }
        addedProducts.push(thisProduct)
        window.localStorage.setItem('cart', JSON.stringify(addedProducts))

        console.log(JSON.parse(localStorage.getItem('cart')));
        alert("added item to cart")
        window.location.reload()
        // console.log(JSON.parse(localStorage.getItem('cartItems')))
    }

    return (

        <Container>
            <Hr />
            <ProductContainer>
                {products ? <> <ImgContainer>
                    <BigImg>
                        <Img src={thisProduct.img} />
                    </BigImg>
                    <SmallImgs>
                        <SmallImg style={{ width: "200px" }} src={thisProduct.img} />
                        <SmallImg style={{ width: "200px" }} src={thisProduct.img} />
                        <SmallImg style={{ width: "200px" }} src={thisProduct.img} />
                        <SmallImg style={{ width: "200px" }} src={thisProduct.img} />
                    </SmallImgs>
                </ImgContainer>
                    <ProductInfo>
                        <TopContent>
                            <Title>{thisProduct.name}</Title>
                            <Desc> {thisProduct.desc}</Desc>
                            <PriceContainer>
                                <Price> ${thisProduct.price}</Price>
                                <Vr />
                                <Volume> {thisProduct.volume}G </Volume>
                            </PriceContainer>
                            <Button onClick={() => addToCart()} >ADD TO CART</Button>
                        </TopContent>
                        <BottomContent>
                            <SmallTitle> INGREDIENT DETAILS: </SmallTitle>
                            <DetailsContainer>
                                <Col>
                                    <RowTitle> WASHING STATION: </RowTitle>
                                    <RowContent> {thisProduct.station} </RowContent>
                                    <RowTitle> ORIGIN:</RowTitle>
                                    <RowContent> ETHIOPIA</RowContent>
                                    <RowTitle> PROCESS:</RowTitle>
                                    <RowContent> NANO GENJI </RowContent>
                                    <RowTitle> VARIETAL: </RowTitle>
                                    <RowContent> ETHIOPIA HEIRLOOM</RowContent>
                                </ Col>
                                < Col>
                                    <RowTitle> ALTITUDE:</RowTitle>
                                    <RowContent> 1,900 - 2,200 METERS </RowContent>
                                    <RowTitle> TASTING NOTES:</RowTitle>
                                    <RowContent> JUICY PEACH, KEY LIME PIE, BLACK CHERRY TART.</RowContent>
                                    <RowTitle> ROAST LEVEL:</RowTitle>
                                    <RowContent> LIGHT </RowContent>
                                    <RowTitle> ROASTED</RowTitle>
                                    <RowContent> WEEKDAYS</RowContent>
                                </ Col>
                            </DetailsContainer>
                        </BottomContent>
                    </ProductInfo></> : <h1>Loading</h1>}
            </ProductContainer>
        </Container>

    )
}

export default ProductDetails
const Container = styled.div` 
    background-color: ${ColorTheme.bg1};
    margin: 100px 0px auto ;
    padding: 100px;
    
`
const Hr = styled.hr` 
    margin: auto;
    border: 2px solid ${ColorTheme.brand2};
    max-width: 90%;
    opacity: 0.3;
`
const ProductContainer = styled.div`
    display: flex;
    flex: 1;
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
`
const BigImg = styled.div`
    flex: 2;
`
const Img = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit :contain;
`
const SmallImgs = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
`
const SmallImg = styled.img`
    max-width: 50%;
    height: 50%;
    object-fit :contain;
    cursor: pointer;
    &:hover {
        border: 0.5px solid ${ColorTheme.brand2};
        border-radius: 3px;
    }
`
const ProductInfo = styled.div`
    flex: 1;
`
const TopContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h3`
    font-size: 45px;
    font-family: "Abril Fatface";
    font-weight: 200;
    color: ${ColorTheme.brandC};
    margin:0px;
`
const Desc = styled.div`
    padding: 20px 0;
    font-size: 20px;
    color: ${ColorTheme.brandC};
    font-weight: 200;
`
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
`
const Price = styled.div`
    font-size: 40px;
    color: ${ColorTheme.brandC};
    margin-right:20px;
    font-weight: 300;
`
const Vr = styled.div` 
    border-left: 1px solid ${ColorTheme.brandC};
    height: 40px;
`
const Volume = styled.div`
    font-size: 40px;
    margin-left:20px;
    color: ${ColorTheme.brandC};
    font-weight: 300;
`
const Button = styled.button`
    flex:1;
    padding: 15px;
    margin: 20px 0px;
    width: 80%;
    color: whitesmoke;
    background-color: ${ColorTheme.brand2};
    cursor: pointer;
`
const BottomContent = styled.div`
    
`
const SmallTitle = styled.span`
    font-size: 17px;
    color: ${ColorTheme.brandC};
`
const DetailsContainer = styled.div`
    margin-top:100px;
    display: flex;
    justify-content: space-between;
`
const Col = styled.div`
    flex:1;
    //border: 1px solid whitesmoke;
`
const RowTitle = styled.div`
    padding: 20px 0px 0px 0px; 
    color: ${ColorTheme.brand1};
    font-weight: 100;
`
const RowContent = styled.div`
    color: ${ColorTheme.brand1};
`
