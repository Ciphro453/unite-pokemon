import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import TierList from "./components/TierList";
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/tier-list" element={<TierList />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
