// MainLayout.tsx
import { Outlet } from "react-router"; // or react-router-dom
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    // FIX: Added 'w-full relative overflow-x-hidden'
    // 'overflow-x-hidden': Cuts off any rogue elements trying to push width > 100%
    // 'w-full': Ensures the layout itself is constrained
    <div className="flex flex-col min-h-screen w-full relative overflow-x-hidden">
      {/* Navbar Spacer */}
      <div className="h-[var(--navbar-height)] w-full">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="flex-grow flex flex-col w-full">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
