"use client";
import React from "react";

import { sepolia } from "@starknet-react/chains";
import {
  StarknetConfig,
  braavos,
  jsonRpcProvider,
  paymasterRpcProvider,
  ready,
  useInjectedConnectors,
  voyager,
} from "@starknet-react/core";

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  const { connectors } = useInjectedConnectors({
    // Show these connectors if the user has no connector installed.
    recommended: [ready(), braavos()],
    // Hide recommended connectors if the user has any connector installed.
    includeRecommended: "always",
    // Randomize the order of the connectors.
    order: "alphabetical",
  });

  return (
    <StarknetConfig
      chains={[sepolia]}
      provider={jsonRpcProvider({
        rpc: () => {
          return { nodeUrl: process.env.NEXT_PUBLIC_RPC_URL ?? "" };
        },
      })}
      connectors={connectors}
      autoConnect={true}
      explorer={voyager}
      paymasterProvider={paymasterRpcProvider({
        rpc: () => {
          return {
            nodeUrl: "https://starknet.paymaster.avnu.fi",
            headers: { "x-paymaster-api-key": process.env.AVNU_API_KEY ?? "" },
          };
        },
      })}
    >
      {children}
    </StarknetConfig>
  );
}
