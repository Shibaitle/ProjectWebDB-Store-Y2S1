import Header from "@/components/Header";
import Payment from "@/components/Payment";
import Footer from "@/components/Footer"
import Head from "next/head";

export default function ShowPayment() {
  return (
    <>
      <Head>
        <title>Payment</title>
      </Head>
        <Header />
        <Payment />
        <Footer/>
    </>
  );
}