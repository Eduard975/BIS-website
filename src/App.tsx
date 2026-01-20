import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Ood from "./pages/Conference";
import Partners from "./pages/Partners";
import Home from "./pages/Home";
import Conference from "./pages/Conference";

function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/conference" element={<Conference />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
