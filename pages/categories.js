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
import { Platform } from "@/models/Platform";
import { useRef, useState } from "react";
import { useRouter } from "next/router";



const Queries_box = styled.div`
  display: flex;
  margin:0 auto;
  height: 100%;
  max-width: 90%;
  padding: 3vh 0 3vh 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  div{
    display: flex;
    width:  100%;
    justify-content: space-around;
    align-items: center;
    label{
      padding: 0vh 2vw 0vh 2vw;
      width:50%;
      display: flex;
      text-wrap: nowrap;
      font-size: 1.5vw;
      font-weight: bold;
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
  width: 50%;
  height:100%;
  `; 

const Select = styled.select`
  width:100%;
  font-size: 1.0vw;
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

export default function CategoryPage({products, platforms}) {

  const [platform, setPlatform] = useState("");

  const searchCategory = async (e) =>{
    /*
    if (platform !== "All"){
      const newProduct = await Product.find({category, platform}, null, {sort:{'_id':-1}});
      newProduct: JSON.parse(JSON.stringify(newProduct));
    }
    
    Can't function as designed in time, pause to be sure another parts done in time
    */ 
  }


  return (
    <>
      <Header />
      <Center>
        <Queries_box>
        <h1>เกมในร้านค้า</h1>
        <div>
          <Game_genre_box>
            <label htmlFor="games-genre">Platform</label>
            <Select id="games-genre" name="games-genre">
              {platforms.map(platform => 
                (<option key={platform._id} value={platform._id}>{platform.name}</option>))
              }
            </Select> 
          </Game_genre_box>
        </div>
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
  const platforms = await Platform.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
      platforms: JSON.parse(JSON.stringify(platforms))
    }
  };
}

