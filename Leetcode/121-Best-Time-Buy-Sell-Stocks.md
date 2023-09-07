Best Time Buy Sell Stocks

--------

Brute force:
- Iterate over array and for every element, iterate again over array to find and store max profit

Using 2 pointers:
- Initialize 2 pointers (at 0th and 1st index) & profit as 0
- While loop (condition: sell counter reaches the end)
    - compare if price at sell pointer (i.e. sell price) is higher
        - YES: find difference between sell and buy values -> update profit by taking max of current profit and difference
        - NO: update buy pointer to take place of sell pointer
    - Increment sell pointer

- Return profit
