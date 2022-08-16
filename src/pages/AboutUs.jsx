import styled from "styled-components"
import '../App.css'
import AboutUsBottom from "../components/AboutUs/AboutUsBottom"
import AboutUsMiddle from "../components/AboutUs/AboutUsMiddle"
import AboutUsTop from "../components/AboutUs/AboutUsTop"



const Container = styled.div`
     //position: relative; 
     background-image: linear-gradient(#211D1C, #211D1C);
     padding-top:50px;
     width: 100vw;
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
