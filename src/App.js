import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { Error } from "./pages/Error/Error";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme/theme";
import { darkTheme } from "./theme/theme";
import { useState, useEffect } from "react";
import { createContext } from "react";
import "./App.css";
export const SwitchContext = createContext();
const App = () => {
  const [switchState, setSwitchState] = useState(() => {
    const savedState = localStorage.getItem("switchState");
    return savedState ? JSON.parse(savedState) : false;
  });
  const [flagState, setFlagState] = useState(() => {
    const savedFlagState = localStorage.getItem("flagState");
    return savedFlagState ? JSON.parse(savedFlagState) : false;
  });

  useEffect(() => {
    localStorage.setItem("flagState", JSON.stringify(flagState));
  }, [flagState]);

  useEffect(() => {
    localStorage.setItem("switchState", JSON.stringify(switchState));
  }, [switchState]);

  const handleFlagClick = () => setFlagState(!flagState);

  return (
    <SwitchContext.Provider
      value={{ switchState, setSwitchState, handleFlagClick, flagState }}
    >
      <ThemeProvider theme={switchState ? darkTheme : lightTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="projects" element={<Projects />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </SwitchContext.Provider>
  );
};

export default App;
