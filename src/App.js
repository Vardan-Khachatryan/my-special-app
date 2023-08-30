import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { Error } from "./pages/Error/Error";
import { ThemeProvider } from "@mui/material";
import { lightTheme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
