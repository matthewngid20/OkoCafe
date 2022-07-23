import styled from "styled-components"
import { ColorTheme } from "../ColorTheme"

const Container = styled.div`
    width: max(10vw, 200px);
    height: max(10vw, 200px);
    margin: 3rem;
`

const ImgContainer = styled.div` 
    width: 100%;
    height:100%;
    border-radius: 50%;
    background-image: url(${props => props.src}); 
    background-size: cover;   
`

const Name = styled.div` 
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    color: ${ColorTheme.brandC};
`
const Position = styled.div` 
    font-size: 17px;
    font-weight: 200;
    text-align: center;
    color: ${ColorTheme.brand1};
   `


const TeamMember = ({ url, fullName, position }) => {
    return (
        <Container>
            <ImgContainer src={url}> 
            </ImgContainer>
            <Name> {fullName} </Name>
            <Position> {position} </Position>
        </Container>
    )
}

export default TeamMember
