import React from "react"
import Navbar from "./Navigations/Navbar";
import Hero from "./Hero/hero";
import About from "./About/about";
import Service from "./Service/service";
import Portfolio from "./ourPortfolio/portfolio";
import Contact from "./Contactus/contact";

function App(){
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Portfolio/>
      <Contact/>
    </>
  )
}

export default App;