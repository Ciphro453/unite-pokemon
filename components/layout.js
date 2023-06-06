import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
