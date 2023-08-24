import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About/About";
import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact/Contact";
import { Projects } from "./pages/Projects/Projects";
import { Error } from "./pages/Error/Error";
import { ThemeProvider } from "@mui/material";
import { MuiTheme } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={MuiTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
