import styled from "styled-components"
import Footer from "../components/Main/Footer"
import NavBar from "../components/Main/NavBar"
import RelatedProducts from "../components/Products/RelatedProducts"
import Slider from "../components/Slider"
import VideoBG from "../components/VideoBG"
const Container = styled.div`
`

const Home = () => {
    return (
        <Container>
            <NavBar/>
            <VideoBG width = "100%"/>
            <Slider/>
            <RelatedProducts/>
            <Footer/>
        </Container>
    )
}
export default Home

