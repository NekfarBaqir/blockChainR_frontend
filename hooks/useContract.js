import { ethers } from "ethers";
import { useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import { config } from "../config";
import { abi } from "../components/constants/abi";

export const Contract = new ethers.Contract(config.address, abi);

export function useContract() {
  const { account, library } = useWeb3React();

  const contract = useMemo(() => Contract.connect(library), [library]);
  const signContract = useMemo(
    () => Contract.connect(library?.getSigner()),
    [account]
  );

  return { contract, signContract };
}
