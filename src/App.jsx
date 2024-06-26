import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import GempaDirasakan from "./pages/Gempa-Dirasakan";
import GempaTerkini from "./pages/Gempa-Terkini";
// import Sandbox from "./pages/Sandbox";
import ThemeContext from "./lib/ThemeContext";
import { useState } from "react";

function App() {
  const theme = useState("light");
  return (
    <ThemeContext.Provider value={theme}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/gempa-dirasakan" element={<GempaDirasakan />} />
        <Route path="/gempa-terkini" element={<GempaTerkini />} />
        {/* <Route path="/sandbox" element={<Sandbox />} /> */}
        <Route path="/robots.txt" Component={"../robots.txt"} />
        <Route path="/sitemap.xml" Component={"../sitemap.xml"} />
        <Route path="*" Component={NotFound} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
