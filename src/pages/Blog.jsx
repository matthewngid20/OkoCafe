import styled from "styled-components"
import BlogSearch from "../components/BlogSearch"
import BlogBottom from "../components/Blog/BlogBottom"


const Container = styled.div`
  position: relative; 
  // background-color: rgba(0,0,0,0.8); 
  // background: linear-gradient(180deg, #211D1C 0%, rgba(33, 29, 28, 0) 49.29%); 

`
const Blog = () => {
  return (
    <Container>
      <BlogSearch />
      <BlogBottom />
    </Container>
  )
}

export default Blog
