import "./App.css";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import TierList from "./components/TierList";

function App() {
  return (
    <div className="min-h-screen min-w-screen bg-slate-900">
      <Navbar />
      <Homepage />
      {/* <TierList /> */}
      <Footer />
    </div>
  );
}

export default App;
