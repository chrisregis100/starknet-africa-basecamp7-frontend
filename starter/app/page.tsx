"use client";

import React, { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Plus, Minus, RotateCcw } from "lucide-react";
import { IncreaseButton } from "@/components/IncreaseButton";
import { DecreaseButton } from "@/components/DecreaseButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  useAccount,
  useContract,
  useReadContract,
  useSendTransaction,
} from "@starknet-react/core";
import { COUNTER_ABI } from "@/abi/counter_abi";
import { Abi, Contract, PaymasterDetails, PaymasterRpc } from "starknet";
import { COUNTER_CONTRACT_ADDRESS, myProvider } from "@/lib/utils";
import { USDC_SEPOLIA } from "@/lib/coins";

export default function Home() {
  const [_, setCount] = useState(0);
  const { contract } = useContract({
    abi: COUNTER_ABI as Abi,
    address: COUNTER_CONTRACT_ADDRESS,
  });
  const { address, account } = useAccount();

  const {
    data: count,
    isLoading,
    refetch: refetchCount,
    isFetching,
  } = useReadContract({
    abi: COUNTER_ABI as Abi,
    functionName: "get_count",
    address: COUNTER_CONTRACT_ADDRESS,
    args: [],
    refetchInterval: 10000,
  });

  const { send: increase, error: errorIncrease } = useSendTransaction({
    calls:
      contract && address
        ? [contract.populate("increase_count_by_one", [])]
        : undefined,
  });

  const { send: decrease, error: errorDecrease } = useSendTransaction({
    calls:
      contract && address
        ? [contract.populate("decrease_count_by_one", [])]
        : undefined,
  });

  // useEffect(() => {
  //   async function getjsCount() {
  //     const contract = new Contract({
  //       abi: COUNTER_ABI,
  //       address: COUNTER_CONTRACT_ADDRESS,
  //       providerOrAccount: myProvider,
  //     });

  //     const result = await contract["get_count"]();

  //     return result;
  //   }

  //   const res = getjsCount();
  //   setData(res);
  // });

  const paymaster = new PaymasterRpc({
    nodeUrl: "https://starknet.paymaster.avnu.fi",
  });

  // User pays gas in USDC instead of STRK
  async function increasepaymaster() {
    if (!account || !contract) return;

    const feeDetails: PaymasterDetails = {
      feeMode: {
        mode: "sponsored",
        // gasToken: USDC_SEPOLIA,
      },
    };

    const feeEstimation = await account?.estimatePaymasterTransactionFee(
      [
        {
          contractAddress: COUNTER_CONTRACT_ADDRESS,
          entrypoint: "increase_count_by_one",
          calldata: [],
        },
      ],
      feeDetails,
    );

    const result = await account.executePaymasterTransaction(
      [
        {
          contractAddress: COUNTER_CONTRACT_ADDRESS,
          entrypoint: "increase_count_by_one",
          calldata: [],
        },
      ],
      feeDetails,
      feeEstimation?.suggested_max_fee_in_gas_token,
    );

    return result;
  }

  const handleDecrease = () => decrease();
  const handleIncrease = async () => await increasepaymaster();

  return (
    <main className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      <Navbar />

      <div className="flex-1 flex flex-col items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="relative z-10 flex flex-col items-center gap-12 max-w-md w-full">
          <div className="text-center space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight lg:text-6xl bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent">
              Counter
            </h1>
            <p className="text-muted-foreground text-lg">
              Manage your count on Starknet.
            </p>
          </div>

          <div className="w-full aspect-square max-w-[320px] bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl shadow-2xl flex items-center justify-center relative group">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-50" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-50" />

            <AnimatePresence mode="popLayout">
              <motion.span
                key={count}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-9xl font-bold tracking-tighter tabular-nums text-foreground drop-shadow-xl"
              >
                {count}
                {/* {data} */}
              </motion.span>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-6">
            <DecreaseButton onClick={handleDecrease} />

            <Button
              onClick={() => refetchCount()}
              variant="secondary"
              size="icon"
              className="h-12 w-12 rounded-full hover:rotate-180 transition-transform duration-500"
            >
              <RotateCcw className="h-5 w-5" />
            </Button>

            <IncreaseButton onClick={() => handleIncrease()} />
          </div>
        </div>
      </div>
    </main>
  );
}
