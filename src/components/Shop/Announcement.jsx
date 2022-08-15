import React from 'react'
import styled from "styled-components"
import { ColorTheme } from "../../ColorTheme"

const Announcement = () => {
    return (
        <Container>
            <Wrapper>
                <InfoContainer>
                    <Title>
                        Grand Opening
                    </Title>
                    <SaleTitle>
                        50%
                        <SmallText> OFF</SmallText>
                    </SaleTitle>
                    <ButtonWrapper>
                        <Button color="left"> VIEW MORE  </Button>
                        <Button color="right"> BUY NOW    </Button>
                    </ButtonWrapper>
                </InfoContainer>
                <ImgContainer>
                    <Image src="https://media.istockphoto.com/photos/happy-business-owner-hanging-an-open-sign-at-a-cafe-picture-id1003743872?k=20&m=1003743872&s=612x612&w=0&h=oONFAiR-cW1nZhZRgicBe718HDXplzy2w-TBf1YnQog=" />
                </ImgContainer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div` 
    margin: 150px 20px 0px 20px;
    max-width: 100vw;
    height: 100%;
    background-color: ${ColorTheme.brandC};
    @media screen and (max-width: 960px) {
        height: 70%;
        max-width: 100vw;
    }
    @media screen and (max-width: 500px) {
        display:flex;
        flex-direction:column;
        margin: 100px 20px 0px 20px;
    }
        
}
    `
const Wrapper = styled.div`
    height: 400px;
    display: flex;
    contain:size;
    object-fit: contain;
    
`
const InfoContainer = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-family: 'Allerta Stencil';
    color: ${ColorTheme.brand1}
    @media screen and (max-width: 960px) {
        height:20%;  
    }
    @media screen and (max-width: 500px) {
        display:flex;
        flex-direction:column
    }
    
`
const Title = styled.div` 
    font-size: x-large;
    padding: 10px;
    @media screen and (max-width: 960px) {
        font-size: x-large;
   
    }
`
const SaleTitle = styled.div`
    font-size: xx-large;
    @media screen and (max-width: 960px) {
        font-size: xx-large;   
     }
    
`
const SmallText = styled.span`
    font-size: 50px;
`
const ButtonWrapper = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    
`
const Button = styled.button`
    padding: 15px 30px;
    margin-right:20px;
    cursor: pointer;
    background-color: ${props => props.color === "left" ? "#D3987A" : "#873920"};
    border-radius: 5px;
    @media screen and (max-width: 960px) {
        padding: 15px 30px;
        margin-right:20px;
        cursor: pointer;
        background-color: ${props => props.color === "left" ? "#D3987A" : "#873920"};
        border-radius: 5px;      
       }
`
const ImgContainer = styled.div` 
    flex: 2;
    display: flex;
    clip-path: polygon(38% 0%,100% 0%,100% 100%,5% 100%); 
    
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit: fill; 
    
    @media screen and (max-width: 960px) {
        width:100%;
        height:100%;
        object-fit: fill; 
       }
`

export default Announcement
