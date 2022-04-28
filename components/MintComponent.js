import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { config } from "../config";
import { useContract } from "../hooks/useContract";
import showMessage from "../utils/showMessage";
import { CountDown } from "./CountDown";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 66;
const MintComponent = () => {
  const { account, library } = useWeb3React();
  const [counter, setCounter] = useState(1);
  const { signContract } = useContract();
  const [currentSupply, setCurrentSupply] = useState(0);
  const [paused, setPaused] = useState(false);
  const [balance, setBalance] = useState(0);
  useEffect(() => {
    if (account) {
      console.log(signContract, "here is the contract");
      getCurrentSupply();
      getIsContractPaused();
      getBalance();
    }
  }, [account]);

  const getCurrentSupply = async () => {
    setCurrentSupply((await signContract.currentTokenCount()).toString());
  };
  const getIsContractPaused = async () => {
    setPaused(await signContract.paused());
  };
  const getBalance = async () => {
    const balance = await library.getBalance(account);
    setBalance(balance);
  };

  const LinkToEtherScan = (hash) => {
    console.log(hash, "here is the hash");
    return (
      <a
        href={`https://rinkeby.etherscan.io/tx/${hash}`}
        target="_blank"
        rel="noreferrer"
      >
        View on etherscan
      </a>
    );
  };
  const mintHandler = async () => {
    if (!account) {
      showMessage("error", "Please connect your wallet!");
      return;
    }
    const value = ethers.utils.parseEther(
      `${counter * Number(config.mintPrice)}`
    );
    if (value.gt(balance)) {
      showMessage("error", "InSufficient Balance!");
      return;
    }
    try {
      const tx = await signContract.mint(counter, {
        value: value,
      });
      showMessage("success", LinkToEtherScan(tx?.hash));

      const rs = await tx.wait();
      if (rs) {
        getCurrentSupply();
        showMessage("success", `Successfully Minted`);
      }
    } catch (error) {
      showMessage("error", error.message);
      console.log(error);
    }
    return;
  };

  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center px-3 md:px-4 lg:px-8 xl:px-12">
      <div className="">
        <h2 className="text-2xl text-gray-700 mt-5 md:mt-8 lg:mt-12 w-full text-center sm:text-left">
          Presale mint will start in:
        </h2>
        <div className="w-full text-center sm:text-left">
          <CountDown
            time={"April 29, 2022 5:00:00 AM GMT+8 (singapore time)"}
          />
        </div>
        {paused ? (
          <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 ml-3 text-black my-4 md:my-8 lg:my-12">
            Minting will start soon!
          </h2>
        ) : (
          <button
            onClick={mintHandler}
            className=" bg-gradient-to-r from-bluishCyan to-greenishCyan w-[200px] lg:px-8 py-3 text-white font-bold md:py-4   px-6 md:px-12 rounded-3xl my-4 md:my-8 lg:my-12"
          >
            Mint
          </button>
        )}
      </div>
      <div className="w-[300px]">
      <CircularProgressbar value={(currentSupply/1000)*100} text={`${currentSupply}/1000`} />
      </div>

      {/* <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 ml-3 text-bluishCyan">
        {currentSupply}/1000 Sold
      </h2>
      <div className="w-full sm:w-10/12 md:w-3/4 lg:w-1/2  rounded-xl bg-white p-4 md:p-6 flex flex-col justify-center items-start flex-wrap my-4 md:my-6">
        <div className="w-full flex justify-between items-start">
          <p className="text-black text-base md:text-lg">Number of tokens</p>
          <Counter counter={counter} setCounter={setCounter} />
        </div>
        <div className="w-full flex justify-between items-start">
          <p className="text-black text-base md:text-lg">Your total amount</p>
          <div>
            <p className="text-bluishCyan text-lg text-right md:text-xl xl:text-2xl">
              {counter * Number(config.mintPrice)}
            </p>
            <p className="text-gray-500 text-xs md:text-sm ">
              ({config.mintPrice}ETH per token)
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default MintComponent;
