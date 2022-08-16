import styled from "styled-components"
import Announcement from "../components/Shop/Announcement"
import { ColorTheme } from "../ColorTheme"
import Products from "../components/Shop/Products"

const Container = styled.div` 
    background-color: ${ColorTheme.bg1};
`

const Shop = () => {
    return (
        <Container>
            <Announcement/>
            <Products/>
        </Container> 
    )
}

export default Shop
