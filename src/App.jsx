import React from "react";
import Navbar from "./containers/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import Menu from "./pages/Menu/Menu";
import MobileApp from "./pages/MooblieApp/MobileApp";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Offer />
      <Menu />
      <MobileApp />
    </>
  );
};

export default App;
