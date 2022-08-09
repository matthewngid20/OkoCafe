import styled from "styled-components"
import BlogTitle from "../BlogTitle"

import { BlogTitles } from "../../FakeData"

const Container = styled.div` 
    margin: 3rem 0px;
    @media screen and (max-width: 960px) {
        
        
        padding:3em;
    }
    
`
const Wrapper = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`


const BlogDetails = () => {
    return (
        <Container>

            <Wrapper>
                {BlogTitles.map(item =>
                (<BlogTitle
                    name={item.name}
                    url={item.img}
                    autor={item.autor}
                    desc={item.desc}
                    secondTitle={item.secondTitle}
                    smallTitle={item.smallTitle}
                    secondDesc={item.secondDesc}
                    thirdTitle={item.thirdTitle}
                    thirdDesc={item.thirdDesc}
                    fourthTitle={item.fourthTitle}
                    fourthDesc={item.fourthDesc}
                    questionTitle={item.questionTitle}
                    lastDesc={item.lastDesc}
                    firstReads={item.firstReads}
                    secondReads={item.secondReads}
                    thirdReads={item.thirdReads}
                    admin={item.admin}

                />))}
            </Wrapper>
        </Container>
    )
}

export default BlogDetails
