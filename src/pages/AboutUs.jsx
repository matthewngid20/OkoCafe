import styled from "styled-components"
import AboutUsBottom from "../components/AboutUs/AboutUsBottom"
import AboutUsMiddle from "../components/AboutUs/AboutUsMiddle"
import AboutUsTop from "../components/AboutUs/AboutUsTop"
import Footer from "../components/Main/Footer"



const Container = styled.div`
     background-image: linear-gradient(#211D1C, #211D1C);
`



const AboutUs = () => {
    return (
        <Container>
            <AboutUsTop/>
            <AboutUsMiddle/>
            <AboutUsBottom/>
        </Container>
    )
}



export default AboutUs
