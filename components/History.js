import styled from "styled-components";
import ProductOrder from "./ProductOrder";

const Section =styled.section `
    height: auto;
`;

const List_order_box = styled.div`
    display: flex;
    height: 100%;
    padding:2%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`;

const List_order_info = styled.div`
    padding-top: 5vh;
    width: 80%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
`;


const Indicate_Header = styled.div`
    width: 80%;
    display: flex;
    padding: 5vh 0 2vh 5vw;
    justify-content: space-between;
    h1:first-child{
    padding-right: 2vw;}
`;

export default function History(){
    return(
        <Section>
            <List_order_box>
                <h1>รายการสั่งซื้อ</h1>
                <Indicate_Header>
                    <h1>ภาพสินค้า</h1>
                    <h1>ชื่อสินค้า</h1>
                    <h1>ราคา</h1>
                    <h1>จำนวน</h1>
                    <h1>วันที่ซื้อ</h1>
                    <h1>รหัส</h1>
                </Indicate_Header>
                <List_order_info>
                    <ProductOrder></ProductOrder>
                    <ProductOrder></ProductOrder>
                    <ProductOrder></ProductOrder>
                    <ProductOrder></ProductOrder>
                </List_order_info>
          </List_order_box>
        </Section>
    );
}