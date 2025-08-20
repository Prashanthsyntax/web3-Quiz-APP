import { createContext, useContext, useState, useEffect } from "react";
import { PeraWalletConnect } from "@perawallet/connect";

type WalletContextType = {
  accountAddress: string | null;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => Promise<void>;
};

const WalletContext = createContext<WalletContextType | null>(null);

const peraWallet = new PeraWalletConnect();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [accountAddress, setAccountAddress] = useState<string | null>(null);

  useEffect(() => {
    peraWallet.reconnectSession().then((accounts: string[]) => {
      if (accounts.length) {
        setAccountAddress(accounts[0]);
        peraWallet.connector?.on("disconnect", () => {
          setAccountAddress(null);
        });
      }
    });
  }, []);

  const connectWallet = async () => {
    const newAccounts: string[] = await peraWallet.connect();
    setAccountAddress(newAccounts[0]);

    peraWallet.connector?.on("disconnect", () => {
      setAccountAddress(null);
    });
  };

  const disconnectWallet = async () => {
    await peraWallet.disconnect();
    setAccountAddress(null);
    localStorage.removeItem("PeraWallet.Wallet");
  };

  return (
    <WalletContext.Provider
      value={{ accountAddress, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const ctx = useContext(WalletContext);
  if (!ctx) throw new Error("useWallet must be used inside WalletProvider");
  return ctx;
}
