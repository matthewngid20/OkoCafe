import styled from "styled-components"
import { ColorTheme } from "../../ColorTheme"

const Container = styled.div` 
    background-color: ${ColorTheme.bg1};
    margin: 0 auto ;
   
    
`
const BlogContainer = styled.div`
    display: flex;
    flex: 1;
`
const h2 = styled.div`

 display:flex;
`

const BlogDetails = ({prod}) => {
    return (
        <Container>
           <BlogContainer>

           </BlogContainer>
        </Container>

    )
}

export default BlogDetails