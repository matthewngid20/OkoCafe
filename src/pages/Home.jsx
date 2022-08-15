import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../App"
import RelatedProducts from "../components/Products/RelatedProducts"
import Slider from "../components/Slider"
import VideoBG from "../components/VideoBG"
const Container = styled.div`

`

const Home = (props) => {
    
const products = useContext(Context)
    return (
        <Container>
            <VideoBG width="100%" />
            <Slider stories={props.stories} />
            <RelatedProducts />
        </Container>

    )
}
export default Home

