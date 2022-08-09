import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Offer />
    </>
  );
};

export default App;
