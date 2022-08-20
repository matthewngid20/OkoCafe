import styled from "styled-components"

import blog1 from '../assets/blog1.jpeg'
import coffee1 from '../assets/coffee1.jpeg'


const Container = styled.div`
background-image: linear-gradient(#211D1C, #211D1C);
@media screen and (max-width: 500px) {
    margin: -7rem;
}
`


const Name = styled.h6`
width: 90%;
height: 250px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 54px;
display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    
    align-items: center;
    justify-content: center;
    font-size: 13px;


}


`

const Date = styled.p`=======

width: 386.82px;
height: 12px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
display: block;
align-items: center;

/* Brand 1 */

color: #F8E6DB;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

`

const Desc = styled.p`

width: 784px;
height: 160px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 32px;
/* or 178% */

display: flex;
align-items: center;
letter-spacing: 0.0012em;

/* White */

color: #FFFFFF;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width:60%;
    align-items: center;
    justify-content: right;
    font-size:11px;
    position:relative;
    left:100px;


    


}
`

const StaffImage = styled.image`
width: 50%;
height: 50%;
left: 336.01px;
top: 834px;
@media screen and (max-width: 960px) {

   
    width: 70%;
    align-items: center;
    justify-content: center;
    


}
`
const SecondTitle = styled.p`
width: 784px;
height: 43px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 43px;
display: flex;
align-items: center;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:12px;
    
   


}
`

const SmallTitle = styled.p`
width: 784px;
height: 32px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 0;

@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:12px;


}
`
const SecondDesc = styled.p`
width: 784px;
height: 280px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */

display: flex;
align-items: center;
letter-spacing: 0.0012em;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;

@media screen and (max-width: 960px) {

    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    font-size:10px;
    position:relative;
    left:100px;

}
`
const ThirdTitle = styled.p`
width: 784px;
height: 32px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:12px;
    

}
`
const ThirdDesc = styled.p`
width: 784px;
height: 364px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */

display: flex;
align-items: center;
letter-spacing: 0.0012em;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    font-size:12px;
    position:relative;
    left:100px;

}
`
const FourthTitle = styled.p`

width: 784px;
height: 32px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:15px;
    


}
`
const FourthDesc = styled.p`
width: 784px;
height: 308px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */

display: flex;
align-items: center;
letter-spacing: 0.0012em;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    font-size:10px;
    position:relative;
    left:100px;

}
`
const Coffee = styled.image`
@media screen and (max-width: 960px) {

    width:10%;
    position:relative;
    top:10px;

}
`
const QuestionTitle = styled.p`
width: 784px;
height: 43px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 43px;
display: flex;
align-items: center;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    font-size:15px;


}
`
const LastDesc = styled.p`
width: 784px;
height: 392px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 28px;
/* or 175% */

display: flex;
align-items: center;
letter-spacing: 0.0012em;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 60%;
    align-items: center;
    justify-content: center;
    position:relative;
    left:100px;
    font-size:12px;

}
`
const LastTitle = styled.p`

width: 784px;
height: 27px;
font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 27px;
/* identical to box height */
display: block;
align-items: center;
/* Brand 1 */
color: #F8E6DB;
/* Inside auto layout */
flex: none;
order: 0;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    


}
`

const FirstReads = styled.p`
width: 750px;
height: 25px;

font-family: 'SVN-Gilroy';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 140%;
/* or 25px */

display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`
const SecondReads = styled.p`
width: 750px;
height: 25px;

font-family: 'SVN-Gilroy';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 140%;
/* or 25px */

display: flex;
align-items: center;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`
const ThirdReads = styled.p`

width: 750px;
height: 25px;

font-family: 'SVN-Gilroy';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 140%;
/* or 25px */

display: flex;
//align-items: right;

/* Brand chuẩn */

color: #C8765A;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
}
`
const Admin = styled.p`

width: 200px;
height: 12px;

font-family: 'SVN-Gilroy';
font-style: italic;
font-weight: 500;
font-size: 16px;
line-height: 160%;
/* or 26px */

display: block;
align-items: center;
text-align: right;

/* Brand 1 */

color: #F8E6DB;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
@media screen and (max-width: 960px) {

    display: flex;
    width: 100%;
    
    justify-content: center;
}
`


const BlogTitle = ({ name, postion, desc, url, secondTitle, smallTitle,
    secondDesc, thirdTitle, thirdDesc, fourthTitle, fourthDesc, questionTitle,
    lastDesc, lastTitle, firstReads, secondReads, thirdReads, admin }) => {
    return (
        <Container>

            <Name>{name}</Name>
            {/* <Postion>{postion}</Position> */}
            <Desc>{desc}</Desc>
            <StaffImage><img src={blog1} height={300} width={558} left={336.01} top={834} />  </StaffImage>
            <SecondTitle>{secondTitle}</SecondTitle>
            <SmallTitle>{smallTitle}</SmallTitle>
            <SecondDesc>{secondDesc}</SecondDesc>
            <ThirdTitle>{thirdTitle}</ThirdTitle>
            <ThirdDesc>{thirdDesc}</ThirdDesc>
            <FourthTitle>{fourthTitle}</FourthTitle>
            <FourthDesc>{fourthDesc}</FourthDesc>
            <Coffee><img src={coffee1} height={300} width={558} right={340} top={2597} /></Coffee>
            <QuestionTitle>{questionTitle}</QuestionTitle>
            <LastDesc>{lastDesc}</LastDesc>
            <LastTitle>{lastTitle}</LastTitle>
            <FirstReads>{firstReads}</FirstReads>
            <SecondReads>{secondReads}</SecondReads>
            <ThirdReads>{thirdReads}</ThirdReads>
            <Admin>{admin}</Admin>

        </Container>
    )
}

export default BlogTitle