import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Homepage from "./pages/Homepage";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/tentang" element={<About />} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default App;
