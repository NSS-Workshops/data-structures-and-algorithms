## Glossary: Sliding Window

This glossary contains important terms and concepts related to the sliding window technique in financial analysis. Understanding these terms will help you communicate effectively about algorithms and data structures during interviews and technical discussions.

### Core Sliding Window Concepts

**Sliding Window** - A computational technique that maintains a 'window' (contiguous subarray) that slides through financial time-series data to efficiently calculate indicators like moving averages and volatility measures.

**Fixed-Size Window** - A sliding window where the size remains constant, perfect for financial indicators like 20-day moving averages or 30-day volatility calculations.

**Variable-Size Window** - A sliding window that can grow or shrink based on conditions, ideal for finding optimal trading periods or performance thresholds in financial analysis.

**Window State** - The aggregated information maintained about the current window, such as sum, count, or frequency maps used in portfolio analysis and risk calculations.

### Financial Applications

**Moving Average** - A financial indicator calculated using fixed-size sliding windows to smooth price data over a specific period, commonly used in technical analysis.

**Rolling Volatility** - A risk measure calculated using sliding windows to determine price variability over consecutive time periods, essential for portfolio risk management.

**Time-Series Analysis** - The analysis of financial data points collected over time, where sliding window techniques enable efficient calculation of indicators and patterns.

### Technical Concepts

**Two Pointers** - A technique using left and right pointers to define variable-size window boundaries, commonly used in optimization problems for finding optimal trading periods.

**Frequency Counter** - A data structure (Map or object) that tracks occurrences of elements within the current window, useful for portfolio composition analysis.

**Running Calculation** - Maintaining aggregate values (like sum or variance) as the window moves, rather than recalculating from scratch - the key optimization in sliding window techniques.

### Performance and Complexity

**Time Complexity Optimization** - Sliding window reduces complexity from O(n×k) to O(n) by avoiding redundant calculations, crucial for real-time financial data processing.

**Contiguous Subarray** - A sequence of adjacent elements in financial time-series data, which sliding window techniques process efficiently for indicators and analysis.

### Problem Types

**Portfolio Optimization** - Using variable-size sliding windows to find optimal investment periods or asset allocation strategies that meet specific performance criteria.

**Risk Management** - Application of sliding window techniques to calculate rolling risk metrics like volatility, drawdown, and correlation for financial decision-making.