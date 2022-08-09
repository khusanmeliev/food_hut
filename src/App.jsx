import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Menu from "./pages/Menu/Menu";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Offer />
      <Menu />
    </>
  );
};

export default App;
