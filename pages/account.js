import Header from "@/components/Header";
import UserInfo from "@/components/UserInfo";
import Footer from "@/components/Footer"

export default function Profile() {
  return (
    <>
        <Header />
        <UserInfo />
        <Footer/>
    </>
  );
}

/*

export async function getServerSideProps() {
  await mongooseConnect();
  const products = await Product.find({}, null, {sort:{'_id':-1}});
  return {
    props:{
      products: JSON.parse(JSON.stringify(products)),
    }
  };
}

*/