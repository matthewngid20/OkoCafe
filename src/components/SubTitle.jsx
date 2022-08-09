import styled from "styled-components"
import { ColorTheme } from "../ColorTheme"

const Container = styled.div`
    //background-color:${ColorTheme.bg1};
    color: ${ColorTheme.brand1};
    font-weight: 200;
    display:flex;
    justify-content: ${props => props.position};
    font-size:17px;
    word-spacing: 3px;
    @media screen and (max-width: 960px) {
        
    
    
         
        font-size:15px;
      
        
    }
`
const Content = styled.div`
    max-width: ${props => props.width};
    padding: ${props => props.padding};
    `
const SubTitle = ({description, size, width,alignment}) => {
    return (
        <Container  position = {alignment}>
            <Content padding = {size} width ={width} >
                {description}
            </Content>
        </Container>
    )
}

export default SubTitle
