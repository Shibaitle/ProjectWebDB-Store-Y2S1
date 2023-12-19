import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import {mongooseConnect} from "@/lib/mongoose";
import {Product} from "@/models/Product";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import Footer from "@/components/Footer"
import Input from "@/components/Input";
import Button from "@/components/Button";
import { Category } from "@/models/Category";


const Queries_box = styled.div`
  display: flex;
  margin:0 auto;
  height: 100%;
  max-width: 90%;
  padding: 2vh 0 2vh;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  form{
    display: flex;
    width:  100%;
    justify-content: space-around;
    align-items: center;
    label{
      padding: 0vh 2vw 0vh 2vw;
    }
    button{
      justify-content: center;
      height: 5vh;
      display: flex;
      align-items: center;
      background-color: rgb(215, 248, 248);
    }
  }
`;

const Game_genre_box = styled.div`
  display: flex;
  padding: 3vw;
  `; 

const Select = styled.select`
  max-width:100%;
`;

/*
form label{
  padding: 0vh 2vw 0vh 2vw;
}

form button, a button{
  justify-content: center;
  height: 5vh;
  display: flex;
  align-items: center;
  background-color: rgb(215, 248, 248);
}
*/

export default function ProductsPage({products, categories}) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <Queries_box>
        <h1>เกมในร้านค้า</h1>
        <form>
          <Game_genre_box>
            <label for="games-genre">แนวเกม</label>
            <Select id="games-genre" name="games-genre" placeholder="แนวเกม">
              {categories.map(category => 
                (<option value={category.name}></option>))
              }
            </Select>
          </Game_genre_box>
          <Button type="submit" class="search-btn">Search</Button>
        </form>
      </Queries_box>
        <ProductsGrid products={products} />
      </Center>
      <Footer/>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}