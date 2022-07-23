import styled from "styled-components"
import Footer from "../components/Main/Footer"
import NavBar from "../components/Main/NavBar"
import RelatedProducts from "../components/Products/RelatedProducts"
import Slider from "../components/Slider"
import VideoBG from "../components/VideoBG"
const Container = styled.div`

`

const Home = (props) => {
    return (
        <Container>
            <VideoBG width="100%" />
            <Slider stories = {props.stories} />
            <RelatedProducts />
        </Container>

    )
}
export default Home

