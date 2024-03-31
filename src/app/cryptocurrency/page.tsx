"use client";

import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

import { getCurrencyRates } from "@/server-actions";
import Card from "@/components/Shared/Card";

const CryptocurrencyPage = () => {
  const [rates, setRates] = useState<BitcoinPriceIndexData>({});

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
    <div className="flex flex-col w-full gap-20 p-6">
      <div className="">
        <h1 className="text-3xl font-bold">Bitcoin Price Index (BPI)</h1>
        <p className="text-muted-foreground">
          Rates will be re-fetched every 2 seconds
        </p>
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
