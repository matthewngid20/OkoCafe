import styled from "styled-components"
import video from "../assets/video.mp4"
import { ColorTheme } from "../ColorTheme";

const Container = styled.div` 
    position: relative;
    width:100%;
    height: ${props => props.height ? props.height : "100vh" };
    background-color:${ColorTheme.bg1};
    
    `
const Video = styled.video` 
    max-width:${props => props.width};
    opacity: 0.5;
    display: block;
    margin: 0 auto;
`
const VideoContainer = styled.div` 
    position:absolute;
    top:0;
    bottom: 0;
    margin: auto;
    z-index:100;
    overflow: hidden;
`
const VideoBG = ({width, height}) => {
    return (
        <Container height = {height}>
            <VideoContainer>
                <Video width = {width} autoPlay muted loop >
                    <source src={video} type='video/mp4' />
                    
                </Video>
            </VideoContainer>
        </Container>
    )
}

export default VideoBG