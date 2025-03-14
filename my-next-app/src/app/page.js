"use client"; // Marks this as a client-side component

import { useState, useEffect } from "react";
import Preloader from "@/Components/Preloader"; 
import Header from "@/Components/Header";
<<<<<<< HEAD
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import OurProjects from "@/Components/OurProjects";
=======
import Navbar from "@/Components/Navbar";
import Our_projects from "@/Components/Our_projects";
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import Image from "next/image";
>>>>>>> main

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 3000); // Preloader for 3 sec
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
<<<<<<< HEAD
      {/* {loading ? (
        <Preloader />
      ) : ( */}
        <div className="bg-[#222222]">
          <Header />
          <Services />
          <Testimonials />
          <OurProjects />
        </div> 
      {/* )} */}
=======
    <div className="bg-[#222222] ">
    <Navbar/>
    <Header/>
    <Services/>
    <Testimonials/>
    <Our_projects/>
    <Footer/>
    </div>
>>>>>>> main
    </>
  );
}
