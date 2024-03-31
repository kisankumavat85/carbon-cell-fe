"use server";

export const getPopulationData = async () => {
  const res = await fetch(
    "https://datausa.io/api/data?drilldowns=Nation&measures=Population",
    {
      cache: "no-store",
    }
  );
  const resData = (await res.json()).data as Population[];
  return resData;
};

export const getCurrencyRates = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
    cache: "no-store",
  });

  const resData = (await res.json()).bpi as BitcoinPriceIndexData;
  console.log("resData >>", resData);
  return resData;
};
