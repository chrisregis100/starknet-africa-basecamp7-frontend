"use client";

import { STRK_SEPOLIA } from "@/lib/coins";
import { useAccount, useBalance } from "@starknet-react/core";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// import { useWallet } from "../context/WalletContext";

export function TokenBalance() {
  const isConnected = true;
=  const { address, status } = useAccount();

  const { data, isLoading: loading } = useBalance({
    token: STRK_SEPOLIA,
    address: address,
    refetchInterval: 5000,
    watch: true,
  });

  console.log(data);

  // useEffect(() => {
  //   if (status === "disconnected") {
  //     // on disconnect
  //   } else if (status === "connected") {
  //     // on connect
  //   }
  // }, [address, status]);

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

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-full border border-border/50 hover:bg-secondary/70 transition-colors">
      <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
        <Image
          src="/starknetlogo.svg"
          alt="Starknet Logo"
          width={20}
          height={20}
        />
      </div>
      <span className="text-sm font-medium font-mono">
        {data?.formatted} STRK
      </span>
    </div>
  );
}
