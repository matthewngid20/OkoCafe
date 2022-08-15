import styled from "styled-components"

const Container = styled.div`
@media screen and (max-width: 1050px) {
    
        flex-direction: column;
         margin: 0 0 3rem;
    
}

    
   
`
const Intro = styled.div`
    text-align: center;
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    @media screen and (max-width: 1050px) {
       
        flex-direction: column;
        margin: 0 0 3rem;
    }
`
const Title = styled.h1`
    margin:5px 0px;
    font-size: 50px;
    font-weight: 400;
    color: #C8765A;
    @media screen and (max-width: 1050px) {
       
        margin:5px 0px;
        font-size: 40px;
        font-weight: 400;
        color: #C8765A;
        
   
    }
`
const Desc = styled.p`
    width:60%;
    font-size: 20px;
    align-self:center;
    font-weight: 300;
    color: #F8E6DB;
    word-spacing: 3px;
    @media screen and (max-width: 1050px) {
        
     flex-direction: column;
     margin: 0 0 3rem;
     font-size: 15px;
     padding:7em;

        
    }
`


const Stories = () => {
    return (
        <Container>
            <Intro>
                <Title>Our Story</Title>
                <Desc>The story began in the early morning, 5 o'clock. A guy was doing his routine
                    half-asleep, put some coffee through the
                    He was so lucky to have one that was so vibrant and delightful it smoothly
                    put a smile on his face, and he felt tremendous excitement, he realized that
                    he could make others' days.</Desc>
            </Intro>
        </Container>
    )
}

export default Stories
