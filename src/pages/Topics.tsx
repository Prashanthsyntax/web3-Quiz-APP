import { useNavigate } from "react-router-dom";
import { useWallet } from "../context/WalletContext";
import { toast } from "react-toastify";

const topics = ["Blockchain", "Web3", "Algorand", "Fullstack", "AI", "Cloud"];

export default function Topics() {
  const { accountAddress } = useWallet();
  const navigate = useNavigate();

  const handleTopicClick = (topic: string) => {
    if (!accountAddress) {
      toast.error("Please connect your wallet!");
      return;
    }
    navigate(`/quiz/${topic.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Topic</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => handleTopicClick(topic)}
            className={`p-6 rounded-2xl text-lg font-semibold shadow-md text-center transform transition ${
              accountAddress
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105"
                : "bg-gray-700 opacity-60 cursor-not-allowed"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </div>
  );
}
