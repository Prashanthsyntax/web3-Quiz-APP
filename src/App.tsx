import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Quiz from "./pages/Quiz";
import Home from "./pages/Home";
import Topics from "./pages/Topics";
import { ToastContainer } from "react-toastify";

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
      </div>
      <ToastContainer />
    </Router>
  );
}

export default App;
