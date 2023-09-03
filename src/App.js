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
export const SwitchContext = createContext();
const App = () => {
  const [switchState, setSwitchState] = useState(() => {
    const savedState = localStorage.getItem("switchState");
    return savedState ? JSON.parse(savedState) : false;
  });

  useEffect(() => {
    localStorage.setItem("switchState", JSON.stringify(switchState));
  }, [switchState]);

  return (
    <SwitchContext.Provider value={{ switchState, setSwitchState }}>
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
