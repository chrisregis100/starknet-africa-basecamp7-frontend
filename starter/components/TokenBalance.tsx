"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useWallet } from "../context/WalletContext";

export function TokenBalance() {
  const { isConnected } = useWallet();
  const [balance, setBalance] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isConnected) {
      setLoading(true);
      // Simulate network request
      const timer = setTimeout(() => {
        setBalance("1,000.00");
        setLoading(false);
      }, 1500);

      return () => clearTimeout(timer);
    } else {
      setBalance(null);
    }
  }, [isConnected]);

  if (!isConnected) return null;

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border/50">
        <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
        <span className="text-xs font-medium text-muted-foreground">
          Loading...
        </span>
      </div>
    );
  }

  if (!balance) return null;

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full border border-border/50 hover:bg-secondary/70 transition-colors">
      <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
        <img
          src="/starknetlogo.svg"
          alt="Starknet Logo"
          width={20}
          height={20}
        />
      </div>
      <span className="text-sm font-medium font-mono">{balance} STRK</span>
    </div>
  );
}
