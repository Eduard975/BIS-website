import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 h-[var(--navbar-height)]">
        <Navbar />
      </div>

      <main className="flex-grow pt-[var(--navbar-height)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
