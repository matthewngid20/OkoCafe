import styled from "styled-components";
import { story } from "../FakeData";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import { useEffect, useState } from "react";
import Stories from "./Stories";
import { ColorTheme } from "../ColorTheme";


const Container = styled.div` 
    width: 100%;
    height: 100vh;
    display: flex;
    background-color:${ColorTheme.bg1};
    position: relative;
    overflow: hidden;

`
const Intro = styled.div`
    position: absolute;
`
const Arrow = styled.div`
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0; 
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    opacity: 0.5;
    z-index:2;
`
const Wrapper = styled.div` 
    display: flex;
    height: 100%;
    padding-left: 100px;
    margin-top:20px;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
    /* overflow-y: auto;
    flex-direction: column; */
`
const Slide = styled.div` 
    display:flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    
`
const LeftColumn = styled.div` 
    flex:1;
`
const StoryNumber = styled.span` 
    font-size: 60px;
    color: #eee;
`
const Title = styled.h1` 
    color: #C8765A;
    font-weight: 500;
    font-size: 60px;
    font-family: "Abril Fatface";

`
const Desc = styled.p` 
    padding-right: 100px;
    color: white;
    font-size: 24px;
    font-weight: 300;
`
const Button = styled.button` 
    border: 1px solid white;
    background-color: transparent;
    color: #C8765A;
    font-size: 24px;
    padding: 10px;
    cursor: pointer;
`

const ImgContainer = styled.div` 
    flex:1;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 50px;


`
const Image = styled.img`   
    height: 50%;
    width: 70%;
    object-fit: cover;
    border-radius: 50% 50% 0 0;
`

const Slider = (props) => {
    useEffect(() => {
        
    
      return () => {
        
      }
    }, [props.data])
    
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        };
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}><ArrowBackIosOutlinedIcon /></Arrow>
            <Intro>
                <Stories/>
            </Intro>
            <Wrapper slideIndex={slideIndex}>
               {props.stories ? props.stories.map((item,index) => (
                    <Slide key = {index}>
                        <LeftColumn >
                            <StoryNumber>{item.storyid}</StoryNumber>
                            <Title>{item.title}</Title>
                            <Desc> {item.desc}</Desc>
                            <Button onClick={() => handleClick()}> View more </Button>
                        </LeftColumn>
                        <ImgContainer>
                            <Image src={item.imageurl} />
                        </ImgContainer>
                    </Slide>)): <h1>Loading</h1>}
               
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}><ArrowForwardIosOutlinedIcon style={{ backgroundColor: "white" }} /></Arrow>
        </Container>
    )
}


export default Slider
