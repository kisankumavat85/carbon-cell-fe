export const getChartData = (rawData: Population[]) => {
  let labels: string[] = [],
    data: number[] = [];

  rawData.forEach((d) => {
    labels.push(d.Year);
    data.push(d.Population);
  });

  return { labels, data };
};
