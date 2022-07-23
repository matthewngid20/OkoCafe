import { Subject } from "@mui/icons-material"
import styled from "styled-components"
import { ColorTheme } from "../ColorTheme"

const Container = styled.div`
    width:  300px;
    height: 500px;
    margin: 3rem;
`
const Sub =styled.div`
font-size: 17px;
font-weight: 200;
text-align: center;
color: ${ColorTheme.brand1};

`
const ImgContainer = styled.div` 

width: 150%;
height: 337.24px;



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


const BlogImage = ({ subject,url, fullName, position }) => {
    return (
        <Container>
            <ImgContainer src={url}> 
            </ImgContainer>
            <Sub> {subject} </Sub>
            <Name> {fullName} </Name>
            <Position> {position} </Position>
        </Container>
    )
}

export default BlogImage
