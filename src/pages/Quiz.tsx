import { useParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- Quiz Data (5 Qs each) ----------
type Q = { question: string; options: string[]; answer: string };

const quizData: Record<string, Q[]> = {
  blockchain: [
    {
      question: "What is the primary purpose of a blockchain?",
      options: ["Gaming engine", "Distributed ledger", "Web server", "Password vault"],
      answer: "Distributed ledger",
    },
    {
      question: "Blocks are linked using…",
      options: ["Private keys", "Symmetric ciphers", "Cryptographic hashes", "Plain IDs"],
      answer: "Cryptographic hashes",
    },
    {
      question: "Which property prevents altering confirmed blocks?",
      options: ["Immutability", "Availability", "Latency", "Caching"],
      answer: "Immutability",
    },
    {
      question: "A smart contract is best described as…",
      options: [
        "An email template",
        "Auto-executing code with rules",
        "Manual agreement",
        "A database trigger only",
      ],
      answer: "Auto-executing code with rules",
    },
    {
      question: "Layer 1 refers to…",
      options: ["Off-chain storage", "Base blockchain protocol", "Wallet UI", "Oracle network"],
      answer: "Base blockchain protocol",
    },
  ],
  web3: [
    {
      question: "Web3 apps are primarily…",
      options: ["Centralized", "Decentralized", "Monolithic", "Serverless only"],
      answer: "Decentralized",
    },
    {
      question: "A dApp commonly connects to…",
      options: ["SMTP", "Blockchain nodes", "FTP", "SSH"],
      answer: "Blockchain nodes",
    },
    {
      question: "Signing a transaction proves…",
      options: ["Bandwidth", "Identity control of keys", "Server uptime", "Geo-location"],
      answer: "Identity control of keys",
    },
    {
      question: "A Web3 wallet is mainly used to…",
      options: ["Mine blocks", "Hold keys & sign", "Host websites", "Compile code"],
      answer: "Hold keys & sign",
    },
    {
      question: "IPFS is typically used for…",
      options: ["Compute", "Consensus", "Content addressing/storage", "Load balancing"],
      answer: "Content addressing/storage",
    },
  ],
  algorand: [
    {
      question: "Algorand’s consensus is…",
      options: ["PoW", "DPoS", "Pure Proof of Stake", "PBFT only"],
      answer: "Pure Proof of Stake",
    },
    {
      question: "ASA stands for…",
      options: [
        "Algorand Smart Agreement",
        "Algorand Standard Asset",
        "Asset Signing Algorithm",
        "Advanced Stake Account",
      ],
      answer: "Algorand Standard Asset",
    },
    {
      question: "Typical Algorand finality time is ~…",
      options: ["Seconds", "Minutes", "Hours", "Days"],
      answer: "Seconds",
    },
    {
      question: "What is TEAL in Algorand?",
      options: ["Explorer", "Wallet", "Smart contract language", "Consensus type"],
      answer: "Smart contract language",
    },
    {
      question: "Which wallet integrates well with Algorand dApps?",
      options: ["Pera Wallet", "MetaMask (native)", "Phantom", "Rainbow"],
      answer: "Pera Wallet",
    },
  ],
  fullstack: [
    {
      question: "MERN stands for…",
      options: [
        "MongoDB, Express, React, Node",
        "MariaDB, Ember, Rails, Nginx",
        "MongoDB, Express, Remix, .NET",
        "MySQL, Express, React, Next",
      ],
      answer: "MongoDB, Express, React, Node",
    },
    {
      question: "REST typically uses which verbs?",
      options: ["GET/POST/PUT/DELETE", "RUN/STOP/DEPLOY", "OPEN/CLOSE", "CONNECT/TRACE only"],
      answer: "GET/POST/PUT/DELETE",
    },
    {
      question: "JWTs are commonly used for…",
      options: ["Styling", "Authentication/Authorization", "Caching only", "DNS"],
      answer: "Authentication/Authorization",
    },
    {
      question: "Which DB is document-oriented?",
      options: ["PostgreSQL", "MongoDB", "SQLite", "MariaDB"],
      answer: "MongoDB",
    },
    {
      question: "CI/CD primarily helps with…",
      options: ["Static hosting", "Automated build & deploy", "Logging", "UI theming"],
      answer: "Automated build & deploy",
    },
  ],
  ai: [
    {
      question: "A popular deep learning library is…",
      options: ["Pandas", "TensorFlow", "Flask", "Webpack"],
      answer: "TensorFlow",
    },
    {
      question: "Overfitting means the model…",
      options: [
        "Generalizes well",
        "Memorizes training data",
        "Needs more epochs",
        "Has no bias",
      ],
      answer: "Memorizes training data",
    },
    {
      question: "Which is a technique to reduce overfitting?",
      options: ["Dropout", "Overclocking", "Concatenation only", "Inlining"],
      answer: "Dropout",
    },
    {
      question: "Gradient descent is used to…",
      options: ["Style CSS", "Minimize loss", "Render DOM", "Parse JSON"],
      answer: "Minimize loss",
    },
    {
      question: "A confusion matrix evaluates…",
      options: ["UI layout", "Classification performance", "DB schema", "Network latency"],
      answer: "Classification performance",
    },
  ],
  cloud: [
    {
      question: "Which is NOT a major cloud provider?",
      options: ["AWS", "Azure", "Google Cloud", "Oracle SQL"],
      answer: "Oracle SQL",
    },
    {
      question: "Serverless commonly refers to…",
      options: ["No servers exist", "Managed runtime functions", "Bare metal only", "On-prem clusters"],
      answer: "Managed runtime functions",
    },
    {
      question: "Kubernetes primarily manages…",
      options: ["Containers", "Emails", "Smart contracts", "Wire protocols"],
      answer: "Containers",
    },
    {
      question: "Object storage example:",
      options: ["S3", "Redis", "EBS volume", "RDS"],
      answer: "S3",
    },
    {
      question: "CDN helps with…",
      options: ["Compute", "Global content delivery", "DB indexing", "Compilers"],
      answer: "Global content delivery",
    },
  ],
};

// ---------- Component ----------
export default function Quiz() {
  const { topic } = useParams<{ topic: string }>();
  const key = (topic ?? "").toLowerCase();
  const questions = useMemo(() => quizData[key] ?? [], [key]);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-6">
        <div className="bg-gray-900/70 border border-teal-500/30 rounded-2xl p-8 text-center max-w-lg w-full">
          <h2 className="text-2xl font-bold mb-2">No quiz for “{topic}”</h2>
          <p className="text-gray-300 mb-6">Pick a topic from the topics page.</p>
          <Link
            to="/topics"
            className="inline-block px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-105 transition"
          >
            ← Back to Topics
          </Link>
        </div>
      </div>
    );
  }

  const total = questions.length;
  const progress = Math.round(((current + 1) / total) * 100);

  const handleAnswer = (option: string) => setSelected(option);

  const next = () => {
    if (selected === questions[current].answer) setScore((s) => s + 1);
    setSelected(null);
    if (current + 1 < total) setCurrent((i) => i + 1);
    else setFinished(true);
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-3xl bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-teal-500/30 p-6 md:p-8">

        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            {key.charAt(0).toUpperCase() + key.slice(1)} Quiz
          </h1>
          <span className="text-sm text-gray-300">
            Question {current + 1} / {total}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-8">
          <motion.div
            className="h-2 bg-gradient-to-r from-teal-400 to-emerald-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          />
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          {!finished ? (
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <h2 className="text-xl md:text-2xl font-bold leading-snug">
                {questions[current].question}
              </h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {questions[current].options.map((option) => {
                  const active = selected === option;
                  return (
                    <button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className={[
                        "text-left p-4 rounded-xl border transition transform hover:-translate-y-0.5 focus:outline-none",
                        active
                          ? "bg-teal-600/80 border-teal-400 shadow-lg"
                          : "bg-gray-800/80 border-gray-700 hover:border-teal-500/50",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={[
                            "mt-1 inline-block w-3 h-3 rounded-full",
                            active ? "bg-white" : "bg-teal-400/70",
                          ].join(" ")}
                        />
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between items-center pt-2">
                <Link
                  to="/topics"
                  className="text-sm text-teal-300 hover:text-teal-200 underline underline-offset-4"
                >
                  ← Change Topic
                </Link>
                <button
                  onClick={next}
                  disabled={!selected}
                  className={[
                    "px-6 py-3 rounded-xl font-semibold transition",
                    selected
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-105"
                      : "bg-gray-700 cursor-not-allowed",
                  ].join(" ")}
                >
                  {current + 1 === total ? "Finish" : "Next"}
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="text-center space-y-6"
            >
              {/* Score Ring */}
              <div className="flex justify-center">
                <div className="relative w-40 h-40">
                  <svg className="w-40 h-40 -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="#374151"
                      strokeWidth="14"
                      fill="none"
                    />
                    <motion.circle
                      cx="80"
                      cy="80"
                      r="70"
                      stroke="url(#grad)"
                      strokeWidth="14"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 70}
                      strokeDashoffset={2 * Math.PI * 70}
                      animate={{
                        strokeDashoffset:
                          (2 * Math.PI * 70 * (total - score)) / total,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-3xl font-extrabold">
                      {score}/{total}
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold">
                {score >= Math.ceil(total * 0.6)
                  ? "✅ Great job — You passed!"
                  : "❌ Keep going — Try again!"}
              </h3>

              <div className="flex flex-wrap gap-3 justify-center">
                <button
                  onClick={restart}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition font-semibold"
                >
                  Retry Topic
                </button>
                <Link
                  to="/topics"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:scale-105 transition font-semibold"
                >
                  Pick Another Topic
                </Link>
                <Link
                  to="/"
                  className="px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 hover:border-teal-500/50 transition font-semibold"
                >
                  Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
