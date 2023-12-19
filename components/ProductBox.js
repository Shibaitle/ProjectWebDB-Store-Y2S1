import styled from "styled-components";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {CartContext} from "@/components/CartContext";

const ProductWrapper = styled.div`
  
`;

const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  margin:0;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:2px;
`;

const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;

export default function ProductBox({ _id, title, name, price, images, categoryId }) {
  const {addProduct} = useContext(CartContext);
  const [category, setCategory] = useState(null);

  /*
  useEffect(() => {
    // Fetch category details based on categoryId
    fetchProductDetails(categoryId) // Update this function
      .then((categoryData) => setCategory(categoryData))
      .catch((error) => console.error("Error fetching category details", error));
  }, [categoryId]);
  */

  const url = '/product/'+_id;
  
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={images?.[0]} alt=""/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            {price} THB
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            <CartIcon />
          </Button>
        </PriceRow>
        {category && <p>Category: {category.name}</p>}
      </ProductInfoBox>
    </ProductWrapper>
  );
}