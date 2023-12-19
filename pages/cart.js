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

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const Section =styled.section `
    min-width:90%;
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
      width: 24%;
    }
`;
const Useroptions = styled.div`
    width: 70%;
    height: 5vh;
    margin-bottom: 5vh;
    display: flex;
    justify-content: space-between;
    button, a{
        width: auto;
        color: black;
        font-weight: bold;
        font-size: 1vw;
        border-radius: 20px;
        background-color: white;
    }
    `;

const Txn_box = styled.div`
    width: 70%;
    height: 10vh;
    margin-bottom: 5vh;
    display: flex;
    background-color: rgb(192, 190, 190);
    justify-content: space-between;
    padding-left: 2vw;
    align-items: center;
    *{
      font-size: 1.25vw;
    }
    a{
        width: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 5vh;
        margin-left:1vw;
        margin-right:1vw;
        border-radius: 20px;
        background-color: rgb(69, 255, 84);
    }
    `;



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

const List_Box = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:90%
`

const AddRemove = styled.div``
  ;


const EmptyBox = styled.div`
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    Button{
      font-size: 5vw;
    }
`;


export default function CartPage() {
  const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
  const [products,setProducts] = useState([]);
  /*
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  */
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
  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() { // former post : we dont need location in orders
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

  function removeAll(){
    if (confirm("Are you sure you want to remove all items?") == true){
      for (const productId of cartProducts) {
        removeProduct(productId);
      }
    }
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header />
        <Section>
              <List_order_box>
                <h1>รถของคุณ</h1>
                {!cartProducts?.length && (
                  <EmptyBox>
                    <div>Your cart is empty</div>
                    <ButtonLink href="/">กลับสู่หน้าเริ่มต้น</ButtonLink>
                  </EmptyBox>
                )}
                {products?.length > 0 && (
                    <List_Box>
                        <Indicate_Header>
                            <h1>ภาพสินค้า</h1>
                            <h1>ชื่อสินค้า</h1>
                            <h1>ราคา</h1>
                            <h1>จำนวน</h1>
                            <h1>แพลทฟอร์ม</h1>
                        </Indicate_Header>
                        <List_order_info>
                            {products.map(product => (
                              <Product_order>
                                  <div className="imgbox">
                                  <img src={product.images[0]} alt=""/>
                                  </div>
                                  <strong>{product.title}</strong>
                                  <strong>{cartProducts.filter(id => id === product._id).length * product.price} บาท</strong>
                                  <AddRemove>
                                    <Button onClick={() => lessOfThisProduct(product._id)}>-</Button>
                                    <QuantityLabel>
                                      {cartProducts.filter(id => id === product._id).length}
                                    </QuantityLabel>
                                    <Button
                                      onClick={() => moreOfThisProduct(product._id)}>+</Button>
                                  </AddRemove>
                                  <strong>Steam</strong>
                                  
                                </Product_order>
                            
                            ))}
                        </List_order_info>
                  
                  <Useroptions>
                    <ButtonLink href="/">เลือกดูสินค้าต่อ</ButtonLink>
                    <Button onClick={() => removeAll()}>Remove all items</Button>
                  </Useroptions>
                  <Txn_box>
                      <h1>รวม</h1>
                      <p>{total.toFixed(2)} บาท</p>
                      <ButtonLink href="/payment">ชำระเงิน</ButtonLink>
                  </Txn_box>
                  </List_Box>
                )}
              </List_order_box>
          </Section>
          <Footer/>
        </>
  );
}

/*
{products.map(product => (
                          <Product_order>
                            
                              
                              <img src={product.images[0]} alt=""/>
                              
                              {product.title}
                            
                            
                              <Button
                                onClick={() => lessOfThisProduct(product._id)}>-</Button>
                                {cartProducts.filter(id => id === product._id).length}
                              <Button
                                onClick={() => moreOfThisProduct(product._id)}>+</Button>
                            
                            
                              ${cartProducts.filter(id => id === product._id).length * product.price}
                            
                          </Product_order>
                        ))}
*/


/* ของเก่า
export default function CartPage() {
    const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);
    const [products,setProducts] = useState([]);
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [city,setCity] = useState('');
    const [postalCode,setPostalCode] = useState('');
    const [streetAddress,setStreetAddress] = useState('');
    const [country,setCountry] = useState('');
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
    function moreOfThisProduct(id) {
      addProduct(id);
    }
    function lessOfThisProduct(id) {
      removeProduct(id);
    }
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
  
    if (isSuccess) {
      return (
        <>
          <Header />
          <Center>
            <ColumnsWrapper>
              <Box>
                <h1>Thanks for your order!</h1>
                <p>We will email you when your order will be sent.</p>
              </Box>
            </ColumnsWrapper>
          </Center>
        </>
      );
    }
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h2>Cart</h2>
              {!cartProducts?.length && (
                <div>Your cart is empty</div>
              )}
              {products?.length > 0 && (
                <Table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt=""/>
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button
                            onClick={() => lessOfThisProduct(product._id)}>-</Button>
                          <QuantityLabel>
                            {cartProducts.filter(id => id === product._id).length}
                          </QuantityLabel>
                          <Button
                            onClick={() => moreOfThisProduct(product._id)}>+</Button>
                        </td>
                        <td>
                          ${cartProducts.filter(id => id === product._id).length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>${total}</td>
                    </tr>
                  </tbody>
                </Table>
              )}
            </Box>
            {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={ev => setName(ev.target.value)} />
              <Input type="text"
                     placeholder="Email"
                     value={email}
                     name="email"
                     onChange={ev => setEmail(ev.target.value)}/>
              <CityHolder>
                <Input type="text"
                       placeholder="City"
                       value={city}
                       name="city"
                       onChange={ev => setCity(ev.target.value)}/>
                <Input type="text"
                       placeholder="Postal Code"
                       value={postalCode}
                       name="postalCode"
                       onChange={ev => setPostalCode(ev.target.value)}/>
              </CityHolder>
              <Input type="text"
                     placeholder="Street Address"
                     value={streetAddress}
                     name="streetAddress"
                     onChange={ev => setStreetAddress(ev.target.value)}/>
              <Input type="text"
                     placeholder="Country"
                     value={country}
                     name="country"
                     onChange={ev => setCountry(ev.target.value)}/>
              <Button black block
                      onClick={goToPayment}>
                Continue to payment
              </Button>
            </Box>
          )}
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  */