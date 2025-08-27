import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Plans from "./components/Plans";
import About from "./components/About";
import Trainer from "./components/Trainer";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="plans">
          <Plans />
        </div>

        <div id="about">
          <About />
        </div>

        <div id="trainer">
          <Trainer />
        </div>

        <div id="contact">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;