import React from 'react'
import styled from "styled-components"
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Checkbox from '@mui/material/Checkbox';

import { ColorTheme } from '../../ColorTheme';
import { Context } from '../../App';
import { useContext } from 'react'
import StripCheckOut from 'react-stripe-checkout'
const CartDetails = () => {
    const dataContext = useContext(Context)
    const cartItems = JSON.parse(dataContext[2]);
    console.log(cartItems);
    var price = 0;

    return (
        <Container>
            <WrapperTop>
                <TableTop>
                    <TableBody>
                        <Row>
                            {/* <TableTitle >
                                <Checkbox {...properties} />
                            </TableTitle> */}
                            <TableTitle>            </TableTitle>
                            <TableTitle> PRODUCT NAME </TableTitle>
                            <TableTitle> DESCRIPTION </TableTitle>
                            <TableTitle> PRICE </TableTitle>
                            <TableTitle> QUANTITY  </TableTitle>
                        </Row>

                        {cartItems ? cartItems.map((item, index) => {
                            return (
                                <RowProd key={index}>
                                    <Data> <Checkbox {...properties} /> </Data>
                                    <Data>
                                        <Img src={item.img} />
                                    </Data>
                                    <Data> {item.name} </Data>
                                    <Data>{item.desc} </Data>
                                    <Data> ${item.price} </Data>
                                    <Data>
                                        <ButtonData>
                                            <Button type="dec"> - </Button>
                                            <Amount> {cartItems.length} </Amount>
                                            <Button type="inc"> + </Button>
                                        </ButtonData>
                                    </Data>
                                    <Data >
                                        <Icon >
                                            <DeleteSweepOutlinedIcon />
                                        </Icon>
                                    </Data>
                                </RowProd>
                            )
                        }) : null}
                        <VoucherRow>
                            {/* <Data colSpan={7}>
                                <VoucherContainer>
                                    <IconVoucher > <LocalOfferIcon />  </IconVoucher>
                                    <Voucher style={{ color: "white" }}> Voucher: </Voucher>
                                    <VoucherLink style={{ cursor: "pointer" }}> Select Voucher</VoucherLink>
                                </VoucherContainer>
                            </Data> */}
                        </VoucherRow>
                        <RowCheckOut>
                            <Data >  <Checkbox {...properties} />  </Data>
                            <Data align="left" >  SELECT ALL {cartItems.length} </Data>
                            <Data align="right" colSpan={2} style={{ color: "white" }}> TOTAL: </Data>
                            <Data colSpan={1}> {cartItems.map((item, key) => {
                                price += parseInt(item.price)
                            })} ${price} </Data>
                            <Data colSpan={3}>
                                <CheckOutButton onClick={() => alert("Payment")}  >CHECKOUT</CheckOutButton>
                            </Data>
                        </RowCheckOut>
                    </TableBody>
                </TableTop>
            </WrapperTop>
        </Container>
    )
}

const Container = styled.div`
    margin-top:100px; 
    background: #211D1C;
    font-weight: 300;
    padding: 3em;
    color: ${ColorTheme.brandC};
   
`
const WrapperTop = styled.div`
    width: 100%;
    margin-bottom: 1em;
`
const TableTop = styled.table`
    width: 100%;
    border-collapse: collapse;
`
const TableBody = styled.tbody`
@media screen and (max-width: 1050px) {
        
    position:relative;
    right:75px;
    font-size: 15px;
    top:50px;
         
     }
`
const Row = styled.tr.attrs({

})`
    border-bottom: 1px solid rgba(	211,152,122,0.3);
`
const RowCheckOut = styled.tr`
    border-bottom: 2mm ridge ${ColorTheme.brandC};
    border-left: 2mm ridge ${ColorTheme.brandC};
    border-right: 2mm ridge ${ColorTheme.brandC};

`
const RowProd = styled(Row)`

`
const VoucherRow = styled.tr`
    border-top: 2mm ridge ${ColorTheme.brandC};
    border-left: 2mm ridge ${ColorTheme.brandC};
    border-right: 2mm ridge ${ColorTheme.brandC};
`
const TableTitle = styled.th`
    padding: 8px;
`

const Data = styled.td.attrs({
})`
    padding: 8px;
    text-align: center;
    text-align: ${props => props.align === "right" && "right"};
    text-align: ${props => props.align === "left" && "left"};
    
`
const Img = styled.img`
    max-width: 100px;
`
const ButtonData = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
   
`
const Button = styled.button`
    padding:6px 10px;
    background-color: ${props => props.type === "inc" ? "#C8765A" : "transparent"};
    border: 1px solid #C8765A;
    color: white;
    cursor: pointer;
   
`
const CheckOutButton = styled.button`
    cursor: pointer;
    padding: 10px;
    width: 100%;
    background-color: ${ColorTheme.brand3};
    @media screen and (max-width: 1050px) {
        
        position:relative;
        right:200px;
        font-size: 15px;
        top:30px;
             
         }
`
const Amount = styled.div`
    margin: 0 10px;
`
const VoucherContainer = styled.div`
    display: flex;
    justify-content: flex-end;`
const Icon = styled.div`
   
    cursor: pointer;
`
const IconVoucher = styled.div`
    cursor: pointer;
    margin-right:1em;
`
const Voucher = styled.div`
    margin-right:3em;
`
const VoucherLink = styled.a`
    text-decoration: underline;
`
const properties = {
    sx: {
        '& .MuiSvgIcon-root':
            { fontSize: 30 },
        color: "white",
        '&.Mui-checked': {
            color: "#C8765A",
        },
    }
}

export default CartDetails
