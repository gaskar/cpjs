# Stock Buy and Sell Optimization #

Let's say you're given an array of stock prices, with each element being an integer that represents a price.

Each index thus represents a day, and the the element in that index is the stock price for that given day.

So this array below means: day 0 - $10, day 1 - $7, day 2 - $6 and so on:
```javascript
stockOptimizer([11, 7, 6, 2, 3, 9, 5, 15]);
```

Given the ability to only buy once and sell once, our goal is to maximize the amount of profit (purchase price - selling price) that we can attain and return that value. Note the only caveat is that that we cannot sell a stock before we buy one, which is important in identifying a solution. See the following examples for clarification:

Example
```javascript
stockOptimizer([10, 7, 6, 2, 3, 9, 5, 15]);

//returns 13
```
