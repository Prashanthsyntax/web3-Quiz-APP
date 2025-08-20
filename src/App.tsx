import Navbar from "./components/Navbar";
import algosdk from "algosdk";
import Footer from "./components/Footer";

function App() {
  // console.log("AlgoSDK: ", algosdk);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
