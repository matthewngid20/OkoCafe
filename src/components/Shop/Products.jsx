import styled from "styled-components";
import Product from "../Products/Product";
import { Pagination } from "@mui/material";
import { coffeeProduct } from "../../FakeData";
import { ColorTheme } from "../../ColorTheme";
import { useContext } from "react";
import { Context } from "../../App";


const Products = () => {
    const data = useContext(Context)
    //console.log(data[0]);
    const products  = JSON.parse(data[0]);
    return (
        <Container>
            <Title> Coffee</Title>
            <FilterType>
                <Filter type="espresso"> Espresso </Filter>
                <Filter type="filter"> Filter  </Filter>
            </FilterType>
            {products ? <><ProductContainer>
                {products.map(product => (
                    <Product key={product.productid} product={product} />
                ))}
            </ProductContainer></> : <h1> Nothing found</h1>}
            <PaginationContainer>
                <Pagination color="secondary" count={7} shape="rounded" />
            </PaginationContainer>
        </Container>
    )
}

const Container = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content:center;
`
const Title = styled.div` 
    color: ${ColorTheme.brandC};
    margin-top: 30px;
    font-size: 48px;
    font-weight: 400; 
    font-family: "Abril Fatface";
    text-align: center;
`
const FilterType = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
`
const Filter = styled.div`
    margin: 30px 0px;
    min-width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${ColorTheme.brandC};
    border: 0.2px solid ${ColorTheme.brand3};
    border-radius: 50px;
    font-size: 20px;
    cursor: pointer;
    opacity: ${props => props.type === "espresso" ? "1" : "0.2"};
`
const ProductContainer = styled.div` 
    display: flex;
    justify-content: center;
    flex-wrap:wrap;
`
const PaginationContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`
export default Products
