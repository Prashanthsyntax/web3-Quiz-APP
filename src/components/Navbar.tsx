import { useEffect, useState } from "react";
import algosdk from "algosdk";
import { PeraWalletConnect } from "@perawallet/connect";

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
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">🧠 AlgoQuiz</div>
      <div>
        {accountAddress ? (
          <div className="flex gap-3 items-center">
            <span className="text-sm">
              {accountAddress.slice(0, 6)}...{accountAddress.slice(-4)}
            </span>
            <button
              onClick={handleDisconnectWallet}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
            >
              Disconnect
            </button>
          </div>
        ) : (
          <button
            onClick={handleConnectWallet}
            className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
          >
            Connect Wallet
          </button>
        )}
      </div>
    </nav>
  );
}
