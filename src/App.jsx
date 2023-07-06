import React from "react";
// import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Award from "./components/award/Award";
import Footer from "./components/footer/Footer";
import Interest from "./components/interests/Interest";

const App = () => {
  return (
    <>
      {/* <Header/> */}
      <Nav />
      <About />
      <Interest />
      <Skills />
      <Education />
      <Experience />
      <Award />
      <Footer />
    </>
  );
};

export default App;
