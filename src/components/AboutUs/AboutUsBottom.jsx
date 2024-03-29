import styled from "styled-components"
import TeamMember from "../TeamMember"
import Title from "../Title"
import SubTitle from "../SubTitle"
import { TeamMembers } from "../../FakeData"

const Container = styled.div` 
    // margin: 2px 0px;
    @media screen and (max-width: 960px) {
        padding:3em;
    }
    
`
const Wrapper = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 1em;
    
`
const SubContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
   
`

const AboutUsBottom = () => {
    return (
        <Container>
            <Title title="Our Team" alignment="center"/>
            <SubContainer>
                <SubTitle description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quisquam voluptatum cum cumque ea temporibus consequatur nesciunt pariatur harum explicabo non illo autem, neque ratione, earum quia repellat. Maxime, commodi!" />
            </SubContainer>
            <Wrapper>
                {TeamMembers.map((item,index )=> 
                    (<TeamMember key = {index}
                    url = {item.img}
                    fullName={item.name}
                    position={item.position} />))}
            </Wrapper>
        </Container>
    )
}

export default AboutUsBottom
