import React, { createContext } from "react";
// import MenuSection from "./pages/MenuSection/MenuSection";
// import AppAdvertSection from "./pages/AppAdvertSection/AppAdvertSection";
import { darkTheme, lightTheme } from "./assets/styles/colors";
import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "styled-components";
import Footer from "./components/Layouts/Footer/Footer";
import Header from "./components/Layouts/Header/Header";
import MainSection from "./pages/MainSection/MainSection";
import OfferSection from "./pages/OfferSection/OfferSection";
import MenuSection from "./pages/MenuSection/MenuSection";
import AppAdvertSection from "./pages/AppAdvertSection/AppAdvertSection";

export const ThemeContext = createContext();

const App = () => {
  const { theme, toggleTheme } = useTheme();
  const currentTheme = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme: theme, toggleTheme: toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <Header />
        <MainSection />
        <OfferSection />
        <MenuSection />
        <AppAdvertSection />
        <Footer />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
