import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter";
import { Wallet, Gift, Trophy, Users, Shield, Coins } from "lucide-react"; // icons

function Home() {
  const features = [
    {
      title: "Connect Wallet",
      desc: "Securely connect your Algorand wallet to start playing.",
      icon: <Wallet className="w-8 h-8 text-teal-400" />,
    },
    {
      title: "Earn Points",
      desc: "Get rewarded with points for every correct answer.",
      icon: <Gift className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Leaderboard",
      desc: "Compete with others and climb to the top of the leaderboard.",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Community",
      desc: "Join a growing blockchain learning community.",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
    {
      title: "Secure & Fair",
      desc: "Built on Algorand for transparent and fair rewards.",
      icon: <Shield className="w-8 h-8 text-red-400" />,
    },
    {
      title: "Claim Rewards",
      desc: "Redeem your points for exciting blockchain rewards.",
      icon: <Coins className="w-8 h-8 text-purple-400" />,
    },
  ];

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
      <main className="flex flex-col justify-center items-center py-12 px-4">
        {/* Buttons */}
        <div className="flex gap-6 mb-12">
          <Link
            to="/topics"
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-green-400 to-teal-500 hover:scale-105 transform transition text-xl font-semibold shadow-lg"
          >
            Quiz
          </Link>
          <a
            href="https://algorand.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transform transition text-xl font-semibold shadow-lg"
          >
            Explore
          </a>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gray-800/50 shadow-lg hover:bg-gray-800 transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-teal-300">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default Home;
