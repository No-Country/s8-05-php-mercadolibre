import { ReactNode } from "react";
import Footer from "./Footer";
import NavbarComponent from "./NavbarComponent";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="overflow-x-hidden">
      <NavbarComponent />
      {children}
      <Footer />
    </div>
  );
}
