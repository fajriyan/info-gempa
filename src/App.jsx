import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import GempaDirasakan from "./pages/Gempa-Dirasakan";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tentang" element={<About />} />
      <Route path="/gempa-terkini" element={<GempaDirasakan />} />
      <Route path="/robots.txt" Component={"../robots.txt"} />
      <Route path="/sitemap.xml" Component={"../sitemap.xml"} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default App;
