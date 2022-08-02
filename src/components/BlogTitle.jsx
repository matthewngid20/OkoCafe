import styled from "styled-components"

import blog1 from '../assets/blog1.jpeg'
import coffee1 from '../assets/coffee1.jpeg'
import { useState, useEffect } from 'react';

import { ColorTheme } from '../ColorTheme';

const Container = styled.div`
background-image: linear-gradient(#211D1C, #211D1C);
`

const Title = styled.h6`
width: 90%;
height: 300px;

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
`
const Author = styled.p`
width: 386.82px;

font-family: 'SVN-Gilroy';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 15px;
display: flex;
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
`



const StaffImage = styled.image`



width: 50%;
height: 50%;
left: 336.01px;
top: 834px;




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

`
const FourthTitle =styled.p`

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
`
const FourthDesc =styled.p`
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
`
const QuestionTitle  =styled.p`
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
`
const LastDesc =styled.p`
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
`
const LastTitle =styled.p`
width: 784px;
height: 27px;

font-family: 'Abril Fatface';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 27px;
/* identical to box height */

display: flex;
align-items: center;

/* Brand 1 */

color: #F8E6DB;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`

const FirstReads =styled.p`
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
`
const SecondReads =styled.p`
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
`
const ThirdReads =styled.p`

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
`
const Admin =styled.p`

width: 195.45px;
height: 12px;

font-family: 'SVN-Gilroy';
font-style: italic;
font-weight: 500;
font-size: 16px;
line-height: 160%;
/* or 26px */

display: flex;
align-items: center;
text-align: right;

/* Brand 1 */

color: #F8E6DB;


/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`
const InputSearch = styled.input`



`
const BlogTitle = () => {


    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
    }, [searchQuery])
    const getValue = (e) => {
        //console.log(e.target.value);
        setSearchQuery(e.target.value);
    }
    return (
        <Container>

            <Title>The 4 Different Types of Coffee Beans: A Complete Overview</Title>
            <Author>Bởi Tuyết Băng - Oct, 23 2021</Author>

            <Desc>If you’re an avid coffee drinker,
                you’ve probably wondered just how many different types of coffee beans there are and what makes them unique.
                We’ve got the answers! There are four different types of coffee beans: Arabica, Robusta, Liberica,
                and Excelsa. The most common (and popular) are Arabica and Robusta, but you might get
                lucky and run into the other two. Keep reading to learn all about these delicious beans,
                plus handy buying tips.</Desc>
            <StaffImage><img src={blog1} height={300} width={558} left={336.01} top={834} />  </StaffImage>
            <SecondTitle> 4 Different Types of Coffee Beans:</SecondTitle>
            <SmallTitle> 1.Arabica Coffee Beans (Coffea arabica)</SmallTitle>

            <SecondDesc>Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee.
                These tasty beans originated many centuries ago in the highlands of Ethiopia,
                and may even be the first coffee beans ever consumed! The name Arabica likely comes from the beans’
                popularity in 7th-century Arabia (present-day Yemen). The downside of Arabica beans is that they’re harder to grow.
                Because of this, Arabica beans are pricier. All coffee beans grow in the so-called Bean Belt,
                an area between the Tropics of Cancer and Capricorn, in 50 countries around the world.
                But Arabica beans need extra shade, water, and high altitude to grow properly.
                These plants are more susceptible to plant diseases and must be grown at an altitude of at least 2,000 feet.
                They’re also smaller plants, measuring between 8 and 15 feet when fully grown. </SecondDesc>

            <ThirdTitle>2.  Robusta Coffee Beans (Coffea caniphora)</ThirdTitle>
            <ThirdDesc>The second most popular type of coffee bean is Robusta. This bean originated in sub-Saharan Africa and is now grown primarily in Africa and Indonesia.
                It’s also particularly popular in Vietnam and is often mixed into coffee blends. 
                It’s a less expensive variety, making it a very budget-friendly choice for roasters. Robusta beans are larger and more rounded than the other bean varieties. 
                These plants typically grow much larger than Arabica plants, measuring between 15 and 20 feet. Robusta beans are typically considered to be hardier because they can grow at lower altitudes and resist diseases. 
                But recent research suggests that they don’t handle heat as well as was previously thought. What do they taste like? Many people think that Robusta coffee is harsher and more bitter.
                 It often has a strong smell and a somewhat flat, almost burnt taste. Robusta beans also have significantly more caffeine than Arabica beans.</ThirdDesc>

                  <FourthTitle>3. Liberica Coffee Beans (Coffea liberica)</FourthTitle>  
                  <FourthDesc>Native to central and western Africa – specifically Liberia, hence its name – 
                    Coffea liberica is prized for its piquant floral aroma and bold, smoky flavor profile. 
                    This hardy species is frequently mixed with other varieties to add body and complexity,
                     but rarely receives any credit. Unheard of in Western civilization before the late 1800s, 
                     Liberica gained a foothold with Southeast Asian coffee producers after a fungal disease (“coffee rust”) wiped out much of the region’s Arabica crops. 
                     Growing from a much larger plant than Arabica or Robusta, most Liberica cherries tend to be irregular in shape and closer to Robusta in size 
                     and general appearance. It’s also tolerant of hot, humid climates and does well at low altitude. Now produced mainly in Indonesia, 
                     Malaysia, and the Philippines, the bean makes up roughly 2% of the world’s coffee supply. Over 95% percent of the Malaysian coffee yield is Liberica beans. However, 
                     it’s not commonly found in North American and European markets. </FourthDesc>

                     <img src={coffee1} height={300} width={558} right={340} top={2597} />

                    <QuestionTitle>What Kind of Coffee Bean Should You Choose?</QuestionTitle>
                    <LastDesc>Now that you’re familiar with the major types of coffee beans, it’s time to start shopping! If you want the best possible flavor and don’t mind paying a little extra, look for coffee that’s 100% Arabica. Prefer extra caffeine, want to save money, and don’t mind a little bitterness? Go for a bag of Robusta or a blend of Arabica and Robusta.

If you’d rather have something unusual, look for Liberica or Excelsa beans — but be prepared for a more extensive search! These rare coffee beans can be delicious but hard to find.

As always, we recommend buying whole bean coffee and grinding it just before brewing. The extra effort is well worth it, as you’ll get significantly better flavor and freshness, no matter which type of coffee bean you choose. By the way, do you know where coffee beans come from?

Also if drinking coffee causes acidity for you, you can opt for low acid coffee that is perfect for sensitive stomachs. Check out this guide from Sip Coffee House for some good options.</LastDesc>

  <LastTitle>RELATED READS:</LastTitle>
             <FirstReads>17 Smart Uses for Used Coffee Grounds</FirstReads>
             <SecondReads>Which is our favorite Keurig brewer for office use?</SecondReads>
             <ThirdReads>What are the 22 types of coffee drinks?</ThirdReads>
             <Admin>Author: Admin</Admin>
            
        </Container>
    )
}

export default BlogTitle
