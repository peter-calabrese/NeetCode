function maxProfit(prices) {
  let highestProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = 1; j < prices.length; j++) {
      if (j < i || i === j) continue;
      const profit = prices[j] - prices[i];
      highestProfit = highestProfit > profit ? highestProfit : profit;
    }
  }
  if (highestProfit < 0) return 0;
  return highestProfit;
}
