import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Partners from "./pages/Partners";
import Home from "./pages/Home";
import Conference from "./pages/Conference";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/conference" element={<Conference />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
