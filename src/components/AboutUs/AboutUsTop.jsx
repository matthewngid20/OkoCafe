import styled from "styled-components"
import Title from "../Title"
import SubTitle from "../SubTitle"
import NavBar from "../Main/NavBar"

const Container = styled.div` 
    background-image: url("https://images.pexels.com/photos/47316/cocoa-beans-cocoa-cacao-candy-47316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
    padding: 2rem;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    @media screen and (max-width: 960px) {
    padding: 6rem;
    
        
        
   }
`


const AboutUsTop = () => {
    return (
        <>
        <NavBar />
        <Container>
            <Title title="About us"  alignment="center" />
            <SubTitle description ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam voluptatum cum cumque ea temporibus consequatur nesciunt pariatur harum explicabo non illo autem, neque ratione, earum quia repellat. Maxime, commodi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas veritatis necessitatibus expedita nam nulla optio voluptatum incidunt reprehenderit similique, eveniet debitis! Labore delectus officia sit, veniam saepe aspernatur vitae.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut unde quibusdam officia optio beatae nobis similique enim vel sunt, voluptatum est a molestiae facere ratione iste doloribus tenetur hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam voluptatum cum cumque ea temporibus consequatur nesciunt pariatur harum explicabo non illo autem, neque ratione, earum quia repellat. Maxime, commodi!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quas veritatis necessitatibus expedita nam nulla optio voluptatum incidunt reprehenderit similique, eveniet debitis! Labore delectus officia sit, veniam saepe aspernatur vitae.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus aut unde quibusdam officia optio beatae nobis similique enim vel sunt, voluptatum est a molestiae facere ratione iste doloribus tenetur hic. "
                alignment="center" size = "1em" width="80%"/>
        </Container>
        </>
    )
}

export default AboutUsTop
