import { Link } from "react-router-dom";

const topics = ["Blockchain", "Web3", "Algorand", "Fullstack", "AI", "Cloud"];

export default function Topics() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Topic</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {topics.map((topic) => (
          <Link
            key={topic}
            to={`/quiz/${topic.toLowerCase()}`}
            className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transform transition text-lg font-semibold shadow-md text-center"
          >
            {topic}
          </Link>
        ))}
      </div>
    </div>
  );
}
