import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Topics from "./pages/Topics";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white font-sans">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz/:topic" element={<Quiz />} />
          <Route path="/topics" element={<Topics />} />
        </Routes>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-900">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
