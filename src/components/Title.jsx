import styled from "styled-components"
import { ColorTheme } from "../ColorTheme"

const Container = styled.div`
    font-size: 50px;
    color: ${ColorTheme.brandC};
    text-align: ${props => props.alignment};
    font-weight: 700;
    padding-bottom: 40px;
    font-family: "Abiral Fatface";
    background-color: ${ColorTheme.bg1};
    
`

const Title = ({title,alignment}) => {
    return (
        <Container alignment = {alignment}>
            {title}
        </Container>
    )
}

export default Title
