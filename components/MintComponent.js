import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { config } from "../config";
import { useContract } from "../hooks/useContract";
import { CountDown } from "./CountDown";
import Counter from "./elements/Counter";

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

  const mintHandler = async () => {
    const value = ethers.utils.parseEther(
      `${counter * Number(config.mintPrice)}`
    );
    if (value.gt(balance)) {
      alert("insufficient Balance!");
      return;
    }
    try {
      const tx = await signContract.mint(counter, {
        value: value,
      });

      const rs = await tx.wait();
      if (rs) {
        alert("Successfully Minted");
      }
    } catch (error) {
      console.log(error);
    }
    return;
  };

  
  return (
    <div className="flex flex-col items-start justify-center px-3 md:px-4 lg:px-8 xl:px-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-5 md:mt-8 lg:mt-12">
        Blockchainr VIP ACCESS Started
      </h2>
      <CountDown time={"April 22, 2022 5:00:00 AM GMT+8 (singapore time)"} />
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 ml-3 text-bluishCyan">
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
      </div>
      {paused ? (
        <h2 className="text-2xl md:text-3xl lg:text-4xl mt-4 ml-3 text-black">
          Minting will start soon!
        </h2>
      ) : (
        <button
          onClick={mintHandler}
          className=" bg-gradient-to-r from-bluishCyan to-greenishCyan px-6 sm:px-8 md:px-12 lg:px-16 py-2 md:py-4 rounded-3xl"
        >
          Mint
        </button>
      )}
    </div>
  );
};

export default MintComponent;
