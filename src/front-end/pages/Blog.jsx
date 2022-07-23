import NavBar from "../components/Main/NavBar"
import styled from "styled-components"
import Footer from "../components/Main/Footer"
import BlogSearch from "../components/BlogSearch"
import BlogBottom from "../components/Blog/BlogBottom"


const Container = styled.div`


background-image: linear-gradient(#211D1C, #211D1C);

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
