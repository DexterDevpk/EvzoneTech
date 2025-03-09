"use client"; // This makes it a client-side component

import { useState, useEffect } from "react";
import Preloader from "@/Components/Preloader"; // Import the Preloader
import Header from "@/Components/Header";
<<<<<<< Updated upstream
import Navbar from "@/Components/Navbar";
import Services from "@/Components/Services";
import Image from "next/image";
=======
import Services from "@/Components/Services";
import Testimonials from "@/Components/Testimonials";
import Our_projects from "@/Components/Our_projects";
>>>>>>> Stashed changes

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // Show Preloader for 3 sec
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
<<<<<<< Updated upstream
    <div className="bg-[#222222] ">
    <Navbar/>
    <Header/>
    <Services/>
    <Footer/>
    </div>
=======
      {loading ? (
        <Preloader /> // Show Preloader first
      ) : (
        <div className="bg-[#222222]">
          <Header />
          <Services />
          <Testimonials />
          <Our_projects />
        </div>
      )}
>>>>>>> Stashed changes
    </>
  );
}
