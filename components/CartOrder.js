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



export default function CartProduct(productName, productPic, price, amount){
    return (
        <Product_order>
            <img src={productPic}/>
            <p>{productName}</p>
            <p>{price} บาท</p>
            <p>{amount}</p>
            <Button>+</Button>
            <Button>-</Button>
        </Product_order>
    );
}