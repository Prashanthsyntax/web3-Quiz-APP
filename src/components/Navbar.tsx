import { useEffect, useState } from "react";
import { PeraWalletConnect } from "@perawallet/connect";
import { Wallet, LogOut } from "lucide-react";

const peraWallet = new PeraWalletConnect();

export default function Navbar() {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts: string[]) => {
      if (accounts.length) {
        setAccountAddress(accounts[0]);
      }
    });
  }, []);

  const handleConnectWallet = async () => {
    try {
      const newAccounts: string[] = await peraWallet.connect();
      setAccountAddress(newAccounts[0]);

      peraWallet.connector?.on("disconnect", () => {
        setAccountAddress(null);
      });
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const handleDisconnectWallet = () => {
    peraWallet.disconnect();
    setAccountAddress(null);
  };

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-green-400 to-teal-500 bg-clip-text text-transparent">
        🧠 AlgoQuiz
      </div>

      {/* Wallet Section */}
      <div>
        {accountAddress ? (
          <div className="flex items-center gap-4">
            {/* Wallet Address Display */}
            <div className="bg-gray-800 px-4 py-2 rounded-2xl flex items-center gap-2 shadow-md hover:bg-gray-700 transition">
              <Wallet className="w-4 h-4 text-green-400" />
              <span className="text-sm font-mono">
                {accountAddress.slice(0, 6)}...{accountAddress.slice(-4)}
              </span>
            </div>

            {/* Disconnect Button */}
            <button
              onClick={handleDisconnectWallet}
              className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-2xl text-sm font-medium shadow-md transition"
            >
              <LogOut className="w-4 h-4" />
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 px-6 py-2 rounded-2xl font-medium shadow-md transition"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
