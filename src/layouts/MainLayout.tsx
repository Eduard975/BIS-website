import { Outlet } from "react-router";
import Navbar from "../components/Universal/Navbar";
import Footer from "../components/Universal/Footer";

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col w-full pt-[var(--navbar-height)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
