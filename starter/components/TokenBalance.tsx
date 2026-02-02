"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAccount, useBalance } from "@starknet-react/core";
import { STRK_SEPOLIA } from "@/lib/coins";

export function TokenBalance() {
  const { address, isConnected } = useAccount();
  const [balance, setBalance] = useState<string | null>(null);
  const { data, isLoading: loading } = useBalance({
    token: STRK_SEPOLIA,
    address,
    refetchInterval: 5000,
    watch: true,
  });

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
      <span className="text-sm font-medium font-mono">
        {parseFloat(data!.formatted).toFixed(2)} STRK
      </span>
    </div>
  );
}
