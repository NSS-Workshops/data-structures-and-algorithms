import { useAutoGradeQuiz } from "../../components/useAutoGradeQuiz";
import { TestResult } from "../../utils/test_utils";

export const choosingDataStructuresChapter = {
  id: 'choosing-data-structures',
  title: 'AI Model Selection - Choosing the Right Data Structure for the Job',
  sectionId: 'combining-patterns',
  previousChapterId: 'recognizing-patterns',
  content: `

## The AI Revolution: Fighting Back Against Global Cooling

The next morning, Dr. Maya Patel found herself in the institute's AI research lab, surrounded by powerful computers running complex climate models. The room was noticeably warmer than the rest of the building—a welcome relief from the harsh reality outside where crops were failing across three continents and millions faced starvation as the global cooling accelerated.

Her colleague, Dr. James Chen, the head of AI research, was explaining their latest breakthrough to the team. "Yesterday, you learned to recognize patterns in our rapidly cooling climate," James began, adjusting his glasses as he pulled up a complex diagram. "Today, we're tackling something revolutionary: building massive AI systems that serve a dual purpose."

Maya's eyes lit up with excitement. "James is talking about the **Heat Generation Protocol**. We've discovered that massive AI data centers—the kind needed to process global cooling data—generate enormous amounts of heat. If we can strategically deploy these systems worldwide, we might actually help warm the planet back up while simultaneously predicting and managing the cooling crisis."

"Think about it," James continued, "every GPU running our cooling prediction models generates heat. Every server processing ice formation data warms the air around it. We're not just managing data structures anymore—we're managing AI models that could literally save humanity by heating the planet while predicting our survival strategies."

## The Challenge: AI Model Marketplace

James clicked to the next slide, showing a flowchart of their proposed system. "Imagine a marketplace for AI models, specifically designed for climate research. Scientists can:

1. **Deploy heat-generating AI models** strategically across the globe
2. **Maximize computational heat output** while maintaining prediction accuracy
3. **Coordinate thousands of data centers** to create warming zones
4. **Track heat generation metrics** alongside model performance
5. **Manage power consumption** to maximize heat per watt

"The question is: what data structures should we use to build this heat-generating survival system efficiently?"

### Understanding the Requirements

Maya stepped forward to address the team. "Before we choose data structures, let's analyze what operations we need to perform frequently:

- **Fast model lookup** by ID, name, or cooling category
- **Efficient searching and filtering** by multiple cooling criteria
- **Quick performance comparisons** between cooling prediction models
- **Relationship tracking** between models and historical cooling datasets
- **Version management** with chronological ordering
- **Duplicate detection** to avoid redundant cooling models

"Each of these requirements suggests different data structure choices. This is the art of software engineering—matching the right tool to the specific job."

## Data Structure Decision Framework

James pulled up a decision tree diagram. "Here's our framework for choosing data structures in complex systems:

### 1. **Need Fast Lookups?** → Maps/Hash Tables
- Model registry: ID → Model details
- Category index: Category → List of models
- Performance cache: Model ID → Metrics

### 2. **Need Unique Collections?** → Sets
- Supported algorithms: Set of algorithm names
- Required features: Set of feature requirements
- Training datasets: Set of dataset IDs

### 3. **Need Ordered Data?** → Arrays/Lists
- Model rankings by performance
- Version history (chronological)
- Search results (sorted by relevance)

### 4. **Need Complex Relationships?** → Nested Structures
- Model → Set of compatible datasets
- Dataset → Map of performance metrics per model
- Category → Map of subcategories → Arrays of models

"The key insight," Maya added, "is that real-world systems almost always require **combinations** of data structures, not just one."

## ⏱️ Challenge 1: Building the AI Model Registry

James opened a coding environment. "Let's start by implementing the core of our system: an AI model registry that can efficiently store, search, and manage climate AI models."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`AIModelRegistry\` class
- Use Maps for fast lookups, Sets for unique collections, Arrays for ordered data
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge teaches you how to choose the right data structure for each specific operation," James explained. "Notice how we use different structures for different access patterns."

## Advanced Pattern: Multi-Index Data Structures

After the team completed the first challenge, Maya introduced a more advanced concept. "In real AI systems, we often need to query the same data in multiple ways. For example:

- Find models by **category** (temperature, precipitation, storms)
- Find models by **algorithm type** (neural network, random forest, SVM)
- Find models by **performance threshold** (accuracy > 90%)
- Find models by **dataset compatibility** (works with satellite data)

"This requires what we call **multi-index data structures**—maintaining multiple indexes into the same data."

### The Multi-Index Pattern

James drew a diagram showing how multiple Maps can index the same model data:

\`\`\`
Models Storage: Map<ID, ModelData>
     ↑
     └── Referenced by multiple indexes:
         ├── Category Index: Map<Category, Set<ID>>
         ├── Algorithm Index: Map<Algorithm, Set<ID>>
         ├── Performance Index: Map<PerformanceRange, Set<ID>>
         └── Dataset Index: Map<DatasetID, Set<ID>>
\`\`\`

"The beauty of this pattern," Maya explained, "is that we store each model only once, but we can find it through multiple different search paths. This is both memory-efficient and provides fast lookups for any query type."

## ⏱️ Challenge 2: Multi-Index Model Search System

"Now let's implement a sophisticated search system that can handle complex queries," James said, opening another coding challenge.

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`ModelSearchEngine\` class
- Create multiple indexes for different search criteria
- Support complex queries with multiple filters
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

"This challenge demonstrates how to build systems that are both fast and flexible," Maya noted. "By choosing the right combination of data structures, we can support complex queries without sacrificing performance."

## Real-World Application: Climate Model Recommendation Engine

James pulled up their actual production system. "Let me show you how these concepts come together in our real climate model recommendation engine."

### The Recommendation Algorithm

"When a climate scientist describes their research needs, our system needs to:

1. **Parse requirements** into searchable criteria
2. **Find candidate models** using our multi-index system
3. **Score models** based on relevance and performance
4. **Rank results** and return the best matches

"Each step requires careful data structure choices."

\`\`\`javascript
class ClimateModelRecommendationEngine {
  constructor() {
    this.modelRegistry = new AIModelRegistry();
    this.searchEngine = new ModelSearchEngine();
    this.performanceCache = new Map(); // Cache expensive calculations
    this.userPreferences = new Map();  // Learn from user behavior
  }
  
  recommendModels(requirements) {
    // Step 1: Parse requirements
    const criteria = this.parseRequirements(requirements);
    
    // Step 2: Find candidates using multi-index search
    const candidates = this.searchEngine.findModels(criteria);
    
    // Step 3: Score each candidate
    const scoredModels = candidates.map(model => ({
      model,
      score: this.calculateRelevanceScore(model, requirements)
    }));
    
    // Step 4: Sort by score and return top results
    return scoredModels
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map(item => item.model);
  }
}
\`\`\`

## ⏱️ Challenge 3: Performance Optimization with Caching

"Our final challenge involves optimizing performance through smart caching," Maya announced. "In AI systems, some calculations are expensive—model training metrics, similarity scores, performance predictions. We need to cache these intelligently."

🔓 **Uncomment the below code section in the editor 👉:**
- Implement the \`PerformanceOptimizer\` class
- Use Maps for caching expensive calculations
- Implement cache invalidation strategies
- **Click Run Tests**
- **Inspect 📋 Console Output window and run test to check for correctness!**

## Data Structure Selection Principles

As the team worked through the challenges, James summarized the key principles they had learned:

### 1. **Analyze Access Patterns First**
- How will data be queried most frequently?
- What operations need to be fastest?
- Which data relationships are most important?

### 2. **Choose Structures Based on Operations**
- **Maps**: Fast key-based lookups (O(1))
- **Sets**: Unique collections and membership testing (O(1))
- **Arrays**: Ordered data and indexed access (O(1) by index)
- **Nested structures**: Complex relationships and multi-dimensional data

### 3. **Consider Trade-offs**
- **Memory vs. Speed**: More indexes = faster queries but more memory
- **Simplicity vs. Flexibility**: Simple structures are easier to maintain
- **Read vs. Write performance**: Optimize for your most common operations

### 4. **Plan for Scale**
- How will performance change as data grows?
- Which operations might become bottlenecks?
- When might you need to restructure?

## The Impact: Accelerating Climate Research

Maya addressed the team as they completed their work. "What we've built today isn't just a technical exercise. This AI model selection system is already helping climate scientists around the world:

- **Hurricane researchers** can quickly find the best storm prediction models
- **Ice sheet scientists** can compare different melting rate algorithms
- **Carbon cycle experts** can identify optimal CO2 modeling approaches
- **Policy makers** can access the most accurate climate projection tools

"By choosing the right data structures, we've created a system that processes thousands of model queries per day, helping accelerate climate research when time is critical."

### Real Success Stories

James shared some concrete examples:

"Last month, researchers studying Arctic ice loss used our system to find a neural network model that improved their prediction accuracy by 15%. The week before, hurricane forecasters discovered a new ensemble method that extended their prediction window by 2 days—potentially saving lives through earlier evacuations."

"These improvements are possible because we built a system that can efficiently manage and search through thousands of AI models. The data structures we chose make the difference between a system that works and one that transforms how scientists work."

## Looking Forward: The Next Challenge

As the session concluded, Maya looked ahead to their next topic. "Tomorrow, we'll dive into analyzing trade-offs—understanding when to choose speed over memory, simplicity over flexibility, and how to make these decisions in complex, real-world systems."

"You'll learn how to profile performance, identify bottlenecks, and optimize systems that need to handle millions of climate data points while supporting thousands of concurrent users."

James nodded. "And we'll see how all these concepts come together in our final project: building a comprehensive climate monitoring and prediction system that integrates everything you've learned."

The team left feeling confident and excited, knowing they had just learned skills that directly contribute to understanding and addressing climate change—one of the most important challenges of our time.`,
  exercise: {
    starterCode: `/*
AI Model Selection System Challenge

Dr. Maya and Dr. James need your help building an AI model registry and search system
for climate research. You'll implement three interconnected systems that demonstrate
how to choose the right data structures for different operations.

Key Concepts:
- Maps for fast lookups and indexing
- Sets for unique collections and membership testing
- Arrays for ordered data and rankings
- Multi-index patterns for flexible querying
*/

// ⏱️ Challenge 1: AI Model Registry
// 🔓 Uncomment the below code section and implement the required logic:

/*
class AIModelRegistry {
  constructor() {
    // TODO: Initialize data structures for storing models
    // Hint: You'll need Maps for fast lookups, Sets for categories, Arrays for versions
  }
  
  registerModel(modelId, modelData) {
    // TODO: Register a new AI model
    // modelData: { name, category, algorithm, accuracy, datasets, version }
    // Handle version tracking and category indexing
  }
  
  getModel(modelId) {
    // TODO: Retrieve model by ID
    // Return null if not found
  }
  
  getModelsByCategory(category) {
    // TODO: Get all models in a specific category
    // Return array of model objects
  }
  
  getTopModels(category, limit = 5) {
    // TODO: Get top models by accuracy in a category
    // Return array sorted by accuracy (highest first)
  }
  
  updateModelVersion(modelId, newVersion, newAccuracy) {
    // TODO: Update model with new version and accuracy
    // Maintain version history
  }
  
  getAllCategories() {
    // TODO: Return Set of all available categories
  }
}
*/

// ⏱️ Challenge 2: Multi-Index Model Search Engine
// 🔓 Uncomment the below code section and implement the required logic:

/*
class ModelSearchEngine {
  constructor(modelRegistry) {
    this.modelRegistry = modelRegistry;
    // TODO: Initialize multiple indexes for different search criteria
    // Hint: Create Maps for category, algorithm, performance ranges, dataset compatibility
  }
  
  indexModel(modelId, modelData) {
    // TODO: Add model to all relevant indexes
    // Update category index, algorithm index, performance index, dataset index
  }
  
  findModelsByAlgorithm(algorithm) {
    // TODO: Find all models using a specific algorithm
    // Return array of model IDs
  }
  
  findModelsByPerformance(minAccuracy) {
    // TODO: Find models with accuracy >= minAccuracy
    // Return array of model IDs sorted by accuracy
  }
  
  findModelsByDataset(datasetId) {
    // TODO: Find models compatible with a specific dataset
    // Return array of model IDs
  }
  
  complexSearch(criteria) {
    // TODO: Handle complex search with multiple criteria
    // criteria: { category?, algorithm?, minAccuracy?, datasetId? }
    // Return intersection of all matching criteria
  }
  
  removeFromIndexes(modelId) {
    // TODO: Remove model from all indexes (for cleanup)
  }
}
*/

// ⏱️ Challenge 3: Performance Optimizer with Caching
// 🔓 Uncomment the below code section and implement the required logic:

/*
class PerformanceOptimizer {
  constructor(searchEngine) {
    this.searchEngine = searchEngine;
    // TODO: Initialize caching structures
    // Hint: Use Maps for different types of caches with TTL (time-to-live)
  }
  
  getCachedSearch(searchKey, searchFunction) {
    // TODO: Implement caching for expensive search operations
    // Check cache first, execute function if not found, store result
    // searchKey: string identifier for the search
    // searchFunction: function that performs the actual search
  }
  
  calculateModelSimilarity(modelId1, modelId2) {
    // TODO: Calculate similarity between two models (expensive operation)
    // Use caching to avoid recalculating
    // Consider: algorithm type, accuracy difference, shared datasets
    // Return similarity score 0-1 (1 = identical)
  }
  
  getRecommendations(modelId, limit = 3) {
    // TODO: Get similar models using cached similarity calculations
    // Return array of recommended model IDs sorted by similarity
  }
  
  invalidateCache(pattern) {
    // TODO: Invalidate cache entries matching a pattern
    // Used when models are updated or removed
  }
  
  getCacheStats() {
    // TODO: Return cache performance statistics
    // Return: { hits: number, misses: number, hitRate: percentage }
  }
}
*/`,
    solution: `/*
AI Model Selection System - Complete Solution

This solution demonstrates choosing the right data structures for different operations
in a complex AI model management system.
*/

class AIModelRegistry {
  constructor() {
    this.models = new Map(); // modelId -> model data
    this.categoryIndex = new Map(); // category -> Set of model IDs
    this.versionHistory = new Map(); // modelId -> Array of versions
  }
  
  registerModel(modelId, modelData) {
    // Store the model
    this.models.set(modelId, { ...modelData, id: modelId });
    
    // Update category index
    const category = modelData.category;
    if (!this.categoryIndex.has(category)) {
      this.categoryIndex.set(category, new Set());
    }
    this.categoryIndex.get(category).add(modelId);
    
    // Initialize version history
    if (!this.versionHistory.has(modelId)) {
      this.versionHistory.set(modelId, []);
    }
    this.versionHistory.get(modelId).push({
      version: modelData.version,
      accuracy: modelData.accuracy,
      timestamp: new Date()
    });
  }
  
  getModel(modelId) {
    return this.models.get(modelId) || null;
  }
  
  getModelsByCategory(category) {
    const modelIds = this.categoryIndex.get(category);
    if (!modelIds) return [];
    
    return Array.from(modelIds).map(id => this.models.get(id));
  }
  
  getTopModels(category, limit = 5) {
    const categoryModels = this.getModelsByCategory(category);
    return categoryModels
      .sort((a, b) => b.accuracy - a.accuracy)
      .slice(0, limit);
  }
  
  updateModelVersion(modelId, newVersion, newAccuracy) {
    const model = this.models.get(modelId);
    if (!model) return false;
    
    // Update model data
    model.version = newVersion;
    model.accuracy = newAccuracy;
    
    // Add to version history
    this.versionHistory.get(modelId).push({
      version: newVersion,
      accuracy: newAccuracy,
      timestamp: new Date()
    });
    
    return true;
  }
  
  getAllCategories() {
    return new Set(this.categoryIndex.keys());
  }
}

class ModelSearchEngine {
  constructor(modelRegistry) {
    this.modelRegistry = modelRegistry;
    this.algorithmIndex = new Map(); // algorithm -> Set of model IDs
    this.performanceIndex = new Map(); // performance range -> Set of model IDs
    this.datasetIndex = new Map(); // dataset ID -> Set of model IDs
  }
  
  indexModel(modelId, modelData) {
    // Index by algorithm
    const algorithm = modelData.algorithm;
    if (!this.algorithmIndex.has(algorithm)) {
      this.algorithmIndex.set(algorithm, new Set());
    }
    this.algorithmIndex.get(algorithm).add(modelId);
    
    // Index by performance (group into ranges)
    const performanceRange = this.getPerformanceRange(modelData.accuracy);
    if (!this.performanceIndex.has(performanceRange)) {
      this.performanceIndex.set(performanceRange, new Set());
    }
    this.performanceIndex.get(performanceRange).add(modelId);
    
    // Index by datasets
    if (modelData.datasets) {
      for (const datasetId of modelData.datasets) {
        if (!this.datasetIndex.has(datasetId)) {
          this.datasetIndex.set(datasetId, new Set());
        }
        this.datasetIndex.get(datasetId).add(modelId);
      }
    }
  }
  
  getPerformanceRange(accuracy) {
    if (accuracy >= 0.9) return 'excellent';
    if (accuracy >= 0.8) return 'good';
    if (accuracy >= 0.7) return 'fair';
    return 'poor';
  }
  
  findModelsByAlgorithm(algorithm) {
    const modelIds = this.algorithmIndex.get(algorithm);
    return modelIds ? Array.from(modelIds) : [];
  }
  
  findModelsByPerformance(minAccuracy) {
    const matchingIds = new Set();
    
    // Check all performance ranges that meet the minimum
    for (const [range, ids] of this.performanceIndex) {
      const rangeMin = this.getRangeMinimum(range);
      if (rangeMin >= minAccuracy) {
        for (const id of ids) {
          matchingIds.add(id);
        }
      }
    }
    
    // Filter by exact accuracy and sort
    const results = Array.from(matchingIds)
      .map(id => ({ id, model: this.modelRegistry.getModel(id) }))
      .filter(item => item.model && item.model.accuracy >= minAccuracy)
      .sort((a, b) => b.model.accuracy - a.model.accuracy)
      .map(item => item.id);
    
    return results;
  }
  
  getRangeMinimum(range) {
    switch (range) {
      case 'excellent': return 0.9;
      case 'good': return 0.8;
      case 'fair': return 0.7;
      default: return 0;
    }
  }
  
  findModelsByDataset(datasetId) {
    const modelIds = this.datasetIndex.get(datasetId);
    return modelIds ? Array.from(modelIds) : [];
  }
  
  complexSearch(criteria) {
    let results = null;
    
    // Start with category search if specified
    if (criteria.category) {
      const categoryModels = this.modelRegistry.getModelsByCategory(criteria.category);
      results = new Set(categoryModels.map(m => m.id));
    }
    
    // Intersect with algorithm results
    if (criteria.algorithm) {
      const algorithmResults = new Set(this.findModelsByAlgorithm(criteria.algorithm));
      results = results ? 
        new Set([...results].filter(id => algorithmResults.has(id))) : 
        algorithmResults;
    }
    
    // Intersect with performance results
    if (criteria.minAccuracy) {
      const performanceResults = new Set(this.findModelsByPerformance(criteria.minAccuracy));
      results = results ? 
        new Set([...results].filter(id => performanceResults.has(id))) : 
        performanceResults;
    }
    
    // Intersect with dataset results
    if (criteria.datasetId) {
      const datasetResults = new Set(this.findModelsByDataset(criteria.datasetId));
      results = results ? 
        new Set([...results].filter(id => datasetResults.has(id))) : 
        datasetResults;
    }
    
    return results ? Array.from(results) : [];
  }
  
  removeFromIndexes(modelId) {
    // Remove from all indexes
    for (const [algorithm, ids] of this.algorithmIndex) {
      ids.delete(modelId);
    }
    for (const [range, ids] of this.performanceIndex) {
      ids.delete(modelId);
    }
    for (const [dataset, ids] of this.datasetIndex) {
      ids.delete(modelId);
    }
  }
}

class PerformanceOptimizer {
  constructor(searchEngine) {
    this.searchEngine = searchEngine;
    this.searchCache = new Map(); // search results cache
    this.similarityCache = new Map(); // model similarity cache
    this.cacheStats = { hits: 0, misses: 0 };
  }
  
  getCachedSearch(searchKey, searchFunction) {
    // Check cache first
    if (this.searchCache.has(searchKey)) {
      this.cacheStats.hits++;
      return this.searchCache.get(searchKey);
    }
    
    // Execute search function
    this.cacheStats.misses++;
    const result = searchFunction();
    
    // Store in cache
    this.searchCache.set(searchKey, result);
    
    return result;
  }
  
  calculateModelSimilarity(modelId1, modelId2) {
    // Create cache key (order-independent)
    const cacheKey = [modelId1, modelId2].sort().join('-');
    
    if (this.similarityCache.has(cacheKey)) {
      return this.similarityCache.get(cacheKey);
    }
    
    const model1 = this.searchEngine.modelRegistry.getModel(modelId1);
    const model2 = this.searchEngine.modelRegistry.getModel(modelId2);
    
    if (!model1 || !model2) return 0;
    
    let similarity = 0;
    
    // Algorithm similarity (40% weight)
    if (model1.algorithm === model2.algorithm) {
      similarity += 0.4;
    }
    
    // Accuracy similarity (30% weight)
    const accuracyDiff = Math.abs(model1.accuracy - model2.accuracy);
    const accuracySimilarity = Math.max(0, 1 - accuracyDiff);
    similarity += accuracySimilarity * 0.3;
    
    // Dataset overlap (30% weight)
    if (model1.datasets && model2.datasets) {
      const set1 = new Set(model1.datasets);
      const set2 = new Set(model2.datasets);
      const intersection = new Set([...set1].filter(x => set2.has(x)));
      const union = new Set([...set1, ...set2]);
      const datasetSimilarity = intersection.size / union.size;
      similarity += datasetSimilarity * 0.3;
    }
    
    // Cache the result
    this.similarityCache.set(cacheKey, similarity);
    
    return similarity;
  }
  
  getRecommendations(modelId, limit = 3) {
    const cacheKey = \`recommendations-\${modelId}-\${limit}\`;
    
    return this.getCachedSearch(cacheKey, () => {
      const allModels = Array.from(this.searchEngine.modelRegistry.models.keys());
      const similarities = allModels
        .filter(id => id !== modelId)
        .map(id => ({
          modelId: id,
          similarity: this.calculateModelSimilarity(modelId, id)
        }))
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, limit);
      
      return similarities.map(item => item.modelId);
    });
  }
  
  invalidateCache(pattern) {
    // Remove cache entries matching pattern
    for (const key of this.searchCache.keys()) {
      if (key.includes(pattern)) {
        this.searchCache.delete(key);
      }
    }
    
    for (const key of this.similarityCache.keys()) {
      if (key.includes(pattern)) {
        this.similarityCache.delete(key);
      }
    }
  }
  
  getCacheStats() {
    const total = this.cacheStats.hits + this.cacheStats.misses;
    const hitRate = total > 0 ? (this.cacheStats.hits / total * 100).toFixed(1) : 0;
    
    return {
      hits: this.cacheStats.hits,
      misses: this.cacheStats.misses,
      hitRate: parseFloat(hitRate)
    };
  }
}`,
    tests: [
      {
        name: "Test AIModelRegistry basic functionality",
        test: (code) => {
          try {
            const testCode = code + `
            // Test AIModelRegistry
            const registry = new AIModelRegistry();
            
            // Register models
            registry.registerModel('model1', {
              name: 'Hurricane Predictor',
              category: 'weather',
              algorithm: 'neural_network',
              accuracy: 0.92,
              datasets: ['satellite', 'buoy'],
              version: '1.0'
            });
            
            registry.registerModel('model2', {
              name: 'Temperature Forecaster',
              category: 'weather',
              algorithm: 'random_forest',
              accuracy: 0.88,
              datasets: ['ground_station'],
              version: '2.1'
            });
            
            registry.registerModel('model3', {
              name: 'Ice Sheet Analyzer',
              category: 'ice',
              algorithm: 'neural_network',
              accuracy: 0.95,
              datasets: ['satellite'],
              version: '1.5'
            });
            
            return {
              model1: registry.getModel('model1'),
              weatherModels: registry.getModelsByCategory('weather'),
              topWeatherModels: registry.getTopModels('weather', 2),
              categories: registry.getAllCategories(),
              updateSuccess: registry.updateModelVersion('model1', '1.1', 0.94)
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.model1 || result.model1.name !== 'Hurricane Predictor') {
              return new TestResult({ passed: false, message: "Model retrieval not working" });
            }
            
            if (!result.weatherModels || result.weatherModels.length !== 2) {
              return new TestResult({ passed: false, message: "Category filtering not working" });
            }
            
            if (!result.topWeatherModels || result.topWeatherModels[0].accuracy !== 0.92) {
              return new TestResult({ passed: false, message: "Top models sorting not working" });
            }
            
            if (!result.categories || !result.categories.has('weather')) {
              return new TestResult({ passed: false, message: "Category tracking not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "AIModelRegistry should handle model storage, categorization, and version tracking."
      },
      {
        name: "Test ModelSearchEngine multi-index functionality",
        test: (code) => {
          try {
            const testCode = code + `
            // Test ModelSearchEngine
            const registry = new AIModelRegistry();
            const searchEngine = new ModelSearchEngine(registry);
            
            // Register and index models
            const models = [
              { id: 'model1', name: 'Hurricane Predictor', category: 'weather', algorithm: 'neural_network', accuracy: 0.92, datasets: ['satellite', 'buoy'], version: '1.0' },
              { id: 'model2', name: 'Temperature Forecaster', category: 'weather', algorithm: 'random_forest', accuracy: 0.88, datasets: ['ground_station'], version: '2.1' },
              { id: 'model3', name: 'Ice Sheet Analyzer', category: 'ice', algorithm: 'neural_network', accuracy: 0.95, datasets: ['satellite'], version: '1.5' }
            ];
            
            models.forEach(model => {
              registry.registerModel(model.id, model);
              searchEngine.indexModel(model.id, model);
            });
            
            return {
              neuralNetworks: searchEngine.findModelsByAlgorithm('neural_network'),
              highPerformance: searchEngine.findModelsByPerformance(0.9),
              satelliteModels: searchEngine.findModelsByDataset('satellite'),
              complexSearch: searchEngine.complexSearch({
                algorithm: 'neural_network',
                minAccuracy: 0.9
              })
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.neuralNetworks || result.neuralNetworks.length !== 2) {
              return new TestResult({ passed: false, message: "Algorithm search not working" });
            }
            
            if (!result.highPerformance || result.highPerformance.length !== 2) {
              return new TestResult({ passed: false, message: "Performance search not working" });
            }
            
            if (!result.satelliteModels || result.satelliteModels.length !== 2) {
              return new TestResult({ passed: false, message: "Dataset search not working" });
            }
            
            if (!result.complexSearch || result.complexSearch.length !== 2) {
              return new TestResult({ passed: false, message: "Complex search not working" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "ModelSearchEngine should support multi-index searching with complex queries."
      },
      {
        name: "Test PerformanceOptimizer caching functionality",
        test: (code) => {
          try {
            const testCode = code + `
            // Test PerformanceOptimizer
            const registry = new AIModelRegistry();
            const searchEngine = new ModelSearchEngine(registry);
            const optimizer = new PerformanceOptimizer(searchEngine);
            
            // Register models
            registry.registerModel('model1', {
              name: 'Hurricane Predictor',
              category: 'weather',
              algorithm: 'neural_network',
              accuracy: 0.92,
              datasets: ['satellite', 'buoy'],
              version: '1.0'
            });
            
            registry.registerModel('model2', {
              name: 'Temperature Forecaster',
              category: 'weather',
              algorithm: 'random_forest',
              accuracy: 0.88,
              datasets: ['ground_station'],
              version: '2.1'
            });
            
            // Test caching
            const searchFunction = () => ['model1', 'model2'];
            const result1 = optimizer.getCachedSearch('test-search', searchFunction);
            const result2 = optimizer.getCachedSearch('test-search', searchFunction); // Should hit cache
            
            // Test similarity calculation
            const similarity = optimizer.calculateModelSimilarity('model1', 'model2');
            const similarity2 = optimizer.calculateModelSimilarity('model1', 'model2'); // Should hit cache
            
            // Test recommendations
            const recommendations = optimizer.getRecommendations('model1', 1);
            
            const stats = optimizer.getCacheStats();
            
            return {
              searchResult: result1,
              similarity: similarity,
              recommendations: recommendations,
              cacheStats: stats,
              hasCacheHits: stats.hits > 0
            };
            `;
            
            const result = new Function(testCode)();
            
            if (!result.searchResult || result.searchResult.length !== 2) {
              return new TestResult({ passed: false, message: "Cached search not working" });
            }
            
            if (typeof result.similarity !== 'number' || result.similarity < 0 || result.similarity > 1) {
              return new TestResult({ passed: false, message: "Similarity calculation not working" });
            }
            
            if (!result.recommendations || result.recommendations.length !== 1) {
              return new TestResult({ passed: false, message: "Recommendations not working" });
            }
            
            if (!result.hasCacheHits) {
              return new TestResult({ passed: false, message: "Caching not working - no cache hits detected" });
            }
            
            return new TestResult({ passed: true });
          } catch (error) {
            return new TestResult({ passed: false, message: error.message });
          }
        },
        message: "PerformanceOptimizer should cache expensive operations and provide recommendations."
      }
    ]
  },
  quiz: {
    component: () => {
      const CheckpointComponent = () => {
        useAutoGradeQuiz();

        return (
          <main>
            <h2>Choosing Data Structures for AI Systems</h2>
            <form className="auto-graded-quiz">
              <div
                className="question"
                data-answer="Maps for fast lookups, Sets for unique collections, Arrays for ordered data"
              >
                <p>
                  In the AI Model Registry, why do we use different data structures for different operations?
                </p>
                <input type="text" required />
                <span className="feedback" />
                <div className="explanation">
                  Each data structure is optimized for specific operations: Maps provide O(1) lookups for model retrieval,
                  Sets ensure unique categories and prevent duplicates, and Arrays maintain order for version history
                  and performance rankings.
                </div>
              </div>

              <div className="question" data-answer="multi-index">
                <p>
                  What pattern allows us to search the same data by different criteria (category, algorithm, performance)?
                </p>
                <label>
                  <input type="radio" name="search-pattern" value="multi-index" required />
                  Multi-index pattern with separate Maps for each search criteria
                </label>
                <br />
                <label>
                  <input type="radio" name="search-pattern" value="single-map" required />
                  Single Map with complex key structures
                </label>
                <br />
                <label>
                  <input type="radio" name="search-pattern" value="linear-search" required />
                  Linear search through all models for each query
                </label>
                <br />
                <label>
                  <input type="radio" name="search-pattern" value="binary-tree" required />
                  Binary search tree with multiple comparison functions
                </label>
                <span className="feedback" />
                <div className="explanation">
                  The multi-index pattern maintains separate Maps for each search criteria, allowing fast O(1) lookups
                  for any type of query while storing each model only once in the main registry.
                </div>
              </div>

              <button className="code-button test-button" type="submit">
                Submit
              </button>
            </form>
          </main>
        );
      };

      return <CheckpointComponent />;
    },
  },
};