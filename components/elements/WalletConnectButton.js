import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";

import { config } from "../../config";
import { useContract } from "../../hooks/useContract";
import { shortenAddress } from "../../utils/shortedAddress";

export const injected = new InjectedConnector({
  supportedChainIds: [config.chainId],
});

// export function ConnectWallet

export function WalletConnectButton({ children, ...props }) {
  const { account, activate } = useWeb3React();
  const { signContract } = useContract();

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

  // const reveal = async () => {
  //   if (account) {
  //     window.contract = signContract;
  //     return;
  //     await signContract.reveal(
  //       "ipfs://QmaSnfSjysrrhSVSQdvZawdZk7jSAvP5hZikhWiU5dECj9/"
  //     );
  //   }
  // };

  return (
    <>
      <button
        onClick={connect}
        className={`
         bg-gradient-to-r from-bluishCyan to-greenishCyan px-4 md:px-6 py-2 md:py-4 rounded-2xl text-white font-bold md:rounded-3xl  `}
        {...props}
      >
        {addressInfo}
      </button>
      {/* <button onClick={reveal}>Reveal</button> */}
    </>
  );
}
