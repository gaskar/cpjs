const stockOptimizer = (arr) => {
  if(!arr.length || arr.length === 1) return 0;

  const { length } = arr;

  let maxProfit = 0, maxSellPrice = arr[length - 1];

  for(let i = length - 1; i >= 0; i--) {
    let currentValue = arr[i];

    maxSellPrice = Math.max(maxSellPrice, currentValue);

    if(maxSellPrice - currentValue > maxProfit) {
      maxProfit = maxSellPrice - currentValue;
    }

  }

  return maxProfit;
};
