import Navbar from "./components/Navbar";
import algosdk from "algosdk";

function App() {
  // console.log("AlgoSDK: ", algosdk);
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6 text-center">
        <h1 className="text-3xl font-bold">Welcome to AlgoGitSquad Quiz Game 🚀</h1>
        <p className="mt-4 text-gray-700">
          Connect your wallet and let’s get started!
        </p>
      </main>
    </div>
  );
}

export default App;
