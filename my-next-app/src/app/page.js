import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Navbar from "@/Components/Navbar";
import Our_projects from "@/Components/Our_projects";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="bg-[#222222] ">
    <Navbar/>
    <Header/>
    <Services/>
    <Testimonials/>
    <Our_projects/>
    <Footer/>
    </div>
    </>
  );
}
