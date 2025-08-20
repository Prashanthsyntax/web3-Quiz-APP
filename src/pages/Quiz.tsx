import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const quizData: Question[] = [
  {
    question: "Which blockchain is this quiz app built on?",
    options: ["Ethereum", "Algorand", "Solana", "Polygon"],
    answer: "Algorand",
  },
  {
    question: "What wallet are we connecting to in this project?",
    options: ["MetaMask", "Trust Wallet", "Pera Wallet", "Phantom"],
    answer: "Pera Wallet",
  },
  {
    question: "What SDK are we using to interact with Algorand?",
    options: ["web3.js", "ethers.js", "algosdk", "wagmi"],
    answer: "algosdk",
  },
];

const Quiz: React.FC = () => {
  const [userAnswers, setUserAnswers] = useState<string[]>(Array(quizData.length).fill(""));
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleOptionChange = (qIndex: number, option: string) => {
    const newAnswers = [...userAnswers];
    newAnswers[qIndex] = option;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    quizData.forEach((q, index) => {
      if (userAnswers[index] === q.answer) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">🚀 Web3 Quiz App</h1>

      {!submitted ? (
        <div className="w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg">
          {quizData.map((q, qIndex) => (
            <div key={qIndex} className="mb-6">
              <h2 className="text-lg font-semibold mb-2">{q.question}</h2>
              <div className="grid grid-cols-2 gap-3">
                {q.options.map((option, oIndex) => (
                  <label
                    key={oIndex}
                    className={`cursor-pointer border p-2 rounded-lg text-center ${
                      userAnswers[qIndex] === option
                        ? "bg-green-600 border-green-400"
                        : "bg-gray-700 border-gray-500"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`question-${qIndex}`}
                      value={option}
                      checked={userAnswers[qIndex] === option}
                      onChange={() => handleOptionChange(qIndex, option)}
                      className="hidden"
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold"
          >
            Submit Quiz
          </button>
        </div>
      ) : (
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">
            🎯 Your Score: {score} / {quizData.length}
          </h2>
          {score >= 2 ? (
            <p className="text-green-400 text-xl">✅ Pass — You did great!</p>
          ) : (
            <p className="text-red-400 text-xl">❌ Fail — Try again!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
