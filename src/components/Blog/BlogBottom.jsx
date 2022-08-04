import styled from "styled-components"
import BlogImage from "../BlogImage"
import { Pagination } from "@mui/material";

import { Blogs } from "../../FakeData"


const Container = styled.div` 
    margin: 3rem 0px;
`
const Wrapper = styled.div` 
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
const PaginationContainer = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`

const BlogBottom = () => {
    return (
        <Container>
            <Wrapper>
                {Blogs.map((item,key) =>
                (<BlogImage key = {item.id}
                    subject={item.subejct}
                    url={item.img}
                    fullName={item.name}
                    position={item.position} />))}
            </Wrapper>
            <PaginationContainer>
                <Pagination color="secondary" count={7} shape="rounded" />
            </PaginationContainer>
        </Container>
    )
}

export default BlogBottom