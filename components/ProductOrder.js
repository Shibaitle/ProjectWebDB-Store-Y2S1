import styled from "styled-components"
import Button from "./Button";
const Product_order = styled.div`
    width: 100%;
    height: 15vh;
    margin-bottom: 5vh;
    background-color: gray;
    display: flex;
    align-items: center;
    gap: 8vw;
    padding:1vh;
    justify-content: space-between;
    *{
        padding-left: 1vw;
    }
    img{
        height: 14vh;
        width: 40%;
        object-fit: contain;
    }
`;


export default function ProductOrder(/*productName, productPic, price, amount, date, key*/ ){
    return (
        <Product_order>
            <img src="https://media.istockphoto.com/id/623911420/photo/opening-magazine-3d-illustration-cover-mock-up.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=Y8r6Qv59VnAhxuD03--StgayXWhaDceAdxIwtygORxs="/>
            <p>Name Example</p>
            <p>10.99 $</p>
            <p>1</p>
            <p>12/12/2023</p>
            <p>L36จ</p>
        </Product_order>
    );
}
