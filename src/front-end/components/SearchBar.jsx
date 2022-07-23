import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';
import styled from 'styled-components'
import { ColorTheme } from '../ColorTheme';
import { coffeeProduct } from '../FakeData';

const Container = styled.div`
    display: inline-block;
    margin-left: 1em;
    position: relative;
`
const InputSearch = styled.input`
    border: 0 solid ${ColorTheme.brandC} ;
    width: 70%;
    padding: 1rem;
    background-color: transparent;
    color: ${ColorTheme.brand1};
    &:focus{
        outline: none !important;
        transition: all 1s ease;
        border:0.5px solid ${ColorTheme.brandC} ;
        box-shadow: 0 0 30px ${ColorTheme.brandC};
    }
`
const DropDown = styled.div`
    position: absolute;
    margin-top: 10px;
    right: 100px;
    display: ${props => (props.display) ? true : "none"};
`
const Decoration = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    top: -5px;
    right: 50px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${ColorTheme.brand1};
`
const CoffeeList = styled.div`
    min-width: 300px;
    padding: 1rem;
    position:relative;
    list-style-type: none;
    z-index: 2;
    background-color: ${ColorTheme.brand1};
    box-shadow: 0px 8px 16px 0px ${ColorTheme.brandC};
`
const ItemContainer = styled.div`
    display:flex;
    cursor: pointer;
    border-bottom: 2px solid ${ColorTheme.brand2};
`
const ImgContainer = styled.div`
    max-width: 70px;
`
const Img = styled.img`
    width: 100%;
`

const ItemInfo = styled.div`
    

`
const ItemName = styled.li`
    color: black;
    text-transform: uppercase;
`
const Desc = styled.div`
    color: #0B2C4A;
    font-weight: 200;
`
const Price = styled.div`
    color: ${ColorTheme.brandC};
`

const SearchBar = () => {

    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
    }, [searchQuery])
    const getValue = (e) => {
        //console.log(e.target.value);
        setSearchQuery(e.target.value);
    }
    return (
        <Container>
            <SearchIcon style={{ verticalAlign: "middle" }} />
            <InputSearch placeholder="Search" onChange={(e) => getValue(e)} />

            <DropDown display={searchQuery}>
                <CoffeeList>
                    <Decoration></Decoration>
                    {coffeeProduct.map((product) => (
                        <ItemContainer key = {product.id}>
                            <ImgContainer>
                                <Img src={product.img} />
                            </ImgContainer>
                            <ItemInfo>
                                <ItemName> {product.name} </ItemName>
                                <Desc> {product.desc} </Desc>
                                <Price> $ {product.price} </Price>
                            </ItemInfo>
                        </ItemContainer>

                    ))}
                </CoffeeList>
            </DropDown>

        </Container>
    )
}

export default SearchBar
