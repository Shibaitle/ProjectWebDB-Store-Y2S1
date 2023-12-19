import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import {useContext} from "react";
import {CartContext} from "@/components/CartContext";
import Footer from "@/components/Footer"
// import {Category} from "@/models/Category";

const Section =styled.section `
    height: auto;
`;

const Product_component = styled.div`
  display: flex;
  height: 100%;
  padding:2%;
  `;

const Product_pic = styled.div`
  height: 75vh;
  width: 35vw;
  margin: 2vh;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  `;

/*
.product-pic img{
  height: 50%;
  width: 90%;
  padding-top: 5vh;
  object-fit: cover;
}
*/

const H1box = styled.div``;


 const Product_info = styled.div`
  width: 60vw;
  height: 75vh;
  margin: 2vh;
  display: flex;
  flex-direction: column;
  padding: 2vh 0 0 3vw;
  .H1box{
    padding-top: 5vh;
    height: 15vh;
    width: 100%;
  }
  `;

const Product_interact = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  padding-top: 10vh;
`;


const Prod_genre = styled.div`
  display: flex;
  height: 5vh;
  width: 100%;
  *{
    padding: 0 1vw 0 0;
  }
`;


const Prod_description = styled.div`
  height: 35vh;
  width: 97.5%;
  word-wrap: break-word;
  padding-top: 10vh;
  `;

const Price = styled.span`
  font-size: 1.4rem;
`;

const Prod_price_amount = styled.div`
  height: 20vh;
  width: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  `;

const Prod_buy_options = styled.div`
  height: 20vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  button{
    margin: 0 5vw 2vw 0;
    border-radius: 0px;
    height: auto;
    width: 10vw;
  }
  `;

/*
.add-decrease{
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
}

.add-decrease *{
  margin-left: 1vw;
  height: auto;
  width: auto;
  border-radius: 0;
  text-align: center;
}

.add-decrease button{
  height: 1vh;
  display: flex;
  align-items: center;
}


.price-box{
  display: flex;
  height: 50%;
  align-items: center;
  justify-content: space-evenly;
}

.price-box *{
  margin-left: 1vw;
}






*/



export default function ProductPage({product}) {
  const {addToCart} = useContext(CartContext)
  return (
    <>
      <Header />
      <Section>
        <Product_component>
              <Product_pic>
                <ProductImages images={product.images} />
              </Product_pic>
              <Product_info>
                <Title>{product.title}</Title>
                <Product_interact>
                  <Prod_price_amount>
                    <Price>{product.price} บาท</Price>
                  </Prod_price_amount>
                  <Prod_buy_options>
                    <Button primary onClick={() => addToCart(product._id)} >
                      <CartIcon />เพิ่มขึ้นรถเข็น
                    </Button>
                  </Prod_buy_options>
                </Product_interact>
                <Prod_genre>
                  <h3>หมวดหมู่ : cat (เดี๋ยวหาวิธี Fetch category)</h3>
                </Prod_genre>
                <Prod_description>{product.description}</Prod_description>
              </Product_info>
            </Product_component>
      </Section>
      <Footer/>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const {id} = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}


/*
<Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
*/