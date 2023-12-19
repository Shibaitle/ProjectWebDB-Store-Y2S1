import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import {useContext, useEffect, useState} from "react";
import {CartContext} from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";
import ButtonLink from "@/components/ButtonLink";
import Footer from "@/components/Footer"
import Header from "./Header";

const Section =styled.section `
    height: auto;
    font-size: 1.5vw;
`;

const Txn_box = styled.div`
    display: flex;
    height: 80vh;
    padding:2%;
    justify-content: center;
`;

const Txn_info = styled.div`
    border: 2px solid black;
    width: 50%;
    background-color: white;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
    img{
        width: 100%;
        height: 40vh;
        object-fit: contain;
    }
`;


const Info_box = styled.div`
    height: 80%;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2{
      font-size: 1.5vw;
    }

    h3{
      font-size: 1.25vw;
    }
`;


const Option_Box = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    
    button {
        &:hover {
            cursor: pointer;
        }
    }
`;

const Confirm_btn = styled.button`
    font-weight: bold;
    font-size: 1.5vw;
    margin-top: 5vh;
    width: 20vw;
    border: 3px solid black;
    background-color: rgb(136, 250, 95);
`;

const Cancel_btn = styled.button`
    font-weight: bold;
    font-size: 1.5vw;
    margin-top: 5vh;
    width: 20vw;
    border: 3px solid black;
    background-color: rgb(245, 17, 17);
`;


const ItemList = styled.div`
    width:100%;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5vh 0 5vh 0;
    h3{
      padding:0 2vw 0 2vw;
      font-size: 1vw;
    }
`


export default function Payment(){
    const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
    const [products,setProducts] = useState([]);
    const [isSuccess,setIsSuccess] = useState(false);
    useEffect(() => {
      if (cartProducts.length > 0) {
        axios.post('/api/cart', {ids:cartProducts})
          .then(response => {
            setProducts(response.data);
          })
      } else {
        setProducts([]);
      }
    }, [cartProducts]);
    useEffect(() => {
      if (typeof window === 'undefined') {
        return;
      }
      if (window?.location.href.includes('success')) {
        setIsSuccess(true);
        clearCart();
      }
    }, []);
    async function goToPayment() {
      const response = await axios.post('/api/checkout', {
        name,email,city,postalCode,streetAddress,country,
        cartProducts,
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    }
    let total = 0;
    for (const productId of cartProducts) {
      const price = products.find(p => p._id === productId)?.price || 0;
      total += price;
    }

    function goBack(){
        history.go(-1);
    }

    return(
        <>
            <Section>
                    <Txn_box>
                        <Txn_info>
                            <Info_box>
                                <h1>User</h1>
                                <h2>รายชื่อเกมที่ซื้อ : 
                                  <ItemList>
                                    {products.map(product =>(
                                      <h3>{product.title}</h3>
                                        )
                                      )
                                    }
                                  </ItemList>
                                </h2>
                                <h3>คุณมีเงินทั้งหมด {} บาท</h3>
                                <h3>ราคาทั้งหมด : {total.toFixed(2)} บาท</h3>
                            </Info_box>
                            <Option_Box>
                                <Cancel_btn type="submit" onClick={() => goBack()}>ยกเลิก</Cancel_btn>
                                <Confirm_btn type="submit" onClick={goToPayment}>ยืนยัน</Confirm_btn>
                            </Option_Box>
                        </Txn_info>
                    </Txn_box>
            </Section>
        </>
    );
}