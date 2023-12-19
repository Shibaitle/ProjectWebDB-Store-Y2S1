import Header from "@/components/Header";
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

const Section =styled.section `
    height: auto;
    *{
      font-size: 1.5vw;
    }
`;

const List_order_box = styled.div`
    display: flex;
    height: 100%;
    padding:2%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{font-size: 1.75vw;}
`;

const List_order_info = styled.div`
    padding-top: 5vh;
    width: 100%;
    height: auto;
    display: flex;
    text-align: center;
    align-items: center;
    flex-direction: column;
`;


const Indicate_Header = styled.div`
    width: 100%;
    display: flex;
    padding: 5vh 0 2vh 0;
    h1{
    padding-left: 1vw;}
    *{
      width: 18%;
    }
`;

const List_Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90%
`
const Product_order = styled.div`
    width: 100%;
    height: 15vh;
    margin-bottom: 5vh;
    background-color: rgb(224, 222, 222);
    display: flex;
    align-items: center;
    padding:1vh;
    *{
        width 24%;
        padding-left:1vw;
        font-size: 1.2vw;
    }
    .imgbox{
      height : 100%;
    }

    img{
        height: 100%;
        width: 100%;
        object-fit: contain;
    }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;


export default function History(){
    const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
  const [products,setProducts] = useState([]);
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

    return (
        <>
            <Section>
                  <List_order_box>
                    <h1>รายการธุรกรรม</h1>
                    {products?.length > 0 && (
                        <List_Box>
                            <Indicate_Header>
                                <h1>ภาพสินค้า</h1>
                                <h1>ชื่อสินค้า</h1>
                                <h1>ราคา</h1>
                                <h1>จำนวน</h1>
                                <h1>แพลทฟอร์ม</h1>
                                <h1>วันที่</h1>
                                <h1>Key</h1>
                            </Indicate_Header>
                            <List_order_info>
                                {products.map(product => (
                                  <Product_order key={product._id}>
                                      <div className="imgbox">
                                        <img src={product.images[0]} alt=""/>
                                      </div>
                                      <strong>{product.title}</strong>
                                      <strong>{cartProducts.filter(id => id === product._id).length * product.price} บาท</strong>
                                        <QuantityLabel>
                                          {cartProducts.filter(id => id === product._id).length}
                                        </QuantityLabel>
                                        <strong>Steam</strong>
                                        <strong>12/12/2023</strong>
                                        <strong>HaHaha</strong>
                                      
                                    </Product_order>
                                
                                ))}
                            </List_order_info>
                      </List_Box>
                    )}
                  </List_order_box>
              </Section>
            </>
      );
}

/*

{products.map(product => (
                                  <Product_order>
                                      <div className="imgbox">
                                        <img src={product.images[0]} alt=""/>
                                      </div>
                                      <strong>{product.title}</strong>
                                      <strong>{cartProducts.filter(id => id === product._id).length * product.price} บาท</strong>
                                        <QuantityLabel>
                                          {cartProducts.filter(id => id === product._id).length}
                                        </QuantityLabel>
                                        <strong>{platform}</strong>
                                        <strong>{product_date}</strong>
                                        <strong>{cdkeys.cdkeys}</strong>
                                      
                                    </Product_order>
                                
                                ))}

*/