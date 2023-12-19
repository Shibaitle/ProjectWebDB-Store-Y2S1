import styled from "styled-components";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const Title = styled.h2`
  font-size: 2rem;
  margin:30px 0 20px;
  font-weight: normal;
`;

export default function NewProducts({products}) {

  // Pop until only 4 new elements (games) to be displayed
  let render = products?.length;
  while (render > 0){
    if (render > 4){
      products.pop();
    }
    render--
  }

  return (
    <Center>
      <Title>New Arrivals</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}



  /*
  let render = products?.length;
  let productTable = ""
  products.map(product =>{
    render-=1;
    if (render < 4)(
      productTable += "<ProductBox key={" + product._id + "} {..." + product + "}/>  ")
      render--
    })
    */