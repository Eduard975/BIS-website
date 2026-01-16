import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Ood from "./pages/Ood";
import Partners from "./pages/Partners";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ood" element={<Ood />} />
            <Route path="/partners" element={<Partners />} />
          </Route>
        </Routes>
      </main>
      <footer className="bg-gray-900 text-white p-6 text-center">
        © 2026 BEST Iasi Symposium
      </footer>
    </>
  );
}

export default App;
