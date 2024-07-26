import React from "react";
import Header from "./components/header";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import Footer from "./components/Footer";
import HowToBuy from "./view/HowToBuy";

const App = () => {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Tokenomics />
      <HowToBuy />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
