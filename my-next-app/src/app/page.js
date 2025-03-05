import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#222222]">
    <Navbar/>
    <Header/>
    <Footer/>
    </div>
    </>
  );
}
