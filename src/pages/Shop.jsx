import styled from "styled-components"
import Announcement from "../components/Shop/Announcement"
import NavBar from "../components/Main/NavBar"
import Footer from "../components/Main/Footer"
import { ColorTheme } from "../ColorTheme"
import Products from "../components/Shop/Products"
const Container = styled.div` 
    background-color: ${ColorTheme.bg1};
`

const Shop = (props) => {
    return (
        <Container>
            <Announcement/>
            <Products products = {props.products}/>
        </Container> 
    )
}

export default Shop
