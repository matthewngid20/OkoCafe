import styled from "styled-components"
import { ColorTheme } from "../ColorTheme"
import SubTitle from "./SubTitle"
import Title from "./Title"
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Container = styled.div`
    padding: 5rem 15rem;
    display: flex;
    justify-content: space-between; 
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    padding: 0 5rem;
`
const Headliner = styled.h1`    
    color: ${ColorTheme.brandC};
    font-size: 42px;
    font-weight: 400;
    font-family: Abril Fatface;
`
const White = styled.span`
    color: ${ColorTheme.brand1};
    display: inline;
    margin: 0;   
`
const LocationContainer = styled.div`
    margin-top: 2em;
`
const Row = styled.address`
    padding:1em;
    display: flex;
    align-items: center;
    border-top: 2px solid pink;
    border-bottom: 2px solid pink;
`
const Email = styled.a`
    :link{
        color: ${ColorTheme.brand2};
    };
    margin-left: 1em;
`
const Text = styled.span`
    color: ${ColorTheme.brand2};
    margin-left: 1em;
`
const Right = styled.div`
    flex: 1;
    border: 1px solid rgba(211, 152, 122, 0.5);
    align-self: center;
    padding:3em;
    background: ${ColorTheme.bg1};
`
const FormInfo = styled.form`
    display: flex;
    flex-direction: column;
`
const FormTitle = styled.h1`
    color: ${ColorTheme.brand1};
`
const Input = styled.input`
    min-width: 80%;
    padding: 1em;
    background: rgba(249, 244, 241, 0.08);

`
const Label = styled.label` 
    color: ${ColorTheme.brand2};
    padding: 1em 0 0 0;
`
const TextArea = styled.textarea` 
    min-width: 80%;
    padding: 1em;
    background: rgba(249, 244, 241, 0.08);
`

const ButtonContainer = styled.div` 
    display:flex;
    justify-content: flex-end;
    margin-top: 2rem; 
`
const Button = styled.button` 
    display: block;
    align-self: right;
    background: ${ColorTheme.brand3};
    width: 30%;
    padding: 1em;
    color: ${ColorTheme.brand1};
    cursor: pointer;
`
const ContactForm = () => {
    return (
        <Container>
            <Left>
                <Headliner>"Be Inspired by What you see? "
                    <White> Let’s talk about your Project.</White>
                </Headliner>
                <SubTitle size="0px" width="100%" description="Contact us immediately for consulting solutions for your products:" />
                <LocationContainer>
                    <Row>
                        <AddLocationOutlinedIcon style={{ color: "white" }} />
                        <Text> No. 1, 33 Alley, 82 Lane, Phu Do Ward, Nam Tu Liem District, Hanoi</Text>
                    </Row>
                    <Row>
                        <PhoneOutlinedIcon style={{ color: "white" }} />
                        <Text> 08 6989 3002</Text>
                    </Row>
                    <Row>
                        <MailOutlineIcon style={{ color: "white" }} />
                        <Email href="mailto:hotro@pdsolution.com.vn"> hotro@pdsolution.com.vn</Email>
                    </Row>
                </LocationContainer>
            </Left>
            <Right>
                <FormInfo>
                    <FormTitle>Contact Information</FormTitle>
                    <Label> Your name (*) </Label>
                    <Input />
                    <Label>  Phone number (*) </Label>
                    <Input />
                    <Label> Your email (*) </Label>
                    <Input />
                    <Label> Leave a Message </Label>
                    <TextArea />
                    <ButtonContainer>
                        <Button> SUBMIT</Button>
                    </ButtonContainer>
                </FormInfo>
            </Right>

        </Container>
    )
}

export default ContactForm
