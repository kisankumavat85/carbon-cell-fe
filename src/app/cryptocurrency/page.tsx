"use client";

import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import { getCurrencyRates } from "@/server-actions";
import Card from "@/components/Shared/Card";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Web3, { RpcError } from "web3";

const CryptocurrencyPage = () => {
  const [rates, setRates] = useState<BitcoinPriceIndexData>({});
  const [connectedAccount, setConnectedAccount] = useState<string>("");

  const connectMetamask = async () => {
    if (!window?.ethereum) {
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      if (isSafari) {
        toast.error("MetaMask Extension is not available in Safari", {
          position: "top-right",
        });
        return;
      }
      toast.error("Please install Metamask", { position: "top-right" });
      return;
    }

    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      setConnectedAccount(accounts[0]);
      toast.success(`Connected to: ${accounts[0]}`, {
        position: "top-right",
      });
    } catch (error) {
      if (error instanceof RpcError) {
        toast.error(error.message, { position: "top-right" });
      } else {
        toast.error("Something went wrong", { position: "top-right" });
      }
    }
  };

  const fetchData = async () => {
    const data = await getCurrencyRates();
    setRates(data);
  };

  useEffect(() => {
    fetchData();
    const timer = setInterval(fetchData, 1000 * 2);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex flex-col w-full gap-10 lg:gap-20 p-6">
      <div className="flex items-center justify-between flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="lg:text-3xl text-2xl font-bold text-red-500">
            Bitcoin Price Index (BPI)
          </h1>
          <p className="text-muted-foreground">
            Rates will be re-fetched every 2 seconds
          </p>
        </div>
        <Button
          onClick={connectMetamask}
          className="bg-red-500 text-lg w-full md:w-fit"
          disabled={!!connectedAccount}
        >
          {connectedAccount ? "Connected" : "Connect Wallet"}
        </Button>
      </div>

      <div className="grid xl:grid-cols-4 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.keys(rates).map((key) => (
          <Card
            key={key}
            code={rates[key].code}
            description={rates[key].description}
            rate={rates[key].rate}
            symbol={parse(rates[key].symbol) as string}
          />
        ))}
      </div>
    </div>
  );
};

export default CryptocurrencyPage;
