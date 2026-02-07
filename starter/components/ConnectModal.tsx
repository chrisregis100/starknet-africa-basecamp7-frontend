"use client";

import { useState } from "react";
import { Modal } from "./ui/modal";
// import { useWallet } from "@/context/WalletContext";
import { Connector, useConnect } from "@starknet-react/core";
import { Loader2 } from "lucide-react";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConnectModal({ isOpen, onClose }: ConnectModalProps) {
  const { connect, connectors } = useConnect();
  const [connecting, setConnecting] = useState<"Braavos" | "Ready" | null>(
    null,
  );

  const handleConnect = async (connector: Connector) => {
    connect({ connector });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Connect Wallet">
      <div className="grid gap-4">
        {connectors.map((connector) => (
          <button
            key={connector.id}
            onClick={() => handleConnect(connector)}
            disabled={connecting !== null}
            className="flex items-center justify-between p-4 rounded-xl border bg-card hover:bg-accent hover:border-primary/50 transition-all group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                <img src={`${connector.icon}`} alt={connector.name} />
              </div>
              <span className="font-medium">{connector.name}</span>
            </div>
            {connecting === "Ready" && (
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
            )}
          </button>
        ))}
      </div>
    </Modal>
  );
}
