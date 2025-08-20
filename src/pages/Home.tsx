import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Typewriter from "../components/Typewriter";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">

      {/* Hero Section */}
      <header className="text-center py-16 px-6 bg-gradient-to-r from-teal-500/20 via-transparent to-green-500/20">
        <Typewriter text="Algorand Quiz DApp" speed={120} delay={10000} />
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Test your blockchain knowledge & earn rewards powered by{" "}
          <span className="text-teal-400 font-semibold">Algorand</span>.
        </p>
      </header>

      {/* Main Quiz Section */}
      <main className="flex justify-center items-center py-12 px-4">
        {/* Buttons */}
        <div className="flex gap-6">
          <Link
            to="/topics"
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 hover:scale-105 transform transition text-xl font-semibold shadow-lg"
          >Quiz
          </Link>
          <a
            href="https://algorand.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transform transition text-xl font-semibold shadow-lg"
          >Explore
          </a>
        </div>
      </main>
    </div>
  );
}

export default Home;
