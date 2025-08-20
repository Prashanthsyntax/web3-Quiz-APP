import { useParams } from "react-router-dom";
import { useState } from "react";

const quizData: Record<string, { question: string; options: string[]; answer: string }[]> = {
  blockchain: [
    { question: "What is a blockchain?", options: ["Database", "Ledger", "Spreadsheet", "File"], answer: "Ledger" },
    { question: "Which consensus does Bitcoin use?", options: ["PoW", "PoS", "DPoS", "PBFT"], answer: "PoW" }
  ],
  web3: [
    { question: "What does Web3 enable?", options: ["Centralized apps", "Decentralized apps", "Websites only", "Emails"], answer: "Decentralized apps" }
  ],
  algorand: [
    { question: "What consensus mechanism does Algorand use?", options: ["PoW", "PoS", "Pure PoS", "DPoS"], answer: "Pure PoS" }
  ],
  fullstack: [
    { question: "Which stack is MERN?", options: ["Mongo, Express, React, Node", "MySQL, Express, React, Next", "Mongo, Ember, Rails, Node"], answer: "Mongo, Express, React, Node" }
  ],
  ai: [
    { question: "Which library is popular for deep learning?", options: ["Pandas", "TensorFlow", "Flask", "Django"], answer: "TensorFlow" }
  ],
  cloud: [
    { question: "Which is NOT a cloud provider?", options: ["AWS", "Azure", "Google Cloud", "Oracle SQL"], answer: "Oracle SQL" }
  ],
};

export default function Quiz() {
  const { topic } = useParams<{ topic: string }>();
  const questions = quizData[topic ?? ""] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswer = (option: string) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (!questions.length) return <p className="text-center mt-20 text-xl">No quiz found for {topic}</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-6">
      {!finished ? (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-xl">
          <h2 className="text-2xl font-bold mb-4">{questions[current].question}</h2>
          <div className="grid grid-cols-1 gap-4">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="p-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
          <p className="mt-4 text-gray-400">Question {current + 1} of {questions.length}</p>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Finished 🎉</h2>
          <p className="text-xl">Your Score: {score} / {questions.length}</p>
        </div>
      )}
    </div>
  );
}
