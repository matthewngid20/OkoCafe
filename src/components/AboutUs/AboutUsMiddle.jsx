import styled from "styled-components"
import { ColorTheme } from "../../ColorTheme"
import SubTitle from "../SubTitle"

const Container = styled.div`
    display: flex; 
    justify-content: center;
    align-items: center; 
    
    
`
const Wrapper = styled.div` 
    display: flex;   
    flex-direction: column;
    padding: 2rem 7rem;  
   
    
`
const Row = styled.div` 
   display: flex;
   flex-direction: ${props => props.type === "firstRow" && "row-reverse"};
   @media screen and (max-width: 500px) {
        
        
    flex-direction: column;
    
}
`
const Col = styled.div`
    display: flex;   
    justify-content: center;
    align-items: center;
    color: ${ColorTheme.brand1};
    line-height: 2rem;
    flex-direction: ${props => props.type === "text" && "column"};
    padding:  ${props => props.type === "text" && "7rem"};
    //border: 1px solid white;
    flex: 1;
`

const ImageContainer = styled.div` 
    width: 100%;
    
    
`
const Img = styled.img`
    object-fit: contain;
    min-width: 100%;
    min-height: 100%;
`
const Title = styled.div` 
    font-size: 40px;
    color: ${ColorTheme.brandC};
    padding :2rem;
   

`
const AboutUsMiddle = () => {
    return (
        <Container>
            <Wrapper>
                <Row type="firstRow">
                    <Col type="text">
                        <Title> Our Mission</Title>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur dignissimos, quod perspiciatis, illo minus rem sequi optio consequuntur culpa ipsa ex repellendus quasi explicabo dolorum, ipsam dicta! Quo, ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam et, est dolorum atque suscipit in similique eos repudiandae necessitatibus quisquam magni! Veritatis officia porro fuga, ipsam voluptates soluta. Minus?
                    </Col>
                    <Col >
                        <Img src="https://images.pexels.com/photos/4787601/pexels-photo-4787601.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    </Col>
                </Row>
                <Row>
                    <Col type="text">
                        <Title> Our Vision</Title>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum pariatur dignissimos, quod perspiciatis, illo minus rem sequi optio consequuntur culpa ipsa ex repellendus quasi explicabo dolorum, ipsam dicta! Quo, ex? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quibusdam et, est dolorum atque suscipit in similique eos repudiandae necessitatibus quisquam magni! Veritatis officia porro fuga, ipsam voluptates soluta. Minus?
                    </Col>
                    <Col>
                        <ImageContainer>
                            <Img src="https://images.pexels.com/photos/7487374/pexels-photo-7487374.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </ImageContainer>
                    </Col>
                </Row>
            </Wrapper>
        </Container>
    )
}

export default AboutUsMiddle
