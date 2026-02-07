"use client";

import { COUNTER_ABI } from "@/abi/counter_abi";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { COUNTER_CONTRACT_ADDRESS, myProvider } from "@/lib/utils";
import {
  useAccount,
  useContract,
  useReadContract,
  useSendTransaction,
} from "@starknet-react/core";
import { AnimatePresence, motion } from "framer-motion";
import { Loader2, RefreshCcw, RotateCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Abi, Contract } from "starknet";

export default function Home() {
  const [counter, setCount] = useState(0);
  const [increaseAmount, setIncreaseAmount] = useState(1);
  const [isJsCountLoading, setIsJsCountLoading] = useState(false);

  const {
    data: count,
    isLoading,
    refetch: refetchCount,
    isFetching,
  } = useReadContract({
    abi: COUNTER_ABI as Abi,
    address: COUNTER_CONTRACT_ADDRESS,
    functionName: "get_count",
    args: [],
    refetchInterval: 10000,
  });

  const { address } = useAccount();
  const { contract } = useContract({
    abi: COUNTER_ABI as Abi,
    address: COUNTER_CONTRACT_ADDRESS,
  });

  const { send: increase } = useSendTransaction({
    calls:
      contract && address
        ? [contract.populate("increase_count", [increaseAmount])]
        : undefined,
  });

  const { send: decrease } = useSendTransaction({
    calls:
      contract && address
        ? [contract.populate("decrease_count", [increaseAmount])]
        : undefined,
  });

  async function getjsCount() {
    const contract = new Contract({
      abi: COUNTER_ABI,
      address: COUNTER_CONTRACT_ADDRESS,
      providerOrAccount: myProvider,
    });

    setIsJsCountLoading(true);
    try {
      const result = await contract.get_count();
      console.log("Current count from JS:", result);
      return result;
    } finally {
      setIsJsCountLoading(false);
    }
  }

  useEffect(() => {
    getjsCount().then((res) => {
      setCount(Number(res));
    });
  }, []);

  // async function executeWithPaymaster() {
  //   // Execute any transaction - gas is paid from your credits
  //   if (!account || !contract) return;

  //   const feeDetails: PaymasterDetails = {
  //     feeMode: {
  //       mode: "default",
  //       gasToken: USDC_SEPOLIA,
  //     },
  //   };

  //   const feeEstimation = await account?.estimatePaymasterTransactionFee(
  //     [
  //       {
  //         contractAddress: COUNTER_CONTRACT_ADDRESS,
  //         entrypoint: "increase_count_by_one",
  //         calldata: [String(increaseAmount)],
  //       },
  //     ],
  //     feeDetails,
  //   );

  //   const result = await account.executePaymasterTransaction(
  //     [
  //       {
  //         contractAddress: COUNTER_CONTRACT_ADDRESS,
  //         entrypoint: "increase_count_by_one",
  //         calldata: [String(increaseAmount)],
  //       },
  //     ],
  //     feeDetails,
  //     feeEstimation?.suggested_max_fee_in_gas_token,
  //   );

  //   return result;
  // }

  const handleDecrease = () => decrease();
  const handleIncrease = () => increase();

  const isCountLoading = isLoading || isJsCountLoading;
  const displayedCount = count ?? counter;

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

            {isCountLoading ? (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="h-6 w-6 animate-spin" />
                <span className="text-sm">Loading count...</span>
              </div>
            ) : (
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={displayedCount}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="text-9xl font-bold tracking-tighter tabular-nums text-foreground drop-shadow-xl"
                >
                  {displayedCount}
                </motion.span>
              </AnimatePresence>
            )}
          </div>

          <div className="w-full space-y-6">
            <div className="space-y-3">
              <label
                htmlFor="increase-amount"
                className="text-sm font-medium block"
              >
                Amount:
              </label>
              <input
                id="increase-amount"
                type="number"
                min="1"
                value={increaseAmount}
                onChange={(e) => setIncreaseAmount(Number(e.target.value) || 1)}
                disabled={isCountLoading}
                className="w-full px-3 py-2 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col gap-3">
              <Button
                onClick={handleIncrease}
                disabled={isCountLoading}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2 rounded-lg transition-all"
              >
                Increase count by {increaseAmount}
              </Button>
              <Button
                onClick={handleDecrease}
                variant="outline"
                disabled={isCountLoading}
                className="w-full border-2 hover:bg-destructive/10 font-medium py-2 rounded-lg transition-all"
              >
                Decrease count by {increaseAmount}
              </Button>
            </div>

            <Button
              onClick={() => refetchCount()}
              variant="secondary"
              disabled={isCountLoading}
              className="w-full transition-transform duration-500"
            >
              {isFetching ? (
                <RotateCcw className="h-5 w-5 mr-2" />
              ) : (
                <RefreshCcw className="h-5 w-5 mr-2" />
              )}
              Refresh
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
