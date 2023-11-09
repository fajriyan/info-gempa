import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NextUpdate from "./pages/nextUpdate";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/next" element={<NextUpdate />} />
      <Route path="*" Component={NotFound} />
    </Routes>
  );
}

export default App;
