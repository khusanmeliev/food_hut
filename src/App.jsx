import React, { createContext } from "react";
import Header from "./components/Layouts/Header/Header";
import OfferSection from "./pages/OfferSection/OfferSection";
import MenuSection from "./pages/MenuSection/MenuSection";
import AppAdvertSection from "./pages/AppAdvertSection/AppAdvertSection";
import { darkTheme, lightTheme } from "./assets/styles/colors";
import useTheme from "./hooks/useTheme";
import { ThemeProvider } from "styled-components";
import MainSection from "./pages/MainSection/MainSection";

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
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
