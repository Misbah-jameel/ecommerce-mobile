// import Image from "next/image";
import Header from "./Components/Header";
// import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Cards from "./Components/CardsNav";
import ProductCards from "./Components/ProductCards";
import ViewCards from "./Components/ViewCards";
import BestSelling from "./Components/BestSelling";
import BuyCards from "./Components/BuyCards";
import BuyCards2 from "./Components/BuyCards2";
import NewArival from "./Components/NewArival";
// import Footer from "./Components/Footer";
// import ContactFooter from "./Components/ContactFooter";
export default function Home() {
  return (
   <div>
    <Header/>
    {/* <Navbar/> */}
    <Hero/>
    <Cards/>
    <ProductCards/>
    <ViewCards/>
    <BestSelling/>
    <BuyCards/>
    <BuyCards2/>
    <NewArival/>
    {/* <Footer/> */}
    {/* <ContactFooter/> */}
   </div>
  );
}
