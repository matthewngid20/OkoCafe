import ContactForm from "../components/ContactForm"
import NavBar from "../components/Main/NavBar"
import styled from "styled-components"
import Footer from "../components/Main/Footer"

const Container = styled.div`
    background-image: url("https://images.pexels.com/photos/5537955/pexels-photo-5537955.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
`

const Contact = () => {
    return (
        <Container>
            <NavBar />
            <ContactForm />
            <Footer />
        </Container>
    )
}

export default Contact
