import styled from "styled-components"
import { useState } from "react";

import { ColorTheme } from "../../ColorTheme";

const Container = styled.div`
    display: flex; 
    position: relative;
    flex-direction:column;
    overflow: hidden;
    position: relative;
    object-fit: contain;
    background-color: ${ColorTheme.bg1};
`



const RelatedBlogs = ({ item }) => {

    return (
        <Container>
          
        </Container>
    )
}

export default RelatedBlogs