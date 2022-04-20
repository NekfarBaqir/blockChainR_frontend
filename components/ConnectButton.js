import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import { config } from "../config";
import { shortenAddress } from "../utils/shortedAddress";

export const injected = new InjectedConnector({
  supportedChainIds: [config.chainId],
});

// export function ConnectWallet

export function WalletConnectButton({ children, ...props }) {
  const { account, activate } = useWeb3React();

  const addressInfo = account ? shortenAddress(account) : "Connect Wallet";

  const connector = injected;

  async function connect() {
    if (account) return;
    try {
      await activate(connector);
    } catch (error) {
      console.error(error);
    }
  }
  
  return (
    <button
      onClick={connect}
      className={`
          !outline-none normal-case text-sm ml-auto !rounded-full 
          min-w-[124px]
          `}
      {...props}
    >
      {addressInfo}
    </button>
  );
}
