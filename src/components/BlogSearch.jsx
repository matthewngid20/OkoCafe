import styled from "styled-components"

import { useState, useEffect } from 'react';

import { ColorTheme } from '../ColorTheme';
import './header.css';
import { Blogs } from '../FakeData';
import { Subject } from "@mui/icons-material";


const Container = styled.div` 

`


const InputSearch = styled.input`
border: 0 solid ${ColorTheme.brandC} ;

width: 30%;
height: 30px;
left: 0px;
top: 206px;
background: #D3987A;



`
const DropDown = styled.div`
    position: center;
    margin-top: 10px;
    right: 100px;
    display: ${props => (props.display) ? true : "none"};
    
`
const Decoration = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    top: -5px;
    right: 50px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${ColorTheme.brand1};
`
const BlogList = styled.div`
    min-width: 300px;
    padding: 1rem;
    position:relative;
    list-style-type: none;
    z-index: 2;
    background-color: ${ColorTheme.brand1};
    box-shadow: 0px 8px 16px 0px ${ColorTheme.brandC};
`
const ItemContainer = styled.div`
    display:flex;
    cursor: pointer;
    border-bottom: 2px solid ${ColorTheme.brand2};
`
const ImgContainer = styled.div`
    max-width: 70px;
`
const Img = styled.img`
    width: 100%;
`

const ItemInfo = styled.div`
    

`
const ItemName = styled.li`
    color: black;
    text-transform: uppercase;
`
const Desc = styled.div`
    color: #0B2C4A;
    font-weight: 200;
`
const Price = styled.div`
    color: ${ColorTheme.brandC};
`





const BlogSearch = () => {


    const [searchQuery, setSearchQuery] = useState("");
    useEffect(() => {
    }, [searchQuery])
    const getValue = (e) => {
        //console.log(e.target.value);
        setSearchQuery(e.target.value);
    }
    return (


        <Container>

            <div className="gpt3__header section__padding" id="home">
                <div className="gpt3__header-content">
                    <h1 className="gradient__text"></h1>
                    <p>Everything  about coffee</p>
                    <h2>Learn all about authentic and strong coffee with us</h2>
                    <InputSearch placeholder="Search" onChange={(e) => getValue(e)} />
                    <DropDown display={searchQuery}>
                        <BlogList>
                            <Decoration></Decoration>
                            {Blogs.map((blog) => (
                                <ItemContainer key={blog.id}>
                                    <ImgContainer>
                                        <Img src={blog.img} />
                                    </ImgContainer>
                                    <ItemInfo>
                                        <ItemName> {blog.name} </ItemName>
                                        <Desc> {blog.position} </Desc>
                                        <Subject> $ {blog.subejct} </Subject>
                                    </ItemInfo>
                                </ItemContainer>

                            ))}
                        </BlogList>
                    </DropDown>
                </div>
            </div>


        </Container>




    )
}

export default BlogSearch
