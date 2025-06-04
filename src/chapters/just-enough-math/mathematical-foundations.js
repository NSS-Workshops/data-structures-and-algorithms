export const mathematicalFoundationsChapter = {
  id: 'mathematical-foundations',
  title: 'Mathematical Foundations for Programming',
  sectionId: 'just-enough-math',
  previousChapterId: 'exponents-logarithms',
  content: `## Mathematical Foundations for Programming

### Introduction

<video controls width="100%">
  <source src="./videos/mathematical-foundations-explanatory.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### Essential Mathematical Concepts

Programming requires understanding several key mathematical concepts that appear repeatedly in algorithm design and analysis.

### Functions and Relations

**Functions** map inputs to outputs in a predictable way:
- f(x) = 2x + 1 is a linear function
- f(x) = x² is a quadratic function
- f(x) = 2ˣ is an exponential function

**Why Functions Matter in Programming:**
- Algorithm complexity is expressed as functions of input size
- Understanding function behavior helps predict performance
- Function composition mirrors how we build complex programs from simple parts

### Sets and Logic

**Sets** are collections of distinct objects:
- {1, 2, 3, 4, 5} is a set of integers
- Set operations: union (∪), intersection (∩), difference (-)
- Empty set: ∅

**Applications in Programming:**
- Data deduplication
- Database operations (JOIN, UNION)
- Algorithm design (graph algorithms use set operations)

**Boolean Logic:**
- AND (∧): Both conditions must be true
- OR (∨): At least one condition must be true  
- NOT (¬): Inverts the truth value
- XOR (⊕): Exactly one condition must be true

### Sequences and Series

**Arithmetic Sequences**: Each term increases by a constant difference
- 1, 3, 5, 7, 9... (difference = 2)
- Sum formula: S = n(a₁ + aₙ)/2

**Geometric Sequences**: Each term is multiplied by a constant ratio
- 1, 2, 4, 8, 16... (ratio = 2)
- Sum formula: S = a₁(rⁿ - 1)/(r - 1)

**Programming Applications:**
- Loop analysis and optimization
- Memory allocation patterns
- Performance prediction

### Combinatorics and Probability

**Permutations**: Arrangements where order matters
- P(n,r) = n!/(n-r)!
- Example: Arranging 3 books from 5 = 5!/(5-3)! = 60

**Combinations**: Selections where order doesn't matter
- C(n,r) = n!/(r!(n-r)!)
- Example: Choosing 3 books from 5 = 5!/(3!2!) = 10

**Applications:**
- Algorithm complexity analysis
- Testing strategies (combinatorial testing)
- Cryptography and security
- Machine learning (probability distributions)

### Graph Theory Basics

**Graphs** consist of vertices (nodes) and edges (connections):
- **Directed vs Undirected**: Edges have direction or not
- **Weighted vs Unweighted**: Edges have values or not
- **Connected vs Disconnected**: All nodes reachable or not

**Key Concepts:**
- **Path**: Sequence of connected vertices
- **Cycle**: Path that starts and ends at same vertex
- **Tree**: Connected graph with no cycles
- **Degree**: Number of edges connected to a vertex

**Programming Applications:**
- Social networks
- Navigation systems
- Dependency resolution
- Network topology
- Data structure design

### Modular Arithmetic

**Modulo Operation**: Remainder after division
- 17 mod 5 = 2 (because 17 = 3×5 + 2)
- Properties: (a + b) mod n = ((a mod n) + (b mod n)) mod n

**Applications:**
- Hash functions
- Cryptography
- Circular data structures
- Load balancing algorithms

### Recursion and Mathematical Induction

**Mathematical Induction** proves statements for all natural numbers:
1. **Base Case**: Prove for n = 1
2. **Inductive Step**: If true for n = k, prove for n = k+1

**Recursive Thinking:**
- Break problems into smaller, similar subproblems
- Define base cases to stop recursion
- Combine solutions to solve original problem

**Examples:**
- Factorial: n! = n × (n-1)!
- Fibonacci: F(n) = F(n-1) + F(n-2)
- Tree traversal algorithms

### Practical Problem-Solving Framework

1. **Identify the Pattern**: What mathematical structure fits the problem?
2. **Choose the Right Tool**: Which mathematical concept applies?
3. **Analyze Complexity**: How does the solution scale?
4. **Optimize**: Can mathematical properties improve efficiency?

### Key Takeaways

- Mathematics provides the language for analyzing algorithms
- Pattern recognition helps choose appropriate data structures
- Understanding growth rates guides optimization decisions
- Mathematical thinking improves problem decomposition skills
- These foundations support advanced topics like machine learning and cryptography

### Moving Forward

With these mathematical foundations, you're prepared to:
- Analyze algorithm complexity systematically
- Choose optimal data structures
- Design efficient solutions
- Understand advanced computer science concepts`,
  exercise: null
};