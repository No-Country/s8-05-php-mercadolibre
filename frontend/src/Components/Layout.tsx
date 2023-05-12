import { ReactNode } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
