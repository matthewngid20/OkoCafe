import React from 'react'
import styled from "styled-components"
import DeleteSweepOutlinedIcon from '@mui/icons-material/DeleteSweepOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Checkbox from '@mui/material/Checkbox';

import { ColorTheme } from '../../ColorTheme';

const Container = styled.div` 
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

const CartDetails = () => {
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
                        <RowProd>
                            <Data> <Checkbox {...properties} /> </Data>
                            <Data>
                                <Img src="https://images.squarespace-cdn.com/content/v1/59a44aa2e6f2e1db4cbd5252/1584724680455-VZVCMZBHDS4F4JB808X2/Supernova+Killer+Acid-01.png?format=750w" />
                            </Data>
                            <Data> Supernatural </Data>
                            <Data> Natural Process Coffee | Guji, Ethiopia </Data>
                            <Data> $20 </Data>
                            <Data>
                                <ButtonData>
                                    <Button type="dec"> - </Button>
                                    <Amount> 2 </Amount>
                                    <Button type="inc"> + </Button>
                                </ButtonData>
                            </Data>
                            <Data >
                                <Icon >
                                    <DeleteSweepOutlinedIcon />
                                </Icon>
                            </Data>
                        </RowProd>
                        <RowProd>
                            <Data> <Checkbox {...properties} /> </Data>
                            <Data>
                                <Img src="https://images.squarespace-cdn.com/content/v1/59a44aa2e6f2e1db4cbd5252/1584724680455-VZVCMZBHDS4F4JB808X2/Supernova+Killer+Acid-01.png?format=750w" />
                            </Data>
                            <Data> Supernatural </Data>
                            <Data> Natural Process Coffee | Guji, Ethiopia </Data>
                            <Data> $20 </Data>
                            <Data>
                                <ButtonData>
                                    <Button type="dec"> - </Button>
                                    <Amount> 2 </Amount>
                                    <Button type="inc"> + </Button>
                                </ButtonData>
                            </Data>
                            <Data>
                                <Icon>
                                    <DeleteSweepOutlinedIcon />
                                </Icon>
                            </Data>
                        </RowProd>
                        <VoucherRow>
                            <Data colSpan={7}>
                                <VoucherContainer>
                                    <IconVoucher > <LocalOfferIcon />  </IconVoucher>
                                    <Voucher style ={{color: "white"}}> Voucher: </Voucher>
                                    <VoucherLink style ={{cursor: "pointer"}}> Select Voucher</VoucherLink>
                                </VoucherContainer>
                            </Data>
                        </VoucherRow>
                        <RowCheckOut>
                            <Data >  <Checkbox {...properties} />  </Data>
                            <Data align="left" >  SELECT ALL {3} </Data>
                            <Data align="right" colSpan={2} style ={{color: "white"}}> TOTAL: </Data>
                            <Data colSpan={1}> $50 </Data>
                            <Data colSpan={3}>
                                <CheckOutButton type="checkout" >CHECKOUT</CheckOutButton>
                            </Data>
                        </RowCheckOut>
                    </TableBody>
                </TableTop>
            </WrapperTop>
        </Container>
    )
}

export default CartDetails
