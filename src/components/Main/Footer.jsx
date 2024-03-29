import styled from "styled-components"
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { ColorTheme } from "../../ColorTheme";

import { react, useState } from 'react';

import {
    NavLink
} from "react-router-dom";

const Footer = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const links = [
        { name: "Home", to: "/" },
        { name: "Shop", to: "/shop" },
        { name: "About", to: "/aboutUs" },
        { name: "Blog", to: "/blog" },
        { name: "Contact", to: "/contact" },
    ]
    return (
        <Container>
            <TopFooter>
                <LogoContainer>
                    <Logo>Smooth Curve</Logo>
                </LogoContainer>
                {screenWidth > 500 ?
                    ( links.map((link, index) => {
                        return (
                            (<NavLink className="nav-bar-link" to={link.to} key={index}> {link.name} </NavLink>))
                    }) )
                    : null
                }

                <SearchBox>
                    <Input placeholder="Your email" />
                    <Button>SUBSCRIBE</Button>
                </SearchBox>
            </TopFooter>
            <Hr />
            <BottomFooter>
                <LanguageContainer>
                    <Language langague="en"> EN  </Language>
                    <Language langague="vn"> VN  </Language>
                </LanguageContainer>
                <SocialContainer>
                    <Icon color="3B5998"><FacebookIcon style={{ fontSize: 22, color: "white" }} /> </Icon>
                    <Icon color="E4405F"><InstagramIcon style={{ fontSize: 22, color: "white" }} /></Icon>
                    <Icon color="FF0000"> <YouTubeIcon style={{ fontSize: 22, color: "white" }} /></Icon>
                </SocialContainer>
                <AuthContainer>
                    <AuthButton> SIGNUP </AuthButton>
                    <Vr />
                    <AuthButton> LOGIN  </AuthButton>
                </AuthContainer>
            </BottomFooter>
        </Container>
    )
}
const Container = styled.div`
    background-color:${ColorTheme.bg1};
    opacity: 0.95;
    width: 100%;
    max-height:20vh;
    /* position: absolute;
    bottom:0; */
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        width: 100%;
    }
    // @media screen and (max-width: 500px) {
    //     position: fixed;
    //     bottom: 0;
    // }

`
const TopFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 960px) {
        flex-direction: column;
        padding:-5em;
        font-size:10px;
       }
    
    
`
const LogoContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
   
`
const Logo = styled.div`
    width: 120px;
    height: 120px;
    border-radius:50%;
    cursor: pointer;
    border: 1px solid #C8765A;
    color: ${ColorTheme.brandC};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 960px) {
        height: 20px;    
    }
    @media screen and (max-width: 500px) {
        height: 50px;    
        width: 50px;
        margin-bottom:20px;
    }
    `
const SearchBox = styled.div`
    flex: 2;
    width: 30%;
    display: flex;
    justify-content: center;
    margin-right:50px;
    align-items: center;
    //border: 1px black solid;
    @media screen and (max-width: 500px) {
        margin-right:0px;
    }
   
`
const Input = styled.input`
    border: 1px solid #D3987A;
    padding: 10px 30px 10px 5px;
    background: rgba(249, 244, 241, 0.08);
`
const Button = styled.button`
    padding: 10px;
    background-color: ${ColorTheme.brand2};
    color: white;
    cursor: pointer;
   
`
const Hr = styled.hr` 
    border: 3px solid ${ColorTheme.brand2}; 
    width: 90%;
    display: flex;
    opacity: 0.2;
`
const BottomFooter = styled.div` 
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${ColorTheme.bg1};
    padding: 1rem 0;
   
    @media screen and (max-width: 960px) {      
        flex-direction: column;
		width: 100%;
        font-size: 15px;
    }
    @media screen and (max-width: 500px) {      
        display:none;
    }

`
const LanguageContainer = styled.div` 
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
const Language = styled.div`
    cursor: pointer;
    margin: 0px 20px;
    color: ${ColorTheme.brand1};  
    opacity: ${props => props.langague === "en" ? "1" : "0.7"};
`
const SocialContainer = styled.div` 
    flex: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
const Icon = styled.div` 
    margin: 0px 10px;
    cursor: pointer;
`
const AuthContainer = styled.div` 
    flex: 2;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Vr = styled.div` 
    border-left: 3px solid white;
    height: 20px;
`
const AuthButton = styled(Button)` 
    margin: 0px 20px;
    border: none;
    font-weight: 500;
    background-color: transparent;
    cursor: pointer;
    color: ${ColorTheme.brand1}; 
`
export default Footer
//Comment to commit